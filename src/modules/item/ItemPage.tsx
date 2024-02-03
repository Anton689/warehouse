import { Box, Button, Dialog, Stack } from '@mui/material';
import { TableItem } from '@/modules/item/components/TableItem.tsx';
import { useEffect, useState } from 'react';
import { ItemType } from '@/modules/item/types/ItemType.ts';
import { useNavigate, useParams } from 'react-router-dom';
import { ItemInfo } from '@/modules/item/components/ItemInfo.tsx';
import { CreateItem } from '@/modules/item/components/CreateItem.tsx';
import { createItem, deleteItem, getAllItems, updateItem } from '@/modules/item/api';

export const ItemPage = () => {
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState<ItemType[]>([]);
  const [isShowModal, setIsShowModal] = useState<boolean>(false);
  const [isCreateModal, setIsCreateModal] = useState<boolean>(false);
  const [currentRow, setCurrentRow] = useState<ItemType | null>(null);

  const { itemId } = useParams();

  useEffect(() => {
    (async () => {
      const items = await getAllItems(itemId);
      setItemsList(items ?? []);
    })();
  }, [itemId]);
  const backToMainPage = () => {
    navigate('/main');
  };
  const handleCreateItem = async (data: {
    name: string;
    description: string;
    section: string;
    pcs: string;
    status: string;
    created: string;
    updatedBy: string;
  }) => {
    const { name, description, section, pcs, status, created, updatedBy } = data;
    await createItem({ name, description, section, pcs, status, created, updatedBy, stack_id: itemId });
    setIsCreateModal(false);
    setItemsList((await getAllItems(itemId)) ?? []);
  };
  const handleUpdateItem = async (data: { name: string; description: string; section: string; pcs: string; status: string; updatedBy: string }) => {
    await updateItem(data, currentRow?.item_id);
    setIsShowModal(false);
    setItemsList((await getAllItems(itemId)) ?? []);
  };
  const handleDeleteItem = async (id: string | number) => {
    await deleteItem(id);
    setItemsList((await getAllItems(itemId)) ?? []);
  };
  const showModal = (row: ItemType) => {
    setIsShowModal(true);
    setCurrentRow(row);
  };
  const showCreatedModal = () => setIsCreateModal(true);
  const closeModal = () => setIsShowModal(false);
  const closeCreateModal = () => setIsCreateModal(false);

  return (
    <>
      <Box sx={{ marginTop: '50px', marginLeft: '15px' }}>
        <Stack spacing={2} direction="row">
          <Button sx={{ fontWeight: 'regular' }} variant="contained" onClick={showCreatedModal}>
            Добавить
          </Button>
          <Button sx={{ fontWeight: 'regular' }} variant="outlined" onClick={backToMainPage}>
            Назад
          </Button>
        </Stack>
      </Box>
      <Box sx={{ width: '100%', marginTop: '20px' }}>
        <TableItem rows={itemsList} getRowData={showModal} deleteItem={handleDeleteItem} />
      </Box>
      <Dialog onClose={closeModal} open={isShowModal}>
        <Box>
          <ItemInfo item={currentRow} cancel={closeModal} onUpdate={handleUpdateItem} />
        </Box>
      </Dialog>
      <Dialog onClose={closeCreateModal} open={isCreateModal}>
        <CreateItem cancel={closeCreateModal} onCreate={handleCreateItem} />
      </Dialog>
    </>
  );
};
