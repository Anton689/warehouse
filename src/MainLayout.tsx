import { DataGrid, GridColDef, ruRU, GridRowParams, GridCallbackDetails, MuiEvent } from '@mui/x-data-grid';
import { stand } from './data.ts';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';

export const MainLayout = () => {
  // const col = columns;

  const onRowClickHandler = (params: GridRowParams, event: MuiEvent, details: GridCallbackDetails) => {
    console.log(params);
    console.log(event);
    console.log(details);
  };
  const columns1: GridColDef[] = [
    { field: 'name', headerName: 'Стенд', width: 130 },
    { field: 'updated', headerName: 'Обновленно', width: 130 },
    { field: 'updatedBy', headerName: 'Обновил', width: 130 },
    { field: 'description', headerName: 'Описание', width: 130 },
  ];
  const rows = stand.map((item) => {
    return {
      id: item.id,
      name: item.name,
      updated: item.updated,
      updatedBy: item.updatedBy,
      description: item.description,
    };
  });

  return (
    <div style={{ minWidth: '650px' }}>
      <TableContainer component={Paper}>
        <DataGrid
          sx={{ width: '100%' }}
          localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
          rows={rows}
          columns={columns1}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          checkboxSelection
          disableRowSelectionOnClick
          onRowClick={onRowClickHandler}
        />
      </TableContainer>
    </div>
  );
};
