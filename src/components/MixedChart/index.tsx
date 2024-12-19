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
import Chat from '@/assets/images/chat-grey.png';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
  Tooltip,
  Legend,
);

const MixedChart: FC = () => {
  const data: ChartData<keyof ChartTypeRegistry, unknown, unknown> = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        type: 'line',
        label: 'Answered',
        data: [20, 18, 28, 21, 35, 28, 50, 55],
        borderColor: '#15B79F',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        pointRadius: 0,
        pointHoverRadius: 0,
        yAxisID: 'y',
        xAxisID: 'x',
      },
      {
        type: 'line',
        label: 'Incoming',
        data: [25, 16, 32, 21, 32, 24, 45, 50],
        borderColor: '#8A94A6',
        borderWidth: 2,
        tension: 0.4,
        fill: false,
        borderDash: [10, 5],
        borderDashOffset: 0,
        pointRadius: 0,
        pointHoverRadius: 0,
        yAxisID: 'y',
        xAxisID: 'x',
      },
      {
        type: 'bar',
        label: 'Experts online',
        data: [25, 35, 40, 55, 38, 32, 22],
        backgroundColor: '#FFF3C6',
        borderColor: '#FFF3C6',
        borderWidth: 1,
        borderRadius: {
          topLeft: 10,
          topRight: 10,
          bottomLeft: 0,
          bottomRight: 0,
        },
        borderSkipped: false,
        barThickness: 32,
        yAxisID: 'y2',
        xAxisID: 'x2',
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
        display: false,
        title: {
          display: false,
        },
        grid: {
          display: false,
        },
        offset: false,
      },
      x2: {
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
        position: 'left',
        borderColor: 'transparent',
        borderWidth: 0,
        min: 10,
        ticks: {
          stepSize: 10,
          beginAtZero: true,
          padding: 18.5,
        },
        title: {
          display: true,
          text: 'CONSULTATIONS',
          color: '#C4C4C4',
          font: {
            size: 8,
            weight: 600,
          },
          padding: 0,
        },
        border: {
          dash: [8],
          display: false,
        },
      },
      y2: {
        position: 'right',
        min: 10,
        borderColor: 'transparent',
        borderWidth: 0,
        ticks: {
          stepSize: 10,
          beginAtZero: true,
          padding: 18.5,
        },
        title: {
          display: true,
          text: 'EXPERTS ONLINE',
          color: '#C4C4C4',
          font: {
            size: 8,
            weight: 600,
          },
          padding: 0,
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
      image={Chat}
      title={'CONSULTATIONS'}
      classes="w-full md:w-6/12"
    >
      <div className="mt-6">
        <div className="md:h-[240px] lg:h-[320px]">
          <Chart type="bar" data={data} options={options} />
        </div>
        <div className="border-t border-border gap-4 md:gap-14 mt-4 pt-6 flex items-center flex-wrap">
          <div className="flex items-center gap-2">
            <span className="bg-[#8A94A6] h-1 w-4 rounded-full"></span>
            <p className="text-text-dark text-xs">Incoming</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#15B79F] h-1 w-4 rounded-full"></span>
            <p className="text-text-dark text-xs">Answered</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#FFE587] h-1 w-4 rounded-full"></span>
            <p className="text-text-dark text-xs">Experts online</p>
          </div>
        </div>
      </div>
    </CardWrapper>
  );
};

export default MixedChart;
