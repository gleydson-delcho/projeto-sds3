import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="container my-5">
      <div className="jumbotron">
        <h1 className="display-4">DSVendas</h1>
        <p className="lead my-4">
          Analise o desempenho das suas vendas por diferentes perspectivas
        </p>
        <hr />
        <p className="my-4">
          Esta aplicação consiste em exibir um dashboard a partir de dados fornecidos
          por um back end construído com Spring Boot.
        </p>
        <Link href="/dashboard" >
          <a className="btn btn-primary btn-lg my-5">Acessar o dashboard</a>
        </Link>
      </div>
    </div>
  )
}
