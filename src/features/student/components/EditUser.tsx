import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import validator from 'validator';

export type Profile = {
  name: string;
  email: string;
  address: string;
  workplace: string;
  phone: string;
};

type EditProfileFormProps = {
  data?: Profile;
  submitForm: (data: Profile, values: Profile) => void;
};

export default function EditProfileForm(props: EditProfileFormProps) {
  const form = useForm({
    initialValues: props.data,

    validate: {
      name: (name: string) => (name.length > 0 ? null : 'Name wajib diisi'),
      email: (email: string) => (validator.isEmail(email) ? null : 'Email wajib diisi'),
      address: (address: string) => (address.length > 0 ? null : 'Address wajib diisi'),
      workplace: (workplace: string) => (workplace.length > 0 ? null : 'Workplace wajib diisi'),
      phone: (phone: string) => (validator.isMobilePhone(phone) ? null : 'Phone wajib diisi'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => props.submitForm(props.data as Profile, values))}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />

      <TextInput label="E-mail" placeholder="E-mail" {...form.getInputProps('email')} />

      <TextInput label="Address" placeholder="Address" {...form.getInputProps('address')} />

      <TextInput label="Workplace" placeholder="Workplace" {...form.getInputProps('workplace')} />

      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps('phone')} />

      <Button mt={20} type="submit">
        Submit
      </Button>
    </form>
  );
}
