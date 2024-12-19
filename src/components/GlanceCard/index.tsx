import { FC } from 'react';
import Image from 'next/image';

import Profit from '@/assets/images/increase.png';
import Loss from '@/assets/images/decrease.png';
import { GlancesType } from '@/constants/glances';

interface Props {
  glance: GlancesType;
}

const GlanceCard: FC<Props> = ({ glance }) => {
  return (
    <div
      key={glance.id}
      className="shadow-section rounded-[20px] p-6 w-full xl:w-[31.5%] 2xl:w-[31.75%]"
    >
      <div className="flex items-center gap-2">
        <Image src={glance.icon} alt={glance.label} height={12} width={12} />
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
  );
};

export default GlanceCard;
