import { TableRow, TableHead, Paper, TableContainer, TableCell, TableBody, Table } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { StacksType } from '@/modules/main/types/StacksType.ts';
import dayjs from 'dayjs';

type PropsType = {
  rows: StacksType[];
  deleteItem: (id: any) => void;
};
export const TableMain = ({ rows, deleteItem }: PropsType) => {
  const navigate = useNavigate();
  const clickRowHandler = (row: any) => () => {
    navigate(`/main/${row.id}`);
  };

  const deleteRowHandler = (e: any, id: any) => {
    e.stopPropagation();
    deleteItem(id);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }}>
        <TableHead>
          <TableRow>
            <TableCell>Стенд</TableCell>
            <TableCell align="left">Создано</TableCell>
            <TableCell align="left">Описание</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 }, cursor: 'pointer' }} hover={true} onClick={clickRowHandler(row)}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.created && dayjs(row.created).format('DD.MM.YYYY HH:mm')}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              <TableCell align="left">
                <span className={'delete-btn'} onClick={(e) => deleteRowHandler(e, row.id)}>
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
