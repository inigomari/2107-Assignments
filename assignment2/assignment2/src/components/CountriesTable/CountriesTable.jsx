/* eslint-disable react/prop-types */

// Local Imports
import "./CountriesTable.css";
// 3rd Party Imports
import { Link } from "react-router-dom";

const CountriesTable = ({ data }) => {
    return (
        <div className="mainCon">
            <>
                <div className="countriesCon">
                    {
                        data.map((country) => {
                            return (
                                <>
                                    <div className="countriesCard">
                                        <img height={160} src={country.flags.png} alt="" />
                                        <div className="countriesRow">
                                            <div className="countriesName">
                                                <p>{country.name.common}</p>
                                            </div>

                                            <div className="countriesLearnMore">
                                                <Link to={`/name/${country.name.common}`} style={{ textDecoration: "none" }}>
                                                    <p>Learn More</p>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            );
                        })
                    }
                </div>
            </>
        </div>

    );
};

export default CountriesTable;