import { useState } from 'react';
import { Box, Button, MenuItem, Select, Stack, TextField } from '@mui/material';
import { ItemType } from '@/modules/item/types/ItemType.ts';
import dayjs from 'dayjs';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px; 40px',
};

type PropsTypes = {
  item: ItemType | null;
  cancel: () => void;
  onUpdate: (data: any) => void;
};
export const ItemInfo = ({ item, cancel, onUpdate }: PropsTypes) => {
  const [name, setName] = useState(item?.name);
  const [pcs, setPcs] = useState(item?.pcs);
  const [section, setSection] = useState(item?.section);
  const [status, setStatus] = useState(item?.status);
  const [updatedBy, setUpdatedBy] = useState(item?.updatedBy);
  const [description, setDescription] = useState(item?.description);
  const [error, setError] = useState(false);

  const validation = (value: any) => {
    return value.trim() !== '';
  };
  const nameHandler = (event: any) => {
    setName(event.target.value);
  };
  const pcsHandler = (event: any) => {
    setPcs(event.target.value);
  };
  const sectionHandler = (event: any) => {
    setSection(event.target.value);
  };
  const statusHandler = (event: any) => {
    setStatus(event.target.value);
  };
  const updatedByHandler = (event: any) => {
    setUpdatedBy(event.target.value);
  };
  const descriptionHandler = (event: any) => {
    setDescription(event.target.value);
  };
  const clickHandle = () => {
    setError(false);
    if (validation(name) && validation(section) && validation(updatedBy)) {
      onUpdate({ name, pcs, section, status, updatedBy, description });
    } else {
      setError(true);
    }
  };

  return (
    <Box sx={containerStyle}>
      <Box>
        <div style={{ marginBottom: '5px' }}>Название*</div>
        <TextField
          sx={{ width: '100%' }}
          error={!name && error}
          value={name}
          required={true}
          placeholder="Название"
          variant="outlined"
          onChange={nameHandler}
        />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Количество</div>
        <TextField sx={{ width: '100%' }} value={pcs} placeholder="Количество" variant="outlined" onChange={pcsHandler} />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Секция*</div>
        <TextField
          sx={{ width: '100%' }}
          error={!section && error}
          required={true}
          value={section}
          placeholder="Секция"
          variant="outlined"
          onChange={sectionHandler}
        />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Статус</div>
        <Select sx={{ width: '100%' }} value={status} onChange={statusHandler}>
          <MenuItem value={'На складе'}>На складе</MenuItem>
          <MenuItem value={'На мероприятии'}>На мероприятии</MenuItem>
        </Select>
      </Box>

      <Box sx={{ marginTop: '25px' }}>
        Дата изменений
        <div style={{ marginBottom: '5px' }}>{dayjs(item?.updated).format('DD.MM.YYYY HH:mm')}</div>
      </Box>

      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Кто изменил*</div>
        <TextField
          sx={{ width: '100%' }}
          error={!updatedBy && error}
          required={true}
          value={updatedBy}
          placeholder="Кто изменил"
          variant="outlined"
          onChange={updatedByHandler}
        />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Описание</div>
        <TextField sx={{ width: '100%' }} value={description} placeholder="Описание" variant="outlined" onChange={descriptionHandler} />
      </Box>

      <Box sx={{ marginTop: '25px' }}>фото</Box>
      <Stack spacing={2} direction="row">
        <Button sx={{ fontWeight: 'regular' }} variant="outlined" onClick={cancel}>
          Отменить
        </Button>
        <Button sx={{ fontWeight: 'regular' }} variant="contained" onClick={clickHandle}>
          Сохранить
        </Button>
      </Stack>
    </Box>
  );
};
