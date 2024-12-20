'use client';

import { useState, FC } from 'react';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { TIME_FILTER, TimeFilterType } from '@/constants/timeFilter';
import { GLANCES, GlancesType } from '@/constants/glances';
import MixedChart from '@/components/MixedChart';
import BarChart from '@/components/BarChart';
import OrderTable from '@/components/OrderTable';
import GlanceCard from '@/components/GlanceCard';
import ForecastsCard from '@/components/ForecastsCard';

const Home: FC = () => {
  const [time, setTime] = useState<string>('7');

  return (
    <div>
      <div className="flex items-center justify-between">
        <h4 className="font-medium text-2xl md:text-[32px] text-text">
          At a glance
        </h4>
        <Select onValueChange={setTime} value={time}>
          <SelectTrigger className="w-[97px] rounded-lg text-text border-border">
            <SelectValue placeholder="Select time" />
          </SelectTrigger>
          <SelectContent>
            {TIME_FILTER?.map((time: TimeFilterType) => (
              <SelectItem value={time.value} key={time.value}>
                {time.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="mt-6 md:mt-12 flex gap-x-8 gap-y-6 flex-wrap">
        {GLANCES.map((glance: GlancesType) => (
          <GlanceCard glance={glance} key={glance.id} />
        ))}
      </div>
      <div className="mt-16">
        {' '}
        <h4 className="font-medium text-2xl md:text-[32px] text-text">
          Insights
        </h4>
        <div className="mt-6 md:mt-12 flex flex-col md:flex-row gap-6">
          <MixedChart />
          <BarChart />
          <ForecastsCard />
        </div>
      </div>
      <div className="mt-16">
        {' '}
        <h4 className="font-medium text-2xl md:text-[32px] text-text">
          Orders
        </h4>
        <OrderTable />
      </div>
    </div>
  );
};

export default Home;
