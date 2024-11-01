import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import FluentUIWrapper from './FluentUIWrapper.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FluentUIWrapper />
  </StrictMode>,
)
