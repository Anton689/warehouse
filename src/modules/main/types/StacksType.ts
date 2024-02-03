import { ItemType } from '@/modules/item/types/ItemType.ts';

export type StacksType = {
  id: number;
  name: string;
  description: string;
  updated: string;
  updatedBy: string;
  items: ItemType[];
  created: string;
};
