import {
  backgroundColor,
  borderColor,
  borderWidth,
  classnames,
  padding,
  position,
  width,
  zIndex
} from 'tailwindcss-classnames';

export const root = classnames(
  width('w-full'),
  position('fixed'),
  backgroundColor('bg-white'),
  borderColor('border-b-gray-200'),
  borderWidth('border-b'),
  zIndex('z-30')
);

export const inner = classnames(padding('px-3', 'py-3', 'lg:px-5', 'lg:pl-3'));
