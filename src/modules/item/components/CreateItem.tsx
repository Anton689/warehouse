import { useState } from 'react';
import { Box, Button, MenuItem, Select, Stack, TextField } from '@mui/material';

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  padding: '20px; 40px',
};

type PropsTypes = {
  cancel: () => void;
  onCreate: (data: any) => void;
};

export const CreateItem = ({ cancel, onCreate }: PropsTypes) => {
  const [name, setName] = useState('');
  const [pcs, setPcs] = useState();
  const [section, setSection] = useState('');
  const [status, setStatus] = useState();
  const [created_at, setCreated] = useState();
  const [description, setDescription] = useState();
  const [updatedBy, setUpdatedBy] = useState('');
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

  const createdHandler = (event: any) => {
    setCreated(event.target.value);
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
      onCreate({ name, description, section, pcs, status, created_at, updatedBy });
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
          required={true}
          value={name}
          placeholder="Название"
          variant="outlined"
          onChange={nameHandler}
        />
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
        <div style={{ marginBottom: '5px' }}>Количество</div>
        <TextField sx={{ width: '100%' }} value={pcs} placeholder="Количество" variant="outlined" onChange={pcsHandler} />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Статус</div>
        <Select sx={{ width: '100%' }} value={status} onChange={statusHandler}>
          <MenuItem value={'На складе'}>На складе</MenuItem>
          <MenuItem value={'На мероприятии'}>На мероприятии</MenuItem>
        </Select>
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Дата внесения</div>
        <TextField sx={{ width: '100%' }} value={created_at} placeholder="Дата внесения" variant="outlined" onChange={createdHandler} />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Имя*</div>
        <TextField
          sx={{ width: '100%' }}
          error={!updatedBy && error}
          required={true}
          value={updatedBy}
          placeholder="Имя"
          variant="outlined"
          onChange={updatedByHandler}
        />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Описание</div>
        <TextField sx={{ width: '100%' }} value={description} placeholder="Описание" variant="outlined" onChange={descriptionHandler} />
      </Box>
      <Stack sx={{ marginTop: '25px' }} spacing={2} direction="row">
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
