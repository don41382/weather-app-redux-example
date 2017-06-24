import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart'
import GoogleMap from '../components/google_maps'

class WeatherList extends Component {

  renderWeather(cityData) {
    const name = cityData.city.name
    const temps = cityData.list.map(w => w.main.temp)
    const humidities = cityData.list.map(w => w.main.humidity)
    const pressures = cityData.list.map(w => w.main.pressure)
    const { lon, lat } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lon={lon} lat={lat} /></td>
        <td>
          <Chart data={temps} color='blue'/>
        </td>
        <td>
          <Chart data={pressures} color='black'/>
        </td>
        <td>
          <Chart data={humidities} color='green'/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPA)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapDispatchToProps({weather}) {
  return {weather}
}

export default connect(mapDispatchToProps)(WeatherList)
