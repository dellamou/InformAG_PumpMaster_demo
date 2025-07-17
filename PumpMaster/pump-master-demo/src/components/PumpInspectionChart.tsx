import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from 'chart.js';

import { InspectionLog } from '../types/pump.ts';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

type Props = {
  logs: InspectionLog[];
};

const PumpInspectionChart = ({ logs }: Props) => {
  const data = {
    labels: logs.map((log) => log.timestamp),
    datasets: [
      {
        data: logs.map((log) => log.pressure),
        fill: false,
        borderColor: 'rgba(75,192,192,1)',
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          callback: function(_value: any, index: number) {
            // Only show every other label (7 labels out of 14 data points)
            return index % 2 === 0 ? logs[index]?.timestamp : '';
          },
        },
      },
    },
  };

  return (
    <div style={{ height: '200px' }}>
      <Line data={data} options={options} />
    </div>
  );
};

export default PumpInspectionChart;
