type THeadingProps = {
  level: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
  props?: React.HTMLAttributes<HTMLHeadingElement>;
  children: React.ReactNode;
};

/**
 * Represents a heading component with varying levels.
 *
 * @component
 * @example
 * // Example usage of Heading component
 * <Heading level="h1" props={{ className: 'custom-heading' }}>Hello World!</Heading>
 *
 * @param {Object} props - The properties of the Heading component.
 * @param {'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7'} props.level - The heading level.
 * @param {React.HTMLAttributes<HTMLHeadingElement>} [props.props] - Additional HTML attributes for the heading element.
 * @param {React.ReactNode} props.children - The content to be rendered within the heading.
 * @returns {React.ReactElement} The rendered Heading component.
 */
export function Heading({
  level,
  props,
  children,
}: THeadingProps): React.ReactElement {
  const Tag = level === 'h7' ? 'h6' : level;
  const fontStyle: Record<THeadingProps['level'], string[]> = {
    h1: ['text-4xl', 'sm:text-6xl', 'font-semibold'],
    h2: ['text-3xl', 'sm:text-5xl', 'font-semibold'],
    h3: ['text-2xl', 'sm:text-[2.125rem]', 'font-semibold'],
    h4: ['text-xl', 'sm:text-[1.625rem]', 'font-bold'],
    h5: ['text-lg', 'sm:text-2xl', 'font-semibold'],
    h6: ['text-base', 'sm:text-[1.3125rem]', 'font-semibold'],
    h7: ['text-sm', 'sm:text-lg', 'font-semibold'],
  };

  const className: string[] = fontStyle[level];

  if (props?.className) {
    className.push(props.className);
  }

  return (
    <Tag {...props} className={className.join(' ')}>
      {children}
    </Tag>
  );
}
