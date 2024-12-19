import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/assets/images/logo.png';
import { SIDEBAR_MENUS, SideBarMenuType } from '@/constants/menus';
import Settings from '@/assets/images/settings.png';

const Sidebar: FC = () => {
  return (
    <div className="w-14 md:w-[60px] bg-primary border-r border-border px-2 md:px-3 py-6 relative">
      <Link href="/">
        <Image
          src={Logo}
          className="w-9 md:w-[33.2px] h-9 md:h-[33.2px]"
          width={33.2}
          height={33.2}
          alt="Wingman"
        />
      </Link>
      <div className="flex flex-col gap-[22px] pt-[30px] mt-[30px] border-t border-primary-dark">
        {SIDEBAR_MENUS.map((menu: SideBarMenuType) => (
          <Link
            href={menu.path}
            key={menu.id}
            className="w-9 h-9 rounded-lg hover:bg-white"
          >
            <Image src={menu.image} alt={menu.label} />
          </Link>
        ))}
      </div>
      <Link
        href={'#'}
        className="w-9 h-9 rounded-lg hover:bg-white absolute bottom-6"
      >
        <Image src={Settings} alt={'Settings'} />
      </Link>
    </div>
  );
};

export default Sidebar;
