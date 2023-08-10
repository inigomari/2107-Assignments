import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Countries from "./pages/CountriesPage/CountriesPage";
import CountryDetailPage from "./pages/CountriesDetailsPage/CountriesDetailsPage";
import { useRoutes } from "react-router-dom";

function App() {
	let route = useRoutes([
		{
			path: "/",
			element: <Countries />
		},
		{
			path: "/name/:name",
			element: <CountryDetailPage />
		}
	]);

	return route;
}

export default App
