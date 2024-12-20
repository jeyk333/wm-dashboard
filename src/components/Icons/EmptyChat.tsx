import classNames from 'classnames';
import React from 'react';

function EmptyChat({
  className,
  color = '#CCFBEF',
  ...props
}: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={classNames('inline-block', className)}
      {...props}
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.125 9.88751C18.1227 11.9588 17.2989 13.9446 15.8343 15.4093C14.3696 16.8739 12.3838 17.6977 10.3125 17.7H3.72422C3.39966 17.6996 3.08852 17.5705 2.85902 17.341C2.62953 17.1115 2.50041 16.8003 2.5 16.4758V9.88751C2.5 7.81551 3.3231 5.82837 4.78823 4.36324C6.25336 2.89811 8.2405 2.07501 10.3125 2.07501C12.3845 2.07501 14.3716 2.89811 15.8368 4.36324C17.3019 5.82837 18.125 7.81551 18.125 9.88751Z"
        fill={color}
      />
    </svg>
  );
}

export default EmptyChat;