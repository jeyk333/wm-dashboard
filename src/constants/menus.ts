import { ElementType } from 'react';
import { StaticImageData } from 'next/image';

import Home from '@/assets/images/home.png';
import Chats from '@/assets/images/chats.png';
import Users from '@/assets/images/users.png';
import TagIcon from '@/components/Icons/Tag';
import PieChart from '@/components/Icons/PieChart';
import Chat from '@/components/Icons/Chat';

export interface HeaderMenuType {
  id: number;
  label: string;
  image: ElementType;
}

export interface SideBarMenuType {
  id: number;
  label: string;
  image: StaticImageData;
  path: string;
}

export const SIDEBAR_MENUS: SideBarMenuType[] = [
  { id: 0, label: 'Home', image: Home, path: '/' },
  { id: 1, label: 'Chats', image: Chats, path: '#' },
  { id: 2, label: 'Users', image: Users, path: '#' },
];

export const HEADER_MENUS: HeaderMenuType[] = [
  { id: 0, label: 'Summary', image: PieChart },
  { id: 1, label: 'Sales', image: TagIcon },
  { id: 2, label: 'Chats', image: Chat },
];
