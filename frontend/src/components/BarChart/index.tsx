import React, { useEffect, useState } from 'react';
import dynamic from "next/dynamic";
import { api } from '../../services/api';
import { SaleSuccess } from '../../types/sale';
import { round } from '../../utils/format';
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type SeriesData = {
    name: string;
    data: number[];
}

type ChartData = {
    labels: {
        categories: string[];
    },
    series: SeriesData[];
}

export default function BarChart() {

    const [chartData, setChartData] = useState<ChartData>(
        {
            labels: {
                categories: []
            },
            series: [
                {
                    name: "% Sucesso",
                    data: []
                }
            ]
        }
    );

    useEffect(() => {
        api.get('/sales/success-by-seller')
            .then(res => {
                const data = res.data as SaleSuccess[];
                const myLabels = data.map(el => el.sellerName);
                const mySeries = data.map(el => round(100.0 * el.deals / el.visited, 1));

                setChartData({
                    labels: {
                        categories: myLabels
                    },
                    series: [
                        {
                            name: "% Sucesso",
                            data: mySeries
                        }
                    ]
                });
            })
    }, []);

    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    }

    // const mockData = {
    //     labels: {
    //         categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //     },
    //     series: [
    //         {
    //             name: "% Sucesso",
    //             data: [43.6, 67.1, 67.7, 45.6, 71.1]
    //         }
    //     ]
    // }

    return (
        <Chart options={{ ...options, xaxis: chartData.labels }}
            series={chartData.series}
            type="bar"
            height="240"
        />
    );
}