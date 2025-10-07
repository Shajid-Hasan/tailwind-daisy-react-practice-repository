import React from "react";
import {
    ScatterChart,
    Scatter,
    XAxis,
    YAxis,
    ZAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

const data = [
    { station: "Dhaka", temperature: 33, humidity: 65, aqi: 180 },
    { station: "Chittagong", temperature: 31, humidity: 70, aqi: 150 },
    { station: "Rajshahi", temperature: 36, humidity: 60, aqi: 200 },
    { station: "Sylhet", temperature: 29, humidity: 80, aqi: 120 },
    { station: "Barishal", temperature: 32, humidity: 75, aqi: 160 },
    { station: "Khulna", temperature: 35, humidity: 62, aqi: 190 }
];

const ThreeDimScatterChart = () => {
    return (
        <div className="w-full h-[500px]">
            <h2 className="text-xl font-semibold mb-4 text-center">
                3D Scatter Chart — Environmental Data
            </h2>
            <ResponsiveContainer width="100%" height="100%">
                <ScatterChart
                    margin={{
                        top: 20,
                        right: 30,
                        bottom: 20,
                        left: 30
                    }}
                >
                    <CartesianGrid />
                    <XAxis
                        type="number"
                        dataKey="temperature"
                        name="Temperature (°C)"
                        unit="°C"
                    />
                    <YAxis
                        type="number"
                        dataKey="humidity"
                        name="Humidity (%)"
                        unit="%"
                    />
                    <ZAxis
                        type="number"
                        dataKey="aqi"
                        range={[100, 800]}
                        name="Air Quality Index"
                    />
                    <Tooltip
                        cursor={{ strokeDasharray: "3 3" }}
                        formatter={(value, name) => [`${value}`, name]}
                    />
                    <Legend />
                    <Scatter
                        name="City Data"
                        data={data}
                        fill="#8884d8"
                        shape="circle"
                    />
                </ScatterChart>
            </ResponsiveContainer>
        </div>
    );
};

export default ThreeDimScatterChart;
