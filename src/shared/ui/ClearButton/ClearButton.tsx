import { ButtonHTMLAttributes } from 'react';
import styles from './ClearButton.module.scss';

interface ClearButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const ClearButton = ({ children, ...props }: ClearButtonProps) => {
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};
