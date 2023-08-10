import "./CountriesPage.css";
import { useEffect, useState } from "react";
import CountriesTable from "../../components/CountriesTable/CountriesTable";

const CountriesPage = () => {
	const [countryData, setCountryData] = useState([]);

	useEffect(() => {
		getCountries();
	}, []);

	const getCountries = async () => {
		const response = await fetch("https://restcountries.com/v3.1/all?fields=name,flags");
		const data = await response.json();
		setCountryData(data);
	};

	return (
		<>
			<div className="con">
				<h1>These are the countries</h1>

				<div>
					<CountriesTable data={countryData} />
				</div>
			</div>
		</>
	);
};

export default CountriesPage;