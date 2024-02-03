import { TableRow, TableHead, Paper, TableContainer, TableCell, TableBody, Table } from '@mui/material';
import { ItemType } from '@/modules/item/types/ItemType.ts';
import dayjs from 'dayjs';

type PropsType = {
  rows: ItemType[];
  getRowData: (row: ItemType) => void;
  deleteItem: (id: any) => void;
};
export const TableItem = ({ rows, getRowData, deleteItem }: PropsType) => {
  const onRowClick = (row: ItemType) => () => {
    getRowData(row);
  };
  const onClickDelete = (e: any, id: any) => {
    e.stopPropagation();
    deleteItem(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }}>
        <TableHead>
          <TableRow>
            <TableCell>Название</TableCell>
            <TableCell align="left">Секция</TableCell>
            <TableCell align="left">Количество</TableCell>
            <TableCell align="left">Описание</TableCell>
            <TableCell align="left">Статус</TableCell>
            <TableCell align="left">Изменено</TableCell>
            <TableCell align="left">Кем изменено</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.item_id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }} hover={true} onClick={onRowClick(row)}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.section}</TableCell>
              <TableCell align="left">{row.pcs}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              <TableCell align="left">{dayjs(row.updated).format('DD.MM.YYYY HH:mm')}</TableCell>
              <TableCell align="left">{row.updatedBy}</TableCell>
              <TableCell align="left">
                <span className={'delete-btn'} onClick={(e) => onClickDelete(e, row.item_id)}>
                  Удалить
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
