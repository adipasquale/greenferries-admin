import React, { useState, useEffect } from 'react'
import { Select, Box } from '@chakra-ui/core'
import { getDistance } from 'geolib'

const flags = {
  FR: '🇫🇷',
  GB: '🇬🇧',
  IT: '🇮🇹'
}

const AirportSelect = ({ airports, country, placeholder, airport, setAirport }) => {
  const [value, setValue] = useState(airport && airport.code)
  useEffect(() => { if (airport) setValue(airport.code) }, [airport])
  const countryAirports = airports.filter(a => a.country === country)
  if (!countryAirports) return null
  return (
    <Select
      placeholder={placeholder}
      value={value || ''}
      onChange={event => setAirport(airports.find(a => a.code === event.currentTarget.value))}
    >
      {countryAirports.map(airport =>
        <option value={airport.code} key={airport.code}>
          {flags[airport.country]} {airport.name}
        </option>
      )}
    </Select>
  )
}

const FlightDistanceCalculator = ({ airports, setDistanceKm, route }) => {
  const [departure, setDeparture] = useState(null)
  const [arrival, setArrival] = useState(null)
  const distanceKm = departure && arrival && getDistance(departure, arrival) / 1000
  useEffect(() => {
    if (!route || !airports) return
    setDeparture(airports.find(a => a.code === route.cityA.targetAirportCode))
    setArrival(airports.find(a => a.code === route.cityB.targetAirportCode))
  }, [airports, route])
  useEffect(() => setDistanceKm(distanceKm), [distanceKm, setDistanceKm])
  return (
    <div>
      <div>
        <AirportSelect
          airports={airports}
          placeholder='from'
          airport={departure}
          setAirport={setDeparture}
          country={route.cityA.country}
        />
      </div>
      <Box textAlign='center'>
        <span role='img' aria-label='between'>↕️</span>
      </Box>
      <div>
        <AirportSelect
          airports={airports}
          placeholder='to'
          airport={arrival}
          setAirport={setArrival}
          country={route.cityB.country}
        />
      </div>
    </div>
  )
}

export default FlightDistanceCalculator
