import { StaticImageData } from 'next/image';

import Chat from '@/assets/images/chat-grey.png';
import Tag from '@/assets/images/tag-grey.png';
import Tick from '@/assets/images/tick-grey.png';
import Coins from '@/assets/images/coins-grey.png';
import Coin from '@/assets/images/coin-grey.png';
import Piggy from '@/assets/images/piggy-grey.png';

export interface GlancesType {
  id: number;
  label: string;
  value: string;
  status: string;
  percentage: number;
  icon: StaticImageData;
}

export const GLANCES: GlancesType[] = [
  {
    id: 0,
    label: 'CONSULTATIONS',
    value: '24',
    status: 'profit',
    percentage: 15,
    icon: Chat,
  },
  {
    id: 1,
    label: 'ORDERS PLACED',
    value: '12',
    status: 'loss',
    percentage: 15,
    icon: Tag,
  },
  {
    id: 2,
    label: 'CONVERSION',
    value: '50',
    status: 'loss',
    percentage: 15,
    icon: Tick,
  },
  {
    id: 3,
    label: 'TOTAL SALES VALUE',
    value: '2,400',
    status: 'profit',
    percentage: 15,
    icon: Coins,
  },
  {
    id: 4,
    label: 'AVG ORDER VALUE',
    value: '240',
    status: 'profit',
    percentage: 15,
    icon: Coin,
  },
  {
    id: 5,
    label: 'COMMISSION PAID',
    value: '240',
    status: 'profit',
    percentage: 15,
    icon: Piggy,
  },
];
