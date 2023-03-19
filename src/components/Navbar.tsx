import { Navbar as MantineNavbar, Text } from '@mantine/core';
import { Home, Mail, Settings, Users } from 'react-feather';
import User from './User';

function NavLink(props: { name: string; icon: JSX.Element; link: string }) {
  return (
    <a href={props.link} style={{ all: 'unset' }}>
      <div style={{ display: 'flex', flexDirection: 'row', marginBottom: 20 }}>
        {props.icon}
        <Text style={{ marginLeft: 10 }}>{props.name}</Text>
      </div>
    </a>
  );
}

type NavbarProps = {
  opened: boolean;
};

export default function Navbar(props: NavbarProps) {
  return (
    <MantineNavbar
      hidden={!props.opened}
      width={{ sm: 250, lg: 300 }}
      hiddenBreakpoint="sm"
      p="md"
      height="100vh"
      style={{ paddingTop: -70 }}
    >
      <MantineNavbar.Section grow>
        <NavLink name="Otthon" icon={<Home />} link="/" />
        <NavLink name="Felhasználók" icon={<Users />} link="/users" />
        <NavLink name="Üzenetek" icon={<Mail />} link="/messages" />
        <NavLink name="Beállítások" icon={<Settings />} link="/settings" />

        <a href="/settings" style={{ all: 'unset', width: '100%' }}>
          <div style={{ position: 'absolute', bottom: 0 }}>
            <User />
          </div>
        </a>
      </MantineNavbar.Section>
    </MantineNavbar>
  );
}
