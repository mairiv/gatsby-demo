export type UiType = 'primaryButton' | 'secondaryButton' | 'link';

export type ClickableElementProps = {
  onClick?: () => void;
  className?: string;
  uiType: UiType;
  children: React.ReactNode;
  href?: string;
};

export type ButtonProps = {
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
};

export type LinkProps = {
  href: string;
  onClick?: () => void;
  className: string;
  children: React.ReactNode;
};
