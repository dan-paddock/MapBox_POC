import React, { useEffect, useRef, useCallback, useState } from 'react';
import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from '@mapbox/mapbox-sdk/services/geocoding';
import { v4 as uuidv4 } from 'uuid';

import './map.css';

const GenerateMap = () => {
  const map = useRef(null);
  const [updatedAddress, setUpdatedAddress] = useState('');
  const [addressHistory, setAddressHistory] = useState([]);
  const mapContainerRef = useRef(null);

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      zoom: 9,
      center: [-72, 42],
    });
  }, []);

  mapboxgl.accessToken = process.env.MAP_TOKEN;

  const fetchData = useCallback((address) => {
    const geocodingClient = mbxGeocoding({
      accessToken: mapboxgl.accessToken,
    });

    return geocodingClient
      .forwardGeocode({
        query: address,
        limit: 2,
      })
      .send()
      .then((response) => {
        const match = response.body;
        const coordinates = match.features[0].geometry.coordinates;
        const placeName = match.features[0].place_name;
        const center = match.features[0].center;

        return {
          type: 'Feature',
          center: center,
          geometry: {
            type: 'Point',
            coordinates: coordinates,
          },
          properties: {
            description: placeName,
          },
        };
      });
  }, []);

  const addMarker = (event) => {
    event.preventDefault();
    if (!map.current) return; 
    const results = fetchData(updatedAddress);

    results.then((marker) => {
        var el = document.createElement('div');
        el.className = 'circle';

        setAddressHistory([...addressHistory, <li key={uuidv4()}>{updatedAddress + ': ' + `[${marker.geometry.coordinates}]`}</li>])
        console.log(addressHistory)
        setUpdatedAddress('');

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .setPopup(
            new mapboxgl.Popup({ offset: 25 })
              .setHTML('<p>' + marker.properties.description + '</p>')
          )
          .addTo(map.current);
  
        map.current.on('load', async () => {
          map.current.flyTo({
            center: marker.center,
          });
        });
      });
  }

  return (
    <div>
      <div ref={mapContainerRef} className='map-container' />
      <div>        
          <input type="text" value={updatedAddress} onChange={(event) => setUpdatedAddress(event.target.value)} />
          <button className="submitButton" onClick={addMarker} value="Submit">Submit</button>
          <ul>
            {addressHistory}
          </ul>
      </div>
    </div>
  );
};

export default GenerateMap;