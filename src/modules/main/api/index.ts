import { API } from '@/api';

export const getAllStacks = async () => {
  return await API.getData('stacks');
};
export const createStack = async <T>(data: T) => {
  return await API.createData('stacks', data);
};
export const deleteStack = async (id: number | string) => {
  return await API.deleteDataById('stacks', 'id', id);
};
