import { Burger, Header as MantineHeader, MediaQuery, Text } from '@mantine/core';
import { ColorSchemeToggle } from './ColorSchemeToggle/ColorSchemeToggle';
import { Image } from '@mantine/core';

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
        <Image width={80} src="images/ppabat.PNG" />
        <Image width={70} src="images/maahad.PNG" />
        {/* <Text size="lg" weight="bold">
          LOGOSEKOLAH.
        </Text> */}

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
