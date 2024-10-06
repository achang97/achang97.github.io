import { Grid } from '@mantine/core';
import { EmbedCard } from '../components/EmbedCard';

const ITEMS = [
  {
    url: 'https://youtube.com/embed/G2Cc73BYHfM',
    title: 'Violin Sonata No. 10, Op. 96',
    artist: 'Ludwig van Beethoven',
  },
  {
    url: 'https://youtube.com/embed/_BDO87AG1Y0',
    title:
      'Violin Concerto in D Major (III. Allegro giocoso, ma non troppo vivace)',
    artist: 'Johannes Brahms',
  },
  {
    url: 'https://youtube.com/embed/xwqrrM0Az8k',
    title: 'Caprice No. 24',
    artist: 'Niccolo Paganini',
  },
  {
    url: 'https://youtube.com/embed/r3gzXU4Nr6Q',
    title: 'Sonata No. 3 in D minor (Ballade)',
    artist: 'Eugène Ysaÿe',
  },
  {
    url: 'https://youtube.com/embed/oRjZpcRj4uw',
    title: 'Scottish Fantasy (Finale: Allegro guerriero)',
    artist: 'Max Bruch',
  },
  {
    url: 'https://youtube.com/embed/kJhxMN4Lcyc',
    title: 'Violin Concerto No. 1',
    artist: 'Henryk Wieniawski',
  },
  {
    url: 'https://youtube.com/embed/WUu8mPOBu_4',
    title: 'Sonata No.2 in A minor, BWV 1003',
    artist: 'Johann Sebastian Bach',
  },
  {
    url: 'https://youtube.com/embed/F6OvyRY08ig',
    title: 'Zigeunerweisen (Gypsy Airs)',
    artist: 'Pablo de Sarasate',
  },
  {
    url: 'https://youtube.com/embed/BR7StNPAgvw',
    title: 'Violin Concerto in D minor (III. Allegro, ma non tanto)',
    artist: 'Jean Sibelius',
  },
  {
    url: 'https://youtube.com/embed/aOVnrso9s_8',
    title: `Caprice d'après l'étude en forme de valse de Saint-Saëns`,
    artist: 'Eugène Ysaÿe',
  },
];

export const ClassicalViolin = () => {
  return (
    <Grid gutter="xl">
      {ITEMS.map((item) => (
        <Grid.Col span={{ sm: 12, md: 6, lg: 4 }}>
          <EmbedCard title={item.title} subtitle={item.artist} src={item.url} />
        </Grid.Col>
      ))}
    </Grid>
  );
};
