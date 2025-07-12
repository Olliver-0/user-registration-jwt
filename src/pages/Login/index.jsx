import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import api from '../../services/api'

function Login() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            const { data: token } = await api.post('/login', {
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
            localStorage.setItem('token', token);
            console.log(token)

            navigate('/list-users');
            
        } catch (error) {
            alert('Senha ou email incorretos');
        }


        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={emailRef} />

                <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={passwordRef} />

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Login</button>
            </form>
            <Link to="/" className="text-blue-700 hover:underline mt-4 block text-center">Não tem uma conta? Cadastre-se</Link>
        </div>
    )
}

export default Login;
