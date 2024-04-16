import React from 'react'
import { Link } from 'react-router-dom'

function ErrorPage() {
    return (
        <div>
            <h1>Erro 404</h1>
            <p>Página não encontrada</p>
            <h4><Link to='/'> Voltar para a pagina inicial </Link></h4>
        </div>
    )
}

export default ErrorPage