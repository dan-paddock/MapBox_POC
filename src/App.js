import logo from './logo.svg';
import './App.css';
import Mapbox from './components/map';

function App() {
  return (
    <div className='App'>
      {/* <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header> */}
      <Mapbox />
    </div>
  );
}

export default App;

// import React, { useRef, useEffect, useState, useCallback } from 'react';
// import mapboxgl from '!mapbox-gl'; // eslint-disable-line import/no-webpack-loader-syntax
// import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css'
// import MapGL from 'react-map-gl'
// import Geocoder from 'react-map-gl-geocoder'

// mapboxgl.accessToken = 'pk.eyJ1IjoicXVpY2tiYXNlb3BzIiwiYSI6ImNqNnpvYXgxYzAycXkzM3FqOXFvaHNhODUifQ.toRzbOElEVm9th2Ei7if7Q';
// const MAPBOX_TOKEN = 'pk.eyJ1IjoicXVpY2tiYXNlb3BzIiwiYSI6ImNqNnpvYXgxYzAycXkzM3FqOXFvaHNhODUifQ.toRzbOElEVm9th2Ei7if7Q';
 
// export default function App() {

//     useEffect(() => {
//         if (map.current) return; // Checks if there's an already existing map initialised.
        
//         map.current = new mapboxgl.Map({
//           container: mapContainerRef.current,
//           style: 'mapbox://styles/mapbox/streets-v11',
//           zoom: 9,
//           center: [3.361881, 6.672557],
//         });
        
//         // clean up on unmount
//         return () => map.current.remove();
//       }, [])
//     // const [viewport, setViewport] = useState({
//     //     latitude: 37.7577,
//     //     longitude: -122.4376,
//     //     zoom: 8
//     //   });
//     //   const mapRef = useRef();
//     //   const handleViewportChange = useCallback(
//     //     (newViewport) => setViewport(newViewport),
//     //     []
//     //   );
    
//     //   // if you are happy with Geocoder default settings, you can just use handleViewportChange directly
//     //   const handleGeocoderViewportChange = useCallback(
//     //     (newViewport) => {
//     //       const geocoderDefaultOverrides = { transitionDuration: 1000 };
    
//     //       return handleViewportChange({
//     //         ...newViewport,
//     //         ...geocoderDefaultOverrides
//     //       });
//     //     },
//     //     []
//     //   );
//     // const mapContainer = useRef(null);
//     // const map = useRef(null);
//     // const [lng, setLng] = useState(-70.9);
//     // const [lat, setLat] = useState(42.35);
//     // const [zoom, setZoom] = useState(9);
//    // let mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken });
    
//     useEffect(() => {
//     //     if (map.current) return; // initialize map only once
//     //     map.current = new mapboxgl.Map({
//     //     container: mapContainer.current,
//     //     style: 'mapbox://styles/mapbox/streets-v11',
//     //     center: [lng, lat],
//     //     zoom: zoom
//     //     });
//     //    new mapboxgl.Marker({ 
//     //        //draggable: true
//     // }).setLngLat([-71.0411, 42.3632]).addTo(map.current);
//     });
    
//     useEffect(() => {
//         // if (!map.current) return; // wait for map to initialize
//         //     map.current.on('move', () => {
//         //     setLng(map.current.getCenter().lng.toFixed(4));
//         //     setLat(map.current.getCenter().lat.toFixed(4));
//         //     setZoom(map.current.getZoom().toFixed(2));
//         // });
//     });

// //     const locationToMarker = (address) => {
// //         mapboxgl.geocoding.forwardGeocode({
// //                 query: address,
// //                 autocomplete: false,
// //                 limit: 1
// //                 }).send().then((response) => {
// //                     if (
// //                         !response ||
// //                         !response.body ||
// //                         !response.body.features ||
// //                         !response.body.features.length
// //                     ) {
// //                         console.error('Invalid response:');
// //                         console.error(response);
// //                         return;
// //                     }
// //                     const feature = response.body.features[0];
                
// //                     // const map = new mapboxgl.Map({
// //                     //     container: 'map',
// //                     //     style: 'mapbox://styles/mapbox/streets-v11',
// //                     //     center: feature.center,
// //                     //     zoom: 10
// //                     // });
                
// //                 // Create a marker and add it to the map.
// //                 new mapboxgl.Marker().setLngLat(feature.center).addTo(map.current);
// //                  });
// // }   
    
//     return (
//         <div style={{ height: "100vh" }}>
//         <MapGL
//           ref={mapRef}
//           {...viewport}
//           width="100%"
//           height="100%"
//           onViewportChange={handleViewportChange}
//           mapboxApiAccessToken={MAPBOX_TOKEN}
//         >
//           <Geocoder
//             mapRef={mapRef}
//             onViewportChange={handleGeocoderViewportChange}
//             mapboxApiAccessToken={MAPBOX_TOKEN}
//             position="top-left"
//           />
//         </MapGL>
//       </div>
//         // <div>
//         //     <div className="sidebar">
//         //     Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
//         //     </div>
//         //     <div ref={mapContainer} className="map-container" />
//         //     <button onClick={() => locationToMarker("57 Laurelwood Drive, Colts Neck, NJ 07722 United States")}>Click</button>
//         // </div>
//         );
// }
