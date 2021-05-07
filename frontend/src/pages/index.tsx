import Head from 'next/head'
import DataTable from '../components/DataTable'


export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>DSVendas</title>
        <meta name="description" content="Projeto desenvolido na semana spring React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <h1 className="textPrimary">Hello Vendas</h1>
      <DataTable />
    </div>  
  )
}
