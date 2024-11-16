import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import LanguageSelection from './LanguageSelection.tsx';
import Messenger from './react-dev-demo/use-reducer/Messenger.jsx'
import HeadPage from './react-dev-demo/use-context/HeadPage.jsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <LanguageSelection /> */}
    {/* <Messenger /> */}
    <HeadPage />
  </StrictMode>,
)
