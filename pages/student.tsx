import Head from 'next/head';
import { useState, useEffect } from 'react';
import { Table, ScrollArea, Menu, Divider, Drawer, Text, Button, useMantineTheme } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { notifications } from '@mantine/notifications';

import { Edit2, Send, Save, Trash2, MoreHorizontal } from 'react-feather';

import Search from '@/features/student/components/Search';
import EditUserForm, { Profile } from '@/features/student/components/EditUser';
import DeleteModal from '@/features/student/components/DeleteModal';
import DashboardLayout from '@/components/DashboardLayout';
import { TableActionMenu } from '@/features/student/components/TableActionMenu';
import { Years } from '@/components/Years';
import {
  IconLogout,
  IconHeart,
  IconStar,
  IconMessage,
  IconSettings,
  IconPlayerPause,
  IconTrash,
  IconSwitchHorizontal,
  IconChevronRight,
  IconDots,
  IconPencil,
  IconSend,
  IconDeviceFloppy,
} from '@tabler/icons-react';
import { Select } from '@mantine/core';

// import SendMessageForm from '@/features/student/components/SendMessage';

const MOCKUP_USERS = [
  {
    name: 'Abdullah Faros',
    nisn: '0222001',
    nik: '1372012003100001',
    gender: 'Laki-laki',
    placeOfBirth: 'Solok',
    dateOfBirth: '23 Maret 2010',
    address: 'Kampai Tabu Karambia Lubuk Sikarah',
    fathersName: 'Aldu Razab',
    mothersName: 'Yusmalinda',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Solok',
  },
  {
    name: 'Ahmad Arya Hanafi',
    nisn: '0222002',
    nik: '1306081703100001',
    gender: 'Laki-Laki',
    placeOfBirth: 'Bukittinggi',
    dateOfBirth: '17 Maret 2010',
    address: 'Batu Taba Koto Tinggi Kec. Baso',
    fathersName: 'Deddi',
    mothersName: 'Hartini',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Agam',
  },
  {
    name: 'Athariq Maulana',
    nisn: '0222003',
    nik: '1304082802100001',
    gender: 'Laki-laki',
    placeOfBirth: 'Tanah Datar',
    dateOfBirth: '26 Februari 2010',
    address: 'Koto Tuo Tanjung Kec. Koto VII',
    fathersName: 'Fauzi Dwi Putra',
    mothersName: 'Helmi Nita',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Sijunjung',
  },
  {
    name: 'Fathir Abiyu Wahyudi',
    nisn: '0222004',
    nik: '1371096209070004',
    gender: 'Laki-laki',
    placeOfBirth: 'Padang',
    dateOfBirth: '10 Juni 2010',
    address: 'Kalumbuk Kec. Kuranji',
    fathersName: 'Riki Wahyudi',
    mothersName: 'Afni Rahmi',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Padang',
  },
  {
    name: 'Habibi Fahrezi',
    nisn: '0222005',
    nik: '1306081212070003',
    gender: 'Laki-laki',
    placeOfBirth: 'Bukittinggi',
    dateOfBirth: '12 Desember 2007',
    address: 'Baringin Tigo Kampuang Kec. Baso',
    fathersName: 'Amri',
    mothersName: 'Asmawati',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Agam',
  },
  {
    name: 'Ihsan Faturrahman',
    nisn: '0222006',
    nik: '1306083004100003',
    gender: 'Laki-laki',
    placeOfBirth: 'Sungai Cubadak',
    dateOfBirth: '30 April 2010',
    address: 'Sungai Cubadak Tabek Panjang Baso',
    fathersName: 'Andi Aurid',
    mothersName: 'Dian Aini Sari',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Agam',
  },
  {
    name: 'Ihsanul Habiby',
    nisn: '0222007',
    nik: '1406010111090002',
    gender: 'Laki-laki',
    placeOfBirth: 'Ujung Batu',
    dateOfBirth: '1 November 2009',
    address: 'Pakan Labuh Aur Birugo Tigo Baleh',
    fathersName: 'Zulkarnain',
    mothersName: 'Rozi Melvia',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Bukittinggi',
  },
  {
    name: 'Izzy Panrita Wahyudi',
    nisn: '0222008',
    nik: '1405061201100001',
    gender: 'Laki-laki',
    placeOfBirth: 'Bukittinggi',
    dateOfBirth: '12 Januari 2010',
    address: 'Sektor Pelalawan Kec. Pelalawan',
    fathersName: 'Ardinal',
    mothersName: 'Liza Susi Yenni',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Riau',
    regency: 'Pelalawan',
  },
  {
    name: 'Jibril Al Hakim',
    nisn: '0222009',
    nik: '',
    gender: '',
    placeOfBirth: '',
    dateOfBirth: '',
    address: '',
    fathersName: '',
    mothersName: '',
    entryYear: '',
    livingXliving: '',
    province: '',
    regency: '',
  },
  {
    name: 'Mauliddin Zul Firman',
    nisn: '0222010',
    nik: '8206092703100001',
    gender: 'Laki-laki',
    placeOfBirth: 'Jayapura',
    dateOfBirth: '27 Maret 2010',
    address: 'Lolasita Kec Maba Utara',
    fathersName: 'Zumrizal',
    mothersName: 'Waljumiati',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Maluku Utara',
    regency: 'Halmahera Timur',
  },
  {
    name: 'Muhammad Shabri KP',
    nisn: '0222011',
    nik: '1372012009100001',
    gender: 'Laki-laki',
    placeOfBirth: 'Jakarta',
    dateOfBirth: '20 September 2010',
    address: 'Simpang Rumbio Kec. Lubuk Sikarah',
    fathersName: 'RM Indro Pramono',
    mothersName: 'Upik Apriyani P',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Solok',
  },
  {
    name: 'Sulthan Aulia A',
    nisn: '0222012',
    nik: '1306022406100001',
    gender: 'Laki-laki',
    placeOfBirth: 'Lubuk Basung',
    dateOfBirth: '24 Juni 2010',
    address: 'Batu Hampar Kampung Tengah Lubuk Basung',
    fathersName: 'Hondrizal',
    mothersName: 'Irma Suryani',
    entryYear: '2002',
    livingXliving: 'Mukim',
    province: 'Sumatera Barat',
    regency: 'Agam',
  },
  // {
  //   name: 'Cecilia Chapman',
  //   nisn: 'Cecilia@doe.com',
  //   address: 'Tamuning PA 10855, Sodales Av. 4264',
  //   workplace: 'Apple',
  //   phone: '(786) 713-8616',
  // },
  // {
  //   name: 'Kyla Olsen',
  //   nisn: 'Kyla@doe.com',
  //   address: 'Chelsea MI 67708, Nunc Road 4',
  //   workplace: 'Microsoft',
  //   phone: '(947) 278-5929',
  // },
  // {
  //   name: 'Nyssa Vazquez',
  //   nisn: 'Nyssa@doe.com',
  //   address: 'Latrobe DE 38100, Viverra. Avenue',
  //   workplace: 'Google',
  //   phone: '(608) 265-2215',
  // },
  // {
  //   name: 'Aaron Hawkins',
  //   nisn: 'Aaron@doe.com',
  //   address: 'Santa Rosa MN 98804, Tortor. Street 42',
  //   workplace: 'Facebook',
  //   phone: '(959) 119-8364',
  // },
];

