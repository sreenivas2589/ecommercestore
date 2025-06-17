import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Appstore from "./redux/cartstore.jsx"
import { Provider } from "react-redux"

createRoot(document.getElementById('root')).render(
    <Provider store={Appstore}>
        <StrictMode>
            <App />
        </StrictMode>
    </Provider>

)
