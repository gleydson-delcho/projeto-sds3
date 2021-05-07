import React, {useState} from 'react';
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

export default function DonutChart() {

    const [dataSample, setDataSample] = useState({

        mockData : {
            series: [477138, 499928, 444867, 220426, 473088],
            labels: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
        },        
        options : {
            legend: {
                show: true
            }
        }
    })
    return (
        <Chart options={{...dataSample.options, labels: dataSample.mockData.labels}}
        series={dataSample.mockData.series}
        type="donut"
        height="240"
        />
    );
}