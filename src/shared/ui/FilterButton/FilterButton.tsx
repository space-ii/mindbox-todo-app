import { ButtonHTMLAttributes } from 'react';
import styles from './FilterButton.module.scss';
import clsx from 'clsx';

interface FilterButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
  children: React.ReactNode;
}

export const FilterButton = ({ isActive, children, ...props }: FilterButtonProps) => {
  return (
    <button
        className={clsx(styles.button, { [styles.active]: isActive })}
      {...props}
    >
      {children}
    </button>
  );
};
