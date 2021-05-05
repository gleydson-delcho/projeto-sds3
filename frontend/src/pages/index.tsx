import Head from 'next/head'


export default function Home() {
  return (
    <div className="">
      <Head>
        <title>DSVendas</title>
        <meta name="description" content="Projeto desenvolido na semana spring React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <h1 className="text-primary">Hello Vendas</h1>
    </div>  
  )
}
