type TButtonProps = {
  children: React.ReactNode;
  modifier: 'primary' | 'secondary';
  props?: React.ButtonHTMLAttributes<HTMLButtonElement>;
  onClick?: <T>(args: T) => T;
};

export function Button({ children, modifier, onClick, props }: TButtonProps) {
  const styleMap = {
    primary: {
      textColor: 'text-cda-white',
      textColorHover: 'hover:text-cda-white',
      bgColor: 'bg-cda-primary',
      bgColorHover: 'hover:bg-cda-secondary',
    },
    secondary: {
      textColor: 'text-cda-black',
      textColorHover: 'hover:text-cda-white',
      bgColor: 'bg-cda-white',
      bgColorHover: 'hover:bg-cda-primary',
    },
  };

  const { textColor, textColorHover, bgColor, bgColorHover } =
    styleMap[modifier];

  const className: string[] = [
    'py-2',
    'px-4',
    'rounded',
    'font-bold',
    'transition-colors',
    textColor,
    textColorHover,
    bgColor,
    bgColorHover,
  ];

  if (props?.className) {
    className.push(props.className);
  }

  return (
    <button {...props} className={className.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
}
