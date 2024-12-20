import { ElementType } from 'react';

import TagIcon from '@/components/Icons/Tag';
import PieChart from '@/components/Icons/PieChart';
import Chat from '@/components/Icons/Chat';
import Home from '@/components/Icons/Home';
import EmptyChat from '@/components/Icons/EmptyChat';
import Users from '@/components/Icons/Users';

export interface HeaderMenuType {
  id: number;
  label: string;
  image: ElementType;
}

export interface SideBarMenuType {
  id: number;
  label: string;
  image: ElementType;
  path: string;
}

export const SIDEBAR_MENUS: SideBarMenuType[] = [
  { id: 0, label: 'Home', image: Home, path: '/' },
  { id: 1, label: 'Chat', image: EmptyChat, path: '/chat' },
  { id: 2, label: 'Communities', image: Users, path: '/communities' },
];

export const HEADER_MENUS: HeaderMenuType[] = [
  { id: 0, label: 'Summary', image: PieChart },
  { id: 1, label: 'Sales', image: TagIcon },
  { id: 2, label: 'Chats', image: Chat },
];
