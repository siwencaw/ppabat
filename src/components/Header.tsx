import { Burger, Header as MantineHeader, MediaQuery, Text } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';

type HeaderProps = {
  opened: boolean;
  setOpened: (b: boolean) => void;
};

export default function Header(props: HeaderProps) {
  return (
    <MantineHeader height={70} p="md">
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
          <Burger
            opened={props.opened}
            onClick={() => props.setOpened(!props.opened)}
            size="sm"
            mr="xl"
          />
        </MediaQuery>

        <Text size="lg" weight="bold">
          LOGOSEKOLAH.
        </Text>

        <div
          style={{
            display: 'flex',
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          <ColorSchemeToggle />
        </div>
      </div>
    </MantineHeader>
  );
}
