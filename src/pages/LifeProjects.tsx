import { Grid } from '@mantine/core';
import {
  IconBrandInstagram,
  IconBrandTiktok,
  IconBrandYoutube,
} from '@tabler/icons-react';
import { ImageCard } from '../components/ImageCard';

const ITEMS = [
  {
    title: 'Reed & Bow',
    subtitle: '@reedbowmusic',
    img: '/reedbowmusic.jpg',
    urls: {
      youtube: 'https://www.youtube.com/@reedbowmusic',
      instagram: 'https://www.instagram.com/reedbowmusic/',
      tiktok: 'https://www.tiktok.com/@reedbowmusic',
    },
  },
  {
    title: 'Cooking',
    subtitle: '@cookwithac',
    img: '/cooking.jpg',
    urls: {
      instagram: 'https://www.instagram.com/cookwithac/',
    },
  },
  {
    title: 'Soccer',
    subtitle: '@kickwithac',
    img: '/soccer.jpg',
    urls: {
      instagram: 'https://www.instagram.com/kickwithac/',
    },
  },
];

const LINK_CONFIG = {
  youtube: {
    label: 'YouTube',
    Icon: IconBrandYoutube,
  },
  instagram: {
    label: 'Instagram',
    Icon: IconBrandInstagram,
  },
  tiktok: {
    label: 'TikTok',
    path: 'https://www.tiktok.com/@achang97',
    Icon: IconBrandTiktok,
  },
};

export const LifeProjects = () => {
  return (
    <Grid gutter="xl">
      {ITEMS.map((item) => (
        <Grid.Col span={{ sm: 12, md: 4 }}>
          <ImageCard
            img={item.img}
            title={item.title}
            subtitle={item.subtitle}
            urls={Object.entries(item.urls).map(([label, href]) => ({
              label: LINK_CONFIG[label as keyof typeof LINK_CONFIG].label,
              Icon: LINK_CONFIG[label as keyof typeof LINK_CONFIG].Icon,
              href,
            }))}
          />
        </Grid.Col>
      ))}
    </Grid>
  );
};
