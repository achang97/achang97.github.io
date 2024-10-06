import { Anchor, Tooltip } from '@mantine/core';
import { Icon, IconProps } from '@tabler/icons-react';
import { ForwardRefExoticComponent, RefAttributes } from 'react';

export type IconLinkProps = {
  label?: string;
  href: string;
  Icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  size?: number;
};

export const IconLink = ({ href, Icon, label, size = 36 }: IconLinkProps) => {
  return (
    <Tooltip label={label}>
      <Anchor href={href} target="_blank">
        <Icon size={size} />
      </Anchor>
    </Tooltip>
  );
};
