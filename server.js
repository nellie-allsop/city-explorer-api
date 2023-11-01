const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const PORT = process.env.PORT || 8080;
app.use(cors());
const data = require("./data/weather.json");

app.get("/", (request, response) => response.json("Test statement"));

app.get("/weather", (request, response) => {
	const lat = request.query.lat;
	const lon = request.query.lon;
	const searchQuery = request.query.searchQuery;

	const foundCity = data.find((city) => {
		return (
			city.city_name === searchQuery // && city.lat === lat && city.lon === lon
		);
	});

	const wrangledData = foundCity.data.map((day) => {
		return {
			description: day.weather.description,
			date: day.datetime,
		};
	});

	response.json(wrangledData);
});

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`));
