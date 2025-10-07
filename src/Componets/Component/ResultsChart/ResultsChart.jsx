import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    {
        "id": 1,
        "name": "Rafiul Islam",
        "physics": 85,
        "chemistry": 78,
        "math": 92
    },
    {
        "id": 2,
        "name": "Nusrat Jahan",
        "physics": 90,
        "chemistry": 88,
        "math": 81
    },
    {
        "id": 3,
        "name": "Arman Hossain",
        "physics": 76,
        "chemistry": 69,
        "math": 74
    },
    {
        "id": 4,
        "name": "Sumaiya Akter",
        "physics": 88,
        "chemistry": 91,
        "math": 85
    },
    {
        "id": 5,
        "name": "Tanjil Ahmed",
        "physics": 67,
        "chemistry": 72,
        "math": 70
    },
    {
        "id": 6,
        "name": "Sadia Rahman",
        "physics": 82,
        "chemistry": 79,
        "math": 84
    },
    {
        "id": 7,
        "name": "Fahim Hasan",
        "physics": 91,
        "chemistry": 85,
        "math": 89
    }
]



const ResultsChart = () => {
    return (
        <div>
            <LineChart width={800} height={500} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>

                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='green'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
                
            </LineChart>
        </div>
    );
};

export default ResultsChart;