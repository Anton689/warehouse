import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const rootElement = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <BrowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BrowserRouter>,
);
