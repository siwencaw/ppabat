import { useState } from 'react';
import { Group, TextInput, Button, Loader } from '@mantine/core';
import { Search, X } from 'react-feather';

type SearchFormProps = {
  onSubmit: (s: string) => void;
  onCancel: () => void;
  loading: boolean;
};

export default function SearchForm(props: SearchFormProps) {
  const [search, setSearch] = useState('');

  const submitForm = () => {
    props.onSubmit(search);
  };

  const cancelSearch = () => {
    setSearch('');
    props.onCancel();
  };

  return (
    <Group mb={20}>
      <TextInput
        placeholder="Név, e-mail cím, lakhely stb."
        style={{ minWidth: 280, width: '20%' }}
        rightSection={props.loading && <Loader size="xs" />}
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <Button leftIcon={<Search />} onClick={submitForm}>
        Keresés
      </Button>
      <Button onClick={cancelSearch} color="gray">
        <X />
      </Button>
    </Group>
  );
}
