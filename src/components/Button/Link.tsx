import * as React from 'react';
import cn from 'classnames';
import * as T from './types/types';
import * as styles from './Button.module.scss';

export const LinkTag = ({ href, onClick, className, children }: T.LinkProps) => {
  return (
    <a href={href} className={cn(styles.link, className)} onClick={() => onClick?.()}>
      {children}
    </a>
  );
};
