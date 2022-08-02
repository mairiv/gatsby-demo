import * as React from 'react';
import cn from 'classnames';
import * as T from './types/types';
import * as styles from './Button.module.scss';

export const ButtonTag = ({ onClick, className, children }: T.ButtonProps) => {
  return (
    <button className={cn(styles.button, className)} onClick={() => onClick?.()}>
      {children}
    </button>
  );
};
