import React from 'react';
import Head from 'next/head';
import BarChart from '../components/BarChart';
import DonutChart from '../components/DonutChart';
import DataTable from '../components/DataTable';

export default function Home() {
    return (
        <div className="container">
            <Head>
                <title>DSVendas</title>
                <meta name="description" content="Projeto desenvolido na semana spring React" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1 className="textPrimary py-3">Dashboard Vendas</h1>

            <div className="row px-3">
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                    <BarChart />
                </div>
                <div className="col-sm-6">
                    <h5 className="text-center text-secondary">Taxa de sucesso</h5>
                    <DonutChart />
                </div>
            </div>
            <div className="py3">
                <h2 className="text-primary text-center">
                    Todas as vendas
        </h2>
            </div>

            <DataTable />
        </div>
    )
}