import { TableMain } from './components/TableMain.tsx';
import { Box, Button, Dialog, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import { StacksType } from '@/modules/main/types/StacksType.ts';
import { CreateItem } from '@/modules/main/components/CreateItem.tsx';
import { createStack, deleteStack, getAllStacks } from '@/modules/main/api';

export const MainPage = () => {
  const [stackList, setStackList] = useState<StacksType[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const stacks = await getAllStacks();
      setStackList(stacks ?? []);
    })();
  }, []);
  const handleCreateStack = async (data: { name: string; description: string }) => {
    await createStack({ name: data.name, description: data.description });
    setIsShowModal(false);
    setStackList((await getAllStacks()) ?? []);
  };
  const handleDeleteStack = async (id: number) => {
    await deleteStack(id);
    setStackList((await getAllStacks()) ?? []);
  };
  const showModal = () => setIsShowModal(true);
  const closeModal = () => setIsShowModal(false);

  return (
    <>
      <Box sx={{ marginTop: '50px', marginLeft: '15px' }}>
        <Stack spacing={2} direction="row">
          <Button sx={{ fontWeight: 'regular' }} variant="contained" onClick={showModal}>
            Добавить
          </Button>
        </Stack>
      </Box>
      <Box sx={{ width: '100%', marginTop: '20px' }}>
        <TableMain rows={stackList} deleteItem={handleDeleteStack} />
      </Box>
      <Dialog onClose={closeModal} open={isShowModal}>
        <CreateItem cancel={closeModal} onCreate={handleCreateStack} />
      </Dialog>
    </>
  );
};
