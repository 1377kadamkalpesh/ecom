import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ShopeContextProvider from './Context/ShopeContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ShopeContextProvider>
    <App />
    </ShopeContextProvider>
    
  </StrictMode>,
);