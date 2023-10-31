const express = require("express")

const cors = require("cors")

require("dotenv").config()

const PORT = process.env.PORT || 8080

const app = express()

app.use(cors())

const data = require("./data/weather.json")

function findWeather(lat,lon){
  return data.filter((weather) => weather.lat == lat && weather.lon == lon || ?weather.lat == lat && ?weather.lon == lon)
}

app.get("/", (request, response) => {
  response.json("Test statement")
})

app.get("/weather", (request, response) => {
  
  const weather = getWeather(request.query.weather)
  response.json(weather)

  const lat 

  const lon
})

app.listen(PORT, () => console.log(`App is running PORT ${PORT}`))