import "./index.scss"

import App from "./components/App"

import { StrictMode } from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"

const enableStrictMode = true
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	enableStrictMode ? <StrictMode children={<App />} /> : <App />
)

reportWebVitals()
