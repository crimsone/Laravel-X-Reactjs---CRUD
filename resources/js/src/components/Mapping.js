import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet';



const Mapping = () => {

    // type x = {
    //   long: Number,
    //   lat: Number,
    // }

    const position = [8.439620, 124.613350]
    // x = [{long: 8.439620, lat: 124.613350},]



    const mymap = () => {
        // return "I'm your map!";
        return (
            <Map center={position} zoom={13}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
            <Marker position={position}>
              <Popup>I'm here!</Popup>
            </Marker>
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