import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const CatChart = ({ list }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        if (list) {
            const groomingLevels = [1, 2, 3, 4, 5];
            const chartData = groomingLevels.map(level => {
                const filtered = list.filter(cat => cat.grooming === level);
                const avgEnergy = filtered.length
                    ? filtered.reduce((sum, cat) => sum + cat.energy_level, 0) / filtered.length
                    : 0;
                return { grooming: level, avgEnergy };
            });
            setData(chartData);
        }
    }, [list]);

    return (
        <LineChart width={500} height={300} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="grooming" label={{ value: "Grooming Level", position: 'insideBottomRight', offset: -5 }} />
            <YAxis label={{ value: "Avg Energy Level", angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="avgEnergy" stroke="#8884d8" />
        </LineChart>
    );
};

export default CatChart;