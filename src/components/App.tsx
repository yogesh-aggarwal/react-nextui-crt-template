import "./App.scss"

import { onMount } from "common-react-toolkit"
import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./Home"

function prepareInitialState() {}

export default function App() {
	onMount(prepareInitialState)

	return (
		<div className="AppComponent">
			<BrowserRouter>
				<Routes>
					<Route path="" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	)
}
