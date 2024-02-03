import { API } from '@/api';
import { ItemType } from '@/modules/item/types/ItemType.ts';

type idType = string | number | undefined;

export const getAllItems = async (itemId: idType) => {
  const items = await API.getData('items');
  return items?.filter((item: ItemType) => item.stack_id === Number(itemId));
};
export const createItem = async <T>(data: T) => {
  return await API.createData('items', data);
};
export const deleteItem = async (id: number | string) => {
  return await API.deleteDataById('items', 'item_id', id);
};

export const updateItem = async <T>(data: T, id: idType) => {
  return await API.updateData('items', { payload: data, column: 'item_id', value: id });
};
