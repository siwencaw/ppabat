import { Button, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import validator from 'validator';

export type Profile = {
  name: string;
  nisn: string;
  nik: string;
  gender: string;
  placeOfBirth: string;
  dateOfBirth: string;
  address: string;
  fathersName: string;
  mothersName: string;
  entryYear: string;
  livingXliving: string;
  province: string;
  regency: string;
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
      nisn: (nisn: string) => (nisn.length > 0 ? null : 'nisn wajib diisi'),
      nik: (nik: string) => (nik.length > 0 ? null : 'nik wajib diisi'),
      gender: (gender: string) => (gender.length > 0 ? null : 'gender wajib diisi'),
      placeOfBirth: (placeOfBirth: string) => (placeOfBirth.length > 0 ? null : 'tempat lahir wajib diisi'),
      dateOfBirth: (dateOfBirth: string) => (dateOfBirth.length > 0 ? null : 'tanggal lahir wajib diisi'),
      address: (address: string) => (address.length > 0 ? null : 'alamat wajib diisi'),
      fathersName: (fathersName: string) => (fathersName.length > 0 ? null : 'nama ayah wajib diisi'),
      mothersName: (mothersName: string) => (mothersName.length > 0 ? null : 'nama ibu wajib diisi'),
      entryYear: (entryYear: string) => (entryYear.length > 0 ? null : 'tahun masuk wajib diisi'),
      livingXliving: (livingXliving: string) => (livingXliving.length > 0 ? null : 'mukim/tidak mukim wajib diisi'),
      province: (province: string) => (province.length > 0 ? null : 'provinsi wajib diisi'),
      regency: (regency: string) => (regency.length > 0 ? null : 'kabupaten wajib diisi'),
      // email: (email: string) => (validator.isEmail(nisn) ? null : 'email wajib diisi'),
      // address: (address: string) => (address.length > 0 ? null : 'Address wajib diisi'),
      // workplace: (workplace: string) => (workplace.length > 0 ? null : 'Workplace wajib diisi'),
      // phone: (phone: string) => (validator.isMobilePhone(phone) ? null : 'Phone wajib diisi'),
    },
  });

  return (
    <form onSubmit={form.onSubmit((values) => props.submitForm(props.data as Profile, values))}>
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />

      <TextInput label="NISN" placeholder="NISN" {...form.getInputProps('nisn')} />

      <TextInput label="Address" placeholder="Address" {...form.getInputProps('address')} />

      <TextInput label="Workplace" placeholder="Workplace" {...form.getInputProps('workplace')} />

      <TextInput label="Phone" placeholder="Phone" {...form.getInputProps('phone')} />

      <Button mt={20} type="submit">
        Submit
      </Button>
    </form>
  );
}
