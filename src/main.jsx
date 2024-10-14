import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import appStore from './app/store.js'
import { Provider } from 'react-redux'
import store2 from './app/store2.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <Provider store={store2} >
    <App />
  </Provider>
  </StrictMode>,
)
