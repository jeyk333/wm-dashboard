import Image, { StaticImageData } from 'next/image';
import { FC, ReactNode } from 'react';

interface Props {
  image: StaticImageData;
  title: string;
  children: ReactNode;
  classes?: string;
  titleClasses?: string;
}

const CardWrapper: FC<Props> = ({
  image,
  title,
  children,
  classes,
  titleClasses,
}) => {
  return (
    <div
      className={`shadow-section overflow-hidden rounded-[20px] p-6 ${classes}`}
    >
      <div className="flex items-center gap-2">
        <Image src={image} alt={title} height={12} width={12} />
        <p
          className={`text-xs text-text-dark font-semibold leading-[30px] ${titleClasses}`}
        >
          {title}
        </p>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default CardWrapper;
