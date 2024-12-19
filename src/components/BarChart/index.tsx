import { FC } from 'react';
import dynamic from 'next/dynamic';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
  ChartData,
  ChartTypeRegistry,
} from 'chart.js';
const Chart = dynamic(
  () => import('react-chartjs-2').then((mod) => mod.Chart),
  {
    ssr: false,
  },
);

import CardWrapper from '../CardWrapper';
import ChartBar from '@/assets/images/chart-bar.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

const BarChart: FC = () => {
  const data: ChartData<keyof ChartTypeRegistry, unknown, unknown> = {
    labels: ['This week', 'Last week'],
    datasets: [
      {
        type: 'bar',
        label: 'Consultations',
        data: [40, 52],
        backgroundColor: '#CCFBEF',
        borderColor: '#CCFBEF',
        borderWidth: 1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        maxBarThickness: 32,
      },
      {
        type: 'bar',
        label: 'Orders closed',
        data: [24, 32],
        backgroundColor: '#134E48',
        borderColor: '#134E48',
        borderWidth: 1,
        borderRadius: {
          topLeft: 6,
          topRight: 6,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        maxBarThickness: 32,
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
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
      },
      y: {
        min: 10,
        ticks: {
          stepSize: 10,
          beginAtZero: true,
          padding: 18.5,
        },
        border: {
          dash: [8],
          display: false,
        },
      },
    },
  };

  return (
    <CardWrapper
      image={ChartBar}
      title={'VS PAST PERIOD'}
      classes="w-full md:w-3/12 relative"
    >
      <div className="mt-6">
        <div className="md:h-[240px] lg:h-[320px]">
          <Chart type="bar" data={data} options={options} className="h-auto" />
        </div>
        <div className="border-t border-border gap-4 md:gap-14 mt-4 pt-6 flex items-center flex-wrap">
          <div className="flex items-center gap-2">
            <span className="bg-[#CCFBEF] h-1 w-4 rounded-full"></span>
            <p className="text-text-dark text-xs">Consultations</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#134E48] h-1 w-4 rounded-full"></span>
            <p className="text-text-dark text-xs">Orders closed</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default BarChart;
