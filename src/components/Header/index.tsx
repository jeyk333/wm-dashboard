'use client';
import { useState, FC } from 'react';

import { HEADER_MENUS, HeaderMenuType } from '@/constants/menus';

const Header: FC = () => {
  const [selected, setSelected] = useState<number>(0);
  return (
    <div className="border-b border-border py-6 px-4 md:px-10 w-full">
      <div className="flex items-center gap-2 md:gap-3">
        {HEADER_MENUS.map((menu: HeaderMenuType) => {
          const Icon = menu.image;
          return (
            <button
              key={menu.id}
              onClick={() => setSelected(menu.id)}
              className={`flex items-center justify-center p-3 font-medium text-base md:text-lg gap-3 rounded-full ${selected === menu.id ? 'bg-primary-light' : ''}`}
            >
              <Icon color={selected === menu.id ? '#212636' : '#8a94a6'} />
              <span
                className={`${selected === menu.id ? 'text-text' : 'text-text-light'}`}
              >
                {menu.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
