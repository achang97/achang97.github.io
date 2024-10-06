import { Image } from '@mantine/core';
import { BaseCard, BaseCardProps } from './BaseCard';

type ImageCardProps = Omit<BaseCardProps, 'children'> & {
  img: string;
  imgSize?: number;
};

export const ImageCard = ({
  img,
  imgSize,
  title,
  subtitle,
  urls,
}: ImageCardProps) => {
  return (
    <BaseCard title={title} subtitle={subtitle} urls={urls}>
      <Image
        src={img}
        alt={title}
        w={imgSize}
        h={imgSize}
        maw={300}
        mah={300}
        m="auto"
        radius="md"
      />
    </BaseCard>
  );
};
