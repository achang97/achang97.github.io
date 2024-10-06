import {
  MantineProvider,
  AppShell,
  Title,
  Image,
  Stack,
  Anchor,
  Burger,
  Group,
  AspectRatio,
} from '@mantine/core';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Navigate,
} from 'react-router-dom';
import { LifeProjects } from './pages/LifeProjects';
import { CodingProjects } from './pages/CodingProjects';
import { ClassicalViolin } from './pages/ClassicalViolin';
import { PageTemplate } from './components/PageTemplate';
import { ScrollToTop } from './components/ScrollToTop'; // Add this import
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import { IconLink } from './components/IconLink';
import { ComponentType } from 'react';

import './App.css';
import '@mantine/core/styles.css';

const NAV_ITEMS: {
  path: string;
  component: ComponentType;
  title: string;
  subtitle?: string | string[];
  description?: string;
}[] = [
  {
    path: '/coding-projects',
    component: CodingProjects,
    title: 'Coding Projects',
    subtitle: [
      "I majored in computer science at Stanford University, concentrating in AI. Nowadays, I'm a fullstack developer and former YC (S20) founder.",
      `Not to be stereotypical, but I'm really excited about LLMs and voice AI in particular! I'm eager to see what the future of personal education will look like, especially for use cases like language learning.`,
    ],
  },
  {
    path: '/life-projects',
    component: LifeProjects,
    title: 'Life Projects',
    subtitle: [
      `I'm a big hobbyist and love the idea of creation. As a former classical violinist, I'm still passionate about music and have a YouTube channel where I make covers with my oboist friend Chetan Rane.`,
      'Less seriously (but equally enthusiastically), I also love to cook and play soccer. Trying to document progress in these areas on various Instagrams, of which I have too many.',
    ],
  },
  {
    path: '/classical-violin',
    component: ClassicalViolin,
    title: 'Classical Violin',
    subtitle: [
      'I started learning the violin when I was 6 years old. Growing up, I enjoyed playing both individually and in larger symphony orchestras. I was the concertmaster of the California Youth Symphony and the Stanford Symphony Orchestra.',
      'Nowadays, I play more for fun but I will always be a classical musician at heart!',
    ],
  },
];

const LINK_ITEMS = [
  {
    label: 'GitHub',
    path: 'https://github.com/achang97',
    icon: IconBrandGithub,
  },
  {
    label: 'LinkedIn',
    path: 'https://www.linkedin.com/in/achang97/',
    icon: IconBrandLinkedin,
  },
];

const App = () => {
  const [isNavbarOpen, { toggle: toggleNavbar }] = useDisclosure(false);

  return (
    <MantineProvider>
      <Router>
        <ScrollToTop /> {/* Add this line */}
        <AppShell
          padding="md"
          header={{ height: { base: 50, sm: 0 } }}
          navbar={{
            width: { base: 300 },
            breakpoint: 'sm',
            collapsed: { mobile: !isNavbarOpen },
          }}
        >
          <AppShell.Header hiddenFrom="sm" bg="gray.2">
            <Stack justify="center" align="center" h="100%">
              <Burger opened={isNavbarOpen} onClick={toggleNavbar} size="sm" />
            </Stack>
          </AppShell.Header>

          <AppShell.Navbar bg="gray.2">
            <Stack align="center" gap="xl" p="xl">
              <Stack gap="md" align="center">
                <AspectRatio ratio={1} w={200}>
                  <Image src="/profile.jpg" alt="Andrew Chang" radius="100%" />
                </AspectRatio>
                <Title order={2}>Andrew Chang</Title>
                <Group>
                  {LINK_ITEMS.map((item) => (
                    <IconLink
                      key={item.path}
                      href={item.path}
                      Icon={item.icon}
                      label={item.label}
                      size={24}
                    />
                  ))}
                </Group>
              </Stack>
              <Stack gap="sm" align="center">
                {NAV_ITEMS.map((item) => (
                  <Anchor
                    key={item.path}
                    component={Link}
                    to={item.path}
                    onClick={toggleNavbar}
                    fw={item.path === location.pathname ? 'bold' : 'normal'}
                  >
                    {item.title}
                  </Anchor>
                ))}
              </Stack>
            </Stack>
          </AppShell.Navbar>

          <AppShell.Main>
            <ScrollToTop />
            <Routes>
              {NAV_ITEMS.map((item) => (
                <Route
                  key={item.path}
                  path={item.path}
                  element={
                    <PageTemplate title={item.title} subtitle={item.subtitle}>
                      <item.component />
                    </PageTemplate>
                  }
                />
              ))}
              <Route
                path="/"
                element={<Navigate to={NAV_ITEMS[0].path} replace />}
              />
            </Routes>
          </AppShell.Main>
        </AppShell>
      </Router>
    </MantineProvider>
  );
};

export default App;
