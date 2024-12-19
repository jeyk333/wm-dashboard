'use client';

import { useState } from 'react';
import Image from 'next/image';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import Sidebar from '@/components/Sidebar';
import Header from '@/components/Header';
import { TIME_FILTER, TimeFilterType } from '@/constants/timeFilter';
import { GLANCES, GlancesType } from '@/constants/glances';
import Profit from '@/assets/images/increase.png';
import Loss from '@/assets/images/decrease.png';
import CardWrapper from '@/components/CardWrapper';
import MixedChart from '@/components/MixedChart';
import BarChart from '@/components/BarChart';
import Chats from '@/assets/images/chat-card.png';
import ArrowUp from '@/assets/images/arrow-up.png';
import OrderTable from '@/components/OrderTable';

export default function Home() {
  const [time, setTime] = useState<string>('7');

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 overflow-auto h-screen">
        <Header />
        <div className="mx-4 md:mx-10 rounded-[20px] shadow-section my-9 py-8 px-2 md:px-6">
          <div className="flex items-center justify-between">
            <h4 className="font-medium text-[24px] md:text-[32px] text-text">
              At a glance
            </h4>
            <Select onValueChange={setTime} value={time}>
              <SelectTrigger className="w-fit rounded-lg">
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
              <div
                key={glance.id}
                className="shadow-section rounded-[20px] p-6 w-full md:w-[31.5%]"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src={glance.icon}
                    alt={glance.label}
                    height={12}
                    width={12}
                  />
                  <p className="text-xs text-text-dark font-semibold leading-[30px]">
                    {glance.label}
                  </p>
                </div>
                <p className="text-[32px] font-medium text-text my-2 leading-[38.4px]">
                  {glance.value}
                </p>
                <div className="flex items-center gap-2">
                  {glance.status === 'profit' ? (
                    <Image src={Profit} alt="Profit" width={24} height={24} />
                  ) : (
                    <Image src={Loss} alt="Profit" width={24} height={24} />
                  )}
                  <p className="text-sm">
                    <span
                      className={`${glance.status === 'profit' ? 'text-success' : 'text-error'}`}
                    >
                      {glance.percentage}%
                    </span>
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-16">
            {' '}
            <h4 className="font-medium text-[24px] md:text-[32px] text-text">
              Insights
            </h4>
            <div className="mt-6 md:mt-12 flex flex-col md:flex-row gap-6">
              <MixedChart />
              <BarChart />
              <CardWrapper
                image={Chats}
                title={'FORECASTS'}
                classes="w-full md:w-3/12 bg-forecasts bg-no-repeat bg-cover"
                titleClasses="!text-primary-light"
              >
                <div className="my-6">
                  <div className="flex justify-between flex-start">
                    <p className="text-[56px] font-medium text-white leading-[67.5px]">
                      +15%
                    </p>
                    <Image
                      src={ArrowUp}
                      alt="Profit"
                      height={35}
                      width={35}
                      className="object-contain h-[35px]"
                    />
                  </div>
                  <p className="text-sm text-white leading-[21.98px] mt-3">
                    forecasted increase in your sales closed by the end of the
                    current month
                  </p>
                </div>
                <div>
                  <div className="flex justify-between flex-start">
                    <p className="text-[56px] font-medium text-white leading-[67.5px]">
                      +20%
                    </p>
                    <Image
                      src={ArrowUp}
                      alt="Profit"
                      height={35}
                      width={35}
                      className="object-contain h-[35px]"
                    />
                  </div>
                  <p className="text-sm text-white leading-[21.98px] mt-3">
                    forecasted increase in your sales closed by the end of the
                    current month
                  </p>
                </div>
              </CardWrapper>
            </div>
          </div>
          <div className="mt-16">
            {' '}
            <h4 className="font-medium text-[24px] md:text-[32px] text-text">
              Orders
            </h4>
            <OrderTable />
          </div>
        </div>
      </div>
    </div>
  );
}
