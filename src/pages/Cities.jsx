import { useEffect, useState } from "react";
import CityList from "../components/CityList";

// power shell npm start

function Cities() {
    const API_URL = "http://riotkr.mockable.io/weather-crawlers/cities";
    const [cityState, setCityState] = useState([]);

    useEffect(() => {
        console.log("cities component mounted!");

        getCities();
    }, []); //once 빈 배열

    async function getCities() {
        const cities = await fetch(API_URL).then((res) => res.json());
        console.log(cities);

        setCityState(cities);
    }

    return (
        <div>
            <h1>Cities</h1>
            <p>{API_URL}</p>
            <CityList cities={cityState}/>
        </div>
    );
}

export default Cities;