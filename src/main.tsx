import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/global.css'
import App from './app'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
