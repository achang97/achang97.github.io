import { Card, Stack, Text, Title } from '@mantine/core';
import { ReactNode, useEffect } from 'react';

type PageTemplateProps = {
  title: string;
  subtitle?: string | string[];
  children: ReactNode;
};

export const PageTemplate = ({
  title,
  subtitle,
  children,
}: PageTemplateProps) => {
  useEffect(() => {
    window.document.title = `${title} | Andrew Chang`;
  }, [title]);

  return (
    <Stack p="md">
      <Stack mb="md">
        <Title>{title}</Title>
        {subtitle && (
          <Card bg="white" p="md" radius="md" shadow="sm" fs="italic">
            {subtitle && typeof subtitle === 'string' && (
              <Text size="lg">{subtitle}</Text>
            )}
            <Stack gap="xs">
              {subtitle &&
                Array.isArray(subtitle) &&
                subtitle.map((s) => <Text size="md">{s}</Text>)}
            </Stack>
          </Card>
        )}
      </Stack>
      {children}
    </Stack>
  );
};
