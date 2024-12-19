import { FC } from 'react';
import Image from 'next/image';

import CardWrapper from '../CardWrapper';
import Chats from '@/assets/images/chat-card.png';
import ArrowUp from '@/assets/images/arrow-up.png';

const ForecastsCard: FC = () => {
  return (
    <CardWrapper
      image={Chats}
      title={'FORECASTS'}
      classes="w-full md:w-3/12 bg-forecasts bg-no-repeat bg-center bg-cover"
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
          forecasted increase in your sales closed by the end of the current
          month
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
          forecasted increase in your sales closed by the end of the current
          month
        </p>
      </div>
    </CardWrapper>
  );
};

export default ForecastsCard;
