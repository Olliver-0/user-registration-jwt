import { useRef } from 'react';
import { Link } from 'react-router-dom'
import api from '../../services/api'

function Cadastro() {
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();

    async function handleSubmit(event) {
        event.preventDefault();

        try {
            await api.post('/cadastro', {
                name: nameRef.current.value,
                email: emailRef.current.value,
                password: passwordRef.current.value
            });
            alert('Usuário cadastrado com sucesso!');
        } catch(error) {
            alert('Erro ao cadastrar usuário');
        }


        console.log(nameRef.current.value);
        console.log(emailRef.current.value);
        console.log(passwordRef.current.value);
    }

    return (
        <div className="max-w-md mx-auto mt-10 bg-white p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Cadastro</h2>
            <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nome" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={nameRef} />

                <input type="email" placeholder="Email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={emailRef} />

                <input type="password" placeholder="Senha" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none" ref={passwordRef} />

                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-400">Cadastrar-se</button>
            </form>
            <Link to="/login" className="text-blue-700 hover:underline mt-4 block text-center">Já tem uma conta? Faça login</Link>
        </div>
    )
}

export default Cadastro;
