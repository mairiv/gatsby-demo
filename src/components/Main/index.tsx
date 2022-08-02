import * as React from 'react';
import { useState, useEffect } from 'react';
import * as styles from './Main.module.scss';

type Theme = 'light' | 'dark';

export const Main = ({ children }: { children: React.ReactNode }) => {
  const initialTheme = 'light';
  const [theme, setTheme] = useState<Theme>(initialTheme);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark-theme');

      return () => {
        document.body.classList.remove('dark-theme');
      };
    }
  }, [theme]);

  const handleTogglerClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log(e.target.checked);
    const newTheme = e.target.checked ? 'dark' : 'light';
    setTheme(newTheme);
  };

  return (
    <main className={styles.main}>
      <div className={styles.toggler}>
        <label>
          <input type="checkbox" onChange={handleTogglerClick} />
          dark theme
        </label>
      </div>
      {children}
    </main>
  );
};
