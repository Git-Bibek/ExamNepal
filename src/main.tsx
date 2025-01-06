import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import RouterConfig from "./config/router.config.tsx";
import "react-toastify/dist/ReactToastify.css";
import 'aos/dist/aos.css';
import {AOSProvider} from "./context/AosContext.tsx";

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <AOSProvider>
            <RouterConfig/>
        </AOSProvider>
    </StrictMode>,
)
