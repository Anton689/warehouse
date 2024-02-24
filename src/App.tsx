// import { useState } from 'react';
import { Box, Container } from '@mui/material';

import { Header } from '@/components/Header.tsx';
import { Route, Routes } from 'react-router-dom';
import { MainPage } from '@/modules/main/MainPage.tsx';
import { ItemPage } from '@/modules/item/ItemPage.tsx';

const boxShadowSettings = '12px 0 8px -4px rgba(0, 0, 0, 0.4), -12px 0 8px -4px rgba(0, 0, 0, 0.4)';
const App = () => {
  return (
    <>
      <Container maxWidth="md" disableGutters={true}>
        <Box sx={{ bgcolor: '#f4f4f4', height: '100vh', boxShadow: boxShadowSettings }}>
          <Header />
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/main/:itemId" element={<ItemPage />} />
            <Route path="*" element={<div>NOT FOUND</div>} />
          </Routes>
        </Box>
      </Container>
    </>
  );
};

export default App;
