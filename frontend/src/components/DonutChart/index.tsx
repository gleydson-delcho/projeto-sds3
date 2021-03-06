import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
// import { GetStaticProps } from 'next';
import { api } from '../../services/api';
import { SaleSum } from '../../types/sale';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type ChartData = {
    labels: string[];
    series: number[];
}


export default function DonutChart(props) {

    const [chartData , setChartData] = useState<ChartData>({ labels: [], series: []});

    useEffect( () => {
        api.get('/sales/amount-by-seller')
            .then(res => {
                const data = res.data as SaleSum[];
                const myLabels = data.map(el => el.sellerName);
                const mySeries = data.map(el => el.sum);

                setChartData({ labels: myLabels, series: mySeries});
            })
    },[]);
    
    // const mockData = {
    //     series: [477138, 499928, 444867, 220426, 473088],
    //     labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    // }    

    const options = {
        legend: {
            show: true
        }
    }

    return (
        <Chart options={{ ...options, labels: chartData.labels }}
            series={chartData.series}
            type="donut"
            height="240"
        />
    );
}

// export const 