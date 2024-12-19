import Buds from '@/assets/images/buds.png';
import { StaticImageData } from 'next/image';

export interface OrderType {
  id: number;
  image: StaticImageData;
  product: string;
  date: Date;
  time: string;
  value: string;
  commission: number;
  link: string;
}

export const Orders: OrderType[] = [
  {
    id: 0,
    image: Buds,
    product: 'One Product One Product One Product',
    date: new Date(),
    time: '2h 5m',
    value: '120,21',
    commission: 50,
    link: '#',
  },
  {
    id: 1,
    image: Buds,
    product: 'Two Product',
    date: new Date('08-18-2024'),
    time: '1h 5m',
    value: '120,21',
    commission: 55,
    link: '#',
  },
  {
    id: 2,
    image: Buds,
    product: 'Three Product',
    date: new Date('12-18-2024'),
    time: '2h 5m',
    value: '220,21',
    commission: 45,
    link: '#',
  },
  {
    id: 3,
    image: Buds,
    product: 'Four Product',
    date: new Date('12-16-2024'),
    time: '2h 5m',
    value: '320,21',
    commission: 55,
    link: '#',
  },
  {
    id: 4,
    image: Buds,
    product: 'Five Product',
    date: new Date('12-12-2024'),
    time: '2h 5m',
    value: '420,21',
    commission: 55,
    link: '#',
  },
  {
    id: 5,
    image: Buds,
    product: 'Six Product',
    date: new Date('12-10-2024'),
    time: '4h 5m',
    value: '120,21',
    commission: 35,
    link: '#',
  },
  {
    id: 6,
    image: Buds,
    product: 'Seven Product',
    date: new Date(),
    time: '2h 5m',
    value: '120,21',
    commission: 55,
    link: '#',
  },
  {
    id: 7,
    image: Buds,
    product: 'Eight Product',
    date: new Date(),
    time: '3h 5m',
    value: '620,21',
    commission: 55,
    link: '#',
  },
  {
    id: 8,
    image: Buds,
    product: 'Nine Product',
    date: new Date(),
    time: '2h 5m',
    value: '120,21',
    commission: 30,
    link: '#',
  },
  {
    id: 9,
    image: Buds,
    product: 'Ten Product',
    date: new Date(),
    time: '2h 5m',
    value: '820,21',
    commission: 15,
    link: '#',
  },
];
