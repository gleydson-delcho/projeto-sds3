import React, {useState} from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


export default function BarChart() {

    const [dataSample, setDataSample] = useState({

        options : {
            plotOptions: {
                bar: {
                    horizontal: true,
                }
            },
        },
        
        mockData : {
            labels: {
                categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
            },
            series: [
                {
                    name: "% Sucesso",
                    data: [43.6, 67.1, 67.7, 45.6, 71.1]                   
                }
            ]
        }
    })
    return (
        <Chart options={{...dataSample.options, xaxis: dataSample.mockData.labels}}
        series={dataSample.mockData.series}
        type="bar"
        height="240"
        />
    );
}