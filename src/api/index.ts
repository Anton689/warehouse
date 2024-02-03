import { supabase } from '@/supabase.ts';

type updateRequestType<T> = {
  payload: T;
  column: string;
  value: number | string | undefined;
};

export const API = {
  getData: async (table: string) => {
    try {
      const { data } = await supabase.from(table).select();
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  createData: async <T>(table: string, payload: T) => {
    try {
      const { data } = await supabase.from(table).insert(payload);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  deleteDataById: async (table: string, columnName: string, id: number | string) => {
    try {
      const { data } = await supabase.from(table).delete().eq(columnName, id);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
  updateData: async <T>(table: string, { payload, column, value }: updateRequestType<T>) => {
    try {
      const { data } = await supabase.from(table).update(payload).eq(column, value);
      return data;
    } catch (e) {
      console.error(e);
    }
  },
};