export default function Users(/*props*/) {
  // const modals = useModals();

  const [users, setUsers] = useState(MOCKUP_USERS); // props.users
  const [tableRows, setTableRows] = useState<Array<any>>([]);
  const [drawerOpened, toggleDrawer] = useState(false);
  const [selectedProfileData, setSelectedProfileData] = useState<Profile>();
  const [searchLoading, setSearchLoading] = useState(false);
  const [openedDeleteModal, disclosureDeleteModal] = useDisclosure(false);
  const theme = useMantineTheme();

  const onSearch = (textSearch: string) => {
    setSearchLoading(true);

    const search = textSearch.toLowerCase().trim();

    if (!search) {
      setUsers(MOCKUP_USERS); // props.users
      setSearchLoading(false);
      return;
    }

    const filteredUsers = users.filter(
      (user) =>
        user.name.toLowerCase().includes(search) ||
        user.nisn.toLowerCase().includes(search) ||
        // user.address.toLowerCase().includes(search) ||
        // user.workplace.toLowerCase().includes(search) ||
        // user.phone.includes(search)
        // user.nik.toLowerCase().includes(search) ||
        // user.gender.toLowerCase().includes(search) ||
        // user.placeOfBirth.toLowerCase().includes(search) ||
        // user.dateOfBirth.toLowerCase().includes(search) ||
        // user.address.toLowerCase().includes(search) ||
        user.fathersName.toLowerCase().includes(search) ||
        // user.mothersName.toLowerCase().includes(search) ||
        // user.entryYear.toLowerCase().includes(search) ||
        user.livingXliving.toLowerCase().includes(search) ||
        // user.province.toLowerCase().includes(search) ||
        user.regency.toLowerCase().includes(search)

    );

    setUsers(filteredUsers);

    setSearchLoading(false);
  };

  const cancelSearch = () => {
    setUsers(MOCKUP_USERS); // props.users
  };

  const onSubmitEditForm = (oldUser: Profile, newUser: Profile) => {
    toggleDrawer(false);

    // edit data in db

    let tmpUsers = users;
    tmpUsers.splice(tmpUsers.indexOf(oldUser), 0, newUser);
    tmpUsers = tmpUsers.filter((u) => u !== oldUser);
    setUsers(tmpUsers);

    notifications.show({
      title: 'Profil szerkesztése',
      message: `${newUser.name} profilját sikeresen szerkesztette`,
      color: 'teal',
    });
  };

  const sendMessage = () => {
    // const modal = modals.openModal({
    //   title: 'Üzenetküldés',
    //   children: <SendMessageForm />,
    //   centered: true,
    // });
  };

  const copyProfile = () => {
    notifications.show({
      title: 'Profil másolása',
      message: 'profilja JSON formátumban sikeresen vágólapra lett helyezve',
      color: 'teal',
    });
  };

  const onDeleteProfile = () => {
    notifications.show({
      title: 'Delete Profil',
      message: 'Profile telah dihapus',
      color: 'red',
    });
  }

  const deleteProfile = () => {
    disclosureDeleteModal.open();
  };

  useEffect(() => {
    setTableRows(
      users.map((user: Profile, index) => (
        <tr key={index}>
          <td>{user.name}</td>
          <td>{user.nisn}</td>
          {/* <td>{user.address}</td>
          <td>{user.workplace}</td>
          <td>{user.phone}</td> */}
          {/* <td>{user.nik}</td>
          <td>{user.gender}</td>
          <td>{user.placeOfBirth}</td>
          <td>{user.dateOfBirth}</td>
          <td>{user.address}</td> */}
          <td>{user.fathersName}</td>
          {/* <td>{user.mothersName}</td>
          <td>{user.entryYear}</td> */}
          <td>{user.livingXliving}</td>
          {/* <td>{user.province}</td> */}
          <td>{user.regency}</td>
          <td>
            <TableActionMenu>
              <Menu.Label>{user.name}</Menu.Label>
              <Menu.Item
                icon={<IconPencil size="0.9rem" stroke={1.5} color={theme.colors.blue[6]} />}
                onClick={() => {
                  setSelectedProfileData(user);
                  toggleDrawer(true);
                }}
              >
                Edit
              </Menu.Item>
              <Menu.Item icon={<IconSend size="0.9rem" stroke={1.5} color={theme.colors.blue[6]} />} onClick={() => sendMessage()}>
                Kirim Pesan
              </Menu.Item>

              <Menu.Item icon={<IconDeviceFloppy size="0.9rem" stroke={1.5} color={theme.colors.blue[6]} />} onClick={() => copyProfile()}>
                Simpan
              </Menu.Item>
              <Menu.Item icon={<IconTrash size="0.9rem" stroke={1.5} color={theme.colors.red[6]} />} onClick={() => deleteProfile()} color="red">
                Hapus
              </Menu.Item>
            </TableActionMenu>
          </td>
        </tr>
      ))
    );
  }, [users]);

  return (
    <DashboardLayout>
      <Head>
        <title>Student | Nextine</title>
        <meta name="description" content="A Nextine oldal felhasználókat kezelő oldala." />
      </Head>

      <Text weight="bold" mb="xs" style={{ fontSize: 32 }}>
        Data Siswa
      </Text>

      <Years />
      <DeleteModal
        opened={openedDeleteModal}
        close={disclosureDeleteModal.close}
        onDelete={onDeleteProfile}
      />

      <Drawer
        opened={drawerOpened}
        onClose={() => toggleDrawer(false)}
        title="Felhasználó módosítása"
        padding="xl"
        size="xl"
      >
        <EditUserForm data={selectedProfileData} submitForm={onSubmitEditForm} />
      </Drawer>

      <Search loading={searchLoading} onSubmit={onSearch} onCancel={cancelSearch} />

      {tableRows.length > 0 ? (
        <ScrollArea>
          <Table striped highlightOnHover>
            <thead>
              <tr>
                <th>Nama</th>
                <th>NISN</th>
                {/* <th>NIK</th>
                <th>Jenis Kelamin</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Alamat</th> */}
                <th>Nama Bapak</th>
                {/* <th>Nama Ibu</th>
                <th>Tahun Masuk</th> */}
                <th>Mukim/Tidak Mukim</th>
                {/* <th>Provinsik</th> */}
                <th>Kabupaten</th>
                {/* <th>Action</th> */}
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </Table>
        </ScrollArea>
      ) : (
        <Text align="center" weight="bold">
          Tidak ada data!
        </Text>
      )}
    </DashboardLayout>
  );
}
