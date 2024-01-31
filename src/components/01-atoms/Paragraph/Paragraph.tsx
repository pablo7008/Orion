type TParagraphProps = {
  children: React.ReactNode;
  size: 'subtitle-1' | 'subtitle-2' | 'body-1' | 'body-2' | 'chips';
  props?: React.HTMLAttributes<HTMLParagraphElement>;
};

export function Paragraph({ children, size, props }: TParagraphProps) {
  const fontStyle: Record<TParagraphProps['size'], string[]> = {
    'subtitle-1': ['text-base', 'font-semibold'],
    'subtitle-2': ['text-sm', 'font-semibold'],
    'body-1': ['text-base', 'font-normal'],
    'body-2': ['text-sm', 'font-normal'],
    chips: ['text-xs', 'font-bold'],
  };

  const className: string[] = fontStyle[size];

  if (props?.className) {
    className.push(props.className);
  }

  return (
    <p {...props} className={className.join(' ')}>
      {children}
    </p>
  );
}
