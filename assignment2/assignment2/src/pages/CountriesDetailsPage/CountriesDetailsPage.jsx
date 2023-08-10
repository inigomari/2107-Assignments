// Local Imports
import "./CountryDetailsPage.css";
// 3rd Party Imports
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const CountryDetailsPage = () => {

	const { name } = useParams();
	const [countryData, setCountryData] = useState({});
	const [loading, setLoading] = useState(true);

	const navigate = useNavigate();

	useEffect(() => {
		getCountriesByName();
	}, [name]);

	const getCountriesByName = async () => {
		try {
			const response = await fetch(
				`https://restcountries.com/v3.1/name/${name}`
			);
			const data = await response.json();
			setCountryData(data[0]);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	const handleGoBack = () => {
		navigate("/");
	};

	return loading ? (
		<>
			<p>Loading..........</p>
		</>
	) : (
		<>
			<div className="back" onClick={handleGoBack}>
				Go back
			</div>

			<div className="con">
				<div>
					<div className="countryImg">
						<img height={200} src={countryData.flags.png} alt="" />
					</div>
					<div className="countryName">
						<p>{countryData.name.common}</p>
					</div>
					<div className="countryCcontent">
						<p>Location is - {countryData.subregion}</p>
						<p>Map Location is - <a href={countryData.maps.googleMaps}>{countryData.maps.googleMaps}</a></p>
						<p>Population is - {countryData.population} people</p>
					</div>
				</div>

			</div>
		</>
	);
};

export default CountryDetailsPage;