import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import L from 'leaflet';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import leafred from './assets/img/leaf-red.png';
import leafshadow from './assets/img/leaf-shadow.png';
import * as data from './assets/data/dummy-data.json'

var icon = L.icon ({
  iconUrl: leafred,
  shadowUrl: leafshadow,
  iconSize:     [38, 95],
  shadowSize:   [50, 64],
  iconAnchor:   [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor:  [-3, -76]
});

const Mapping = () => {
    const [ activeHotel, setActiveHotel ] = useState(null);
    const positionGreen = [8.484883, 124.654835]

    const mymap = () => {
      // console.log(data.hotel[0].coordinates[0])
        return (
            
            <Map center={positionGreen} zoom="15">
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
           
            {data.hotel.map(h => (
              <Marker 
              key={h.name} 
              position={[h.coordinates[0], h.coordinates[1]]} 
              icon={icon} 
              onClick={() => {
                setActiveHotel(h);
              }}
              />
            ))}

            {activeHotel && (
              <Popup
                position={[
                  activeHotel.coordinates[0],
                  activeHotel.coordinates[1]
                ]}
                onClose={() => {
                  setActiveHotel(null)
                }}
              >
                <div>
                  <h5>{activeHotel.name}</h5>
                  <p>{activeHotel.coordinates[0]}, {activeHotel.coordinates[1]}</p>
                </div>
              </Popup>
            )}
          </Map>
        )
    }

    return (
        <AppContainer title="Mapping">
            <Link to="/" className="btn btn-warning">Back</Link>
            <div className="container">
                <h1>{mymap()}</h1>
            </div>
        </AppContainer>
    );
};

export default Mapping;