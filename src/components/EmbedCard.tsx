import { Box, Skeleton, useMantineTheme } from '@mantine/core';
import { BaseCard, BaseCardProps } from './BaseCard';

type EmbedCardProps = Omit<BaseCardProps, 'children'> & {
  src: string;
};

export const EmbedCard = ({ title, subtitle, urls, src }: EmbedCardProps) => {
  const theme = useMantineTheme();

  return (
    <BaseCard title={title} subtitle={subtitle} urls={urls}>
      <Box pos="relative" h={315} mb="sm">
        <Skeleton height="100%" pos="absolute" style={{ zIndex: 0 }} />
        <iframe
          width="100%"
          height="100%"
          src={src}
          frameBorder="0"
          style={{
            borderRadius: theme.radius.md,
            zIndex: 1,
            position: 'relative',
          }}
        />
      </Box>
    </BaseCard>
  );
};
