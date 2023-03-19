import { AppShell } from '@mantine/core';

import React from 'react';
import Header from './Header';
import Navbar from './Navbar';

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const [opened, setOpened] = React.useState(false);

  return (
    <AppShell
      padding="md"
      header={<Header opened={opened} setOpened={setOpened} />}
      navbar={<Navbar opened={opened} />}
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
      {children}
    </AppShell>
  );
};

export default DashboardLayout;
