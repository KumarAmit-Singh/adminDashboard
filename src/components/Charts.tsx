
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,

    // use for Doughnut Chart
    ArcElement,
    // use for Line Chart
    PointElement,
    LineElement,
    // use for fill Line Chart
    Filler,
} from 'chart.js'; 

import { Bar, Doughnut, Line, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale    ,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

    // use for Doughnut Chart
    ArcElement,
    // use for Line Chart
    PointElement,
    LineElement,
    // use for fill Line Chart
    Filler
);



// Bar Chart in form of Vertical
const months = [
    'January', 
    'February', 
    'March', 
    'April', 
    'May', 
    'June', 
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

interface BarChartProps {
    // uses for the first and second side data
    data_1: number[];
    data_2: number[];
    // uses for the first and second data side title or lengeds
    title_1: string;
    title_2: string;
    // uses for the first and second data background 
    bgColor_1: string;
    bgColor_2: string;
    // when value is true the data show in horizontal form otherwise false is show in vertical form.
    horizontal?: boolean;
    // using for bar-graph to handle line or line-months
    labels?: string[];
}


// BarChart
export const BarChart = ( {
    data_1 = [],
    data_2 = [],
    title_1,
    title_2,
    bgColor_1,
    bgColor_2,
    horizontal = false,
    labels = months
}: BarChartProps ) => {

    // uses for horizontally y-axis bar graph
    const options:ChartOptions<'bar'> = {
        responsive: true,
        indexAxis: horizontal ? "y" : "x",   // uses for horizontally(y-axis) data and vertically(x-axis) data
        plugins: {
            legend: {
                display: true,       // uses for display legends(it means that data comparison scene)
            },
            title: {
                display: false,
                text: 'Chart.js Bar Chart'
            },
        },

        // scaling the line y-axis and x-axis
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: true    // for shows data lining when value is true the data line is show on browser
                },                   // when value is false the data 
            },

            x: {
                grid: {
                    display: false
                },
            },
        }
    };

    // uses for horizontally x-axis bar-graph  
    const data:ChartData<"bar", number[], string> = {
        // using for bar-graph to handle line
        labels,
        datasets: [
            {
                label: title_1,    
                data: data_1,
                backgroundColor: bgColor_1,
                barThickness: "flex",    
                barPercentage: 1,
                categoryPercentage: 0.4
            },
            {
                label: title_2,
                data: data_2,
                backgroundColor: bgColor_2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.4
            },
        ],
    };

    return <Bar width={horizontal ? "200%" : ""} options={options} data={data} />
}




// Doughnut Chart
interface DoughnutChartProps {
    // uses for show the data when hover is going on the particular section
    labels: string[]; 
    // uses for data
    data: number[];
    // uses for data section background color
    backgroundColor: string[];
    // uses for data border thinckness 
    cutout?: number | string;
    // uses for data information
    legends?: boolean;
    // uses for two or more data gapping difference
    offset?: number[];
};


export const DoughnutChart = ({
    labels,
    data,
    backgroundColor,
    cutout,
    legends = true,
    offset
}: DoughnutChartProps) => {

    const doughnutData: ChartData<"doughnut", number[], string> = {
        labels,
        datasets: [{
            data, 
            backgroundColor, 
            borderWidth: 0, 
            offset
        }]
    };

    const doughnutOptions:ChartOptions<"doughnut"> = {
        responsive: true,
        plugins: {
            legend: {
                display: legends,
                position: 'bottom',
                labels: {
                    padding: 40
                }
            }
        },
        cutout
    }
    
    return <Doughnut data={doughnutData} options={doughnutOptions} />
};




// Pie Charts
interface PieChartProps {
    // uses for show the data when hover is going on the particular section
    labels: string[]; 
    // uses for data
    data: number[];
    // use for data or section background color
    backgroundColor: string[];
    // uses for data gapping diiference
    offset?: number[];
};


export const PieChart = ({
    labels,
    data,
    backgroundColor,
    offset
}: PieChartProps) => {

    const pieChartData: ChartData<"pie", number[], string> = {
        labels,
        datasets: [{
            data, 
            backgroundColor, 
            borderWidth: 1, 
            offset
        }]
    };

    const pieChartOptions:ChartOptions<"pie"> = {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
    }
    
    return <Pie data={pieChartData} options={pieChartOptions} />
};




interface LineChartProps {
    data: number[];
    label: string;
    backgroundColor: string;
    borderColor: string;
    labels?: string[];
}


// Line Charts
export const LineChart = ( {
    data,
    label,
    backgroundColor,
    borderColor,
    labels = months
}: LineChartProps ) => {

    const options:ChartOptions<"line"> = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
            },
            title: {
                display: false,
            },
        },

        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false
                },
            },

            x: {
                grid: {
                    display: false
                },
            },
        },
    };

    const lineChartData:ChartData<"line", number[], string> = {
        labels,
        datasets: [
            {
                fill: true,    // use for data fill
                label,
                data,
                backgroundColor,
                borderColor,
            },
        ],
    };

    return <Line options={options} data={lineChartData} />
}