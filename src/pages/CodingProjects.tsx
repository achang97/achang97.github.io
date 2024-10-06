import { Title, Stack, Grid } from '@mantine/core';
import {
  IconBrandGithub,
  IconBrandProducthunt,
  IconPdf,
  IconWebhook,
} from '@tabler/icons-react';
import { ImageCard } from '../components/ImageCard';

const SECTIONS: {
  title: string;
  items: {
    title: string;
    subtitle: string;
    img: string;
    urls: {
      paper?: string;
      github?: string;
      landing?: string;
      productHunt?: string;
    };
  }[];
}[] = [
  {
    title: 'Personal Projects',
    items: [
      {
        title: 'Code Coach',
        subtitle:
          'A voice AI agent that conducts mock technical interviews and provides feedback',
        img: '/code-coach.png',
        urls: {
          landing: 'https://www.trycodecoach.com/',
          productHunt:
            'https://www.producthunt.com/products/code-coach#code-coach',
        },
      },
      {
        title: 'Elixir',
        subtitle: 'LLM observability and monitoring for voice AI agents',
        img: '/elixir.png',
        urls: {
          landing: 'https://www.tryelixir.ai/',
          productHunt: 'https://www.producthunt.com/products/elixir-2#elixir-2',
        },
      },
    ],
  },
  {
    title: 'Open Source Contributions',
    items: [
      {
        title: 'OpenLLMetry',
        subtitle: 'LLM observability and monitoring SDK',
        img: '/openllmetry.png',
        urls: {
          github: 'https://github.com/traceloop/openllmetry',
        },
      },
    ],
  },
  {
    title: 'AI "Papers"',
    items: [
      {
        title: 'Aspect-Based Sentiment Analysis (ABSA) on Glassdoor Reviews',
        subtitle: 'Stanford | CS224U: Natural Language Understanding',
        img: '/stanford.webp',
        urls: {
          paper: '/cs224u_sentiment.pdf',
          github: 'https://github.com/achang97/cs224u-glassdoor-sentiment',
        },
      },
      {
        title: 'Using CNNs to Identify Events in Basketball Videos',
        subtitle: 'Stanford | CS231N: Computer Vision',
        img: '/stanford.webp',
        urls: {
          paper: '/cs231n_basketball.pdf',
          github:
            'https://github.com/akshayramaswamy/CV-Basketball-Commentator',
        },
      },
    ],
  },
];

const LINK_CONFIG = {
  paper: { label: 'Paper', Icon: IconPdf },
  github: { label: 'GitHub', Icon: IconBrandGithub },
  landing: { label: 'Landing Page', Icon: IconWebhook },
  productHunt: { label: 'Product Hunt', Icon: IconBrandProducthunt },
};

export const CodingProjects = () => {
  return (
    <Stack gap="lg">
      {SECTIONS.map((section) => (
        <Stack>
          <Title order={2}>{section.title}</Title>
          <Grid gutter="xl">
            {section.items.map((item) => (
              <Grid.Col span={{ sm: 12, md: 4 }}>
                <ImageCard
                  img={item.img}
                  imgSize={100}
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
        </Stack>
      ))}
    </Stack>
  );
};
