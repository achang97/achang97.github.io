import { Card, Divider, Group, Text, Stack } from '@mantine/core';
import { IconLink, IconLinkProps } from './IconLink';
import { ReactNode } from 'react';

export type BaseCardProps = {
  children: ReactNode;
  title: string;
  subtitle: string;
  urls?: IconLinkProps[];
};

export const BaseCard = ({
  children,
  title,
  subtitle,
  urls,
}: BaseCardProps) => {
  return (
    <Card p="xl" radius="md" h="100%" shadow="sm">
      <Stack align="center" h="100%" gap="xs">
        <Card.Section w="100%">{children}</Card.Section>

        <Card.Section>
          <Stack gap="xs" align="center">
            <Text fw="bold" size="xl" ta="center">
              {title}
            </Text>
          </Stack>
          <Text size="sm" fs="italic" ta="center">
            {subtitle}
          </Text>
        </Card.Section>

        {urls && urls.length > 0 && (
          <Stack h="100%" w="100%" align="center" justify="flex-end">
            <Divider w="70%" />
            <Card.Section>
              <Group>
                {urls.map((url) => (
                  <IconLink
                    key={url.label}
                    label={url.label}
                    href={url.href}
                    Icon={url.Icon}
                  />
                ))}
              </Group>
            </Card.Section>
          </Stack>
        )}
      </Stack>
    </Card>
  );
};
