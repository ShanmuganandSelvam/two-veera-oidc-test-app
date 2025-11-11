import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { CloudFrontThemeProvider } from './hooks/use-cloudfront-theme'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CloudFrontThemeProvider defaultTheme="bayer">
      <App />
    </CloudFrontThemeProvider>
  </StrictMode>,
)
