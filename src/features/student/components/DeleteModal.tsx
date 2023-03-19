import { Modal, Button, Group, Text } from '@mantine/core';

type DeleteModalProps = {
  close: () => void;
  opened: boolean;
  onDelete: () => void;
};

function DeleteModal(props: DeleteModalProps) {
  return (
    <>
      <Modal opened={props.opened} onClose={props.close} size="auto" title="Modal size auto">
        <Text>Apakah anda yakin?</Text>

        <Group mt="xl">
          <Button onClick={props.close}>Cancel</Button>
          <Button variant="outline" color="red" onClick={props.onDelete}>
            Hapus
          </Button>
        </Group>
      </Modal>
    </>
  );
}

export default DeleteModal;
