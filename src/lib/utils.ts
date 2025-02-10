import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('Fetched data after 2 seconds');
    }, 2000);
  });
};
