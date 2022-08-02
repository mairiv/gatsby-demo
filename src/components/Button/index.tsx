import * as React from 'react';
import cn from 'classnames';
import * as T from './types/types';
import * as styles from './Button.module.scss';
import { LinkTag } from './Link';
import { ButtonTag } from './Button';

export const Button = ({ uiType, href, onClick, className, children }: T.ClickableElementProps) => {
  const isUiTypeButton = uiType === 'primaryButton' || uiType === 'secondaryButton';

  const styledClassName = cn(
    {
      [styles.main]: true,
      [styles.uiType_button]: isUiTypeButton,
      [styles[`uiType_${uiType}`]]: true
    },
    className
  );

  if (href) {
    return (
      <LinkTag className={styledClassName} href={href} onClick={() => onClick?.()}>
        {children}
      </LinkTag>
    );
  }

  return (
    <ButtonTag className={styledClassName} onClick={() => onClick?.()}>
      {children}
    </ButtonTag>
  );
};
