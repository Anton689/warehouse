import { useState } from 'react';
import { Box, Button, Stack, TextField } from '@mui/material';

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
  const [description, setDescription] = useState();
  const [error, setError] = useState(false);

  const validation = (value: any) => {
    return value.trim() !== '';
  };

  const nameHandler = (event: any) => {
    setName(event.target.value);
  };
  const descriptionHandler = (event: any) => {
    setDescription(event.target.value);
  };
  const clickHandle = () => {
    setError(false);
    if (validation(name)) {
      onCreate({ name, description });
    } else {
      setError(true);
    }
  };

  return (
    <Box sx={containerStyle}>
      <Box>
        <div style={{ marginBottom: '5px' }}>Название*</div>
        <TextField required sx={{ width: '100%' }} error={!name && error} value={name} placeholder="Название" variant="outlined" onChange={nameHandler} />
      </Box>
      <Box sx={{ marginTop: '25px' }}>
        <div style={{ marginBottom: '5px' }}>Описание</div>
        <TextField sx={{ width: '100%' }} value={description} placeholder="Описание" variant="outlined" onChange={descriptionHandler} />
      </Box>
      <Stack spacing={2} direction="row" sx={{ marginTop: '25px' }}>
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
