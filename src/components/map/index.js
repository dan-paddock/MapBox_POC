import React, { useEffect, useRef, useCallback, useState } from "react";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import mbxGeocoding from "@mapbox/mapbox-sdk/services/geocoding";
import { v4 as uuidv4 } from "uuid";

import "./map.css";

const GenerateMap = () => {
  const map = useRef(null);
  const mapContainerRef = useRef(null);

  mapboxgl.accessToken = process.env.TOKEN;

  useEffect(() => {
    if (map.current) return;

    map.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      zoom: 9,
      center: [-72, 42],
    });
  }, []);

  useEffect(() => {
    renderPopups();
  }, [map]);

  const renderPopups = () => {
    if (!map.current) return;

    var el = document.createElement("div");
    el.className = "circle";

    let popupHTML_Legacy = `<div id="mapInfoWindow_br4sbb4xu_5" class="mapInfoWindow"><div id="recordData"><strong><div class="applyEllipsisMapReports" id="column1">FishRoe-Dollar</div></strong><div class="applyEllipsisMapReports" id="column2">Charles Young</div><div class="applyEllipsisMapReports" id="addressText" title="4801 Outer Loop, Louisville, Kentucky 40219 United States">4801 Outer Loop, Louisville, Kentucky 40219 United States</div></div><br><div id="mapRecord_br4sbb4xu_5" class="mapRecordActions"><a href="br4sbb4xu?a=er&amp;r=h" class="MapEditBtn MapActionBtn"><img src="https://assets-cflare.quickbasecdn.net/res/75b7883-13/css/themes/classic/images/icons/icon_pencil_gray.png" class="MapInlineIcon"><span>Edit</span></a>&nbsp;<a href="br4sbb4xu?a=dr&amp;r=h" class="MapViewBtn MapActionBtn"><img src="https://assets-cflare.quickbasecdn.net/res/75b7883-13/css/themes/classic/images/icons/icon_eye_gray.png" class="MapInlineIcon"><span>View</span></a>&nbsp;<a href="https://maps.google.com/maps?daddr=4801%20Outer%20Loop%2C%20Louisville%2C%20Kentucky%2040219%20United%20States" class="MapDirBtn MapActionBtn" target="_blank"><img src="https://assets-cflare.quickbasecdn.net/res/75b7883-13/css/themes/classic/images/icons/icon_directions_20x20.png" class="MapInlineIcon"><span>Get directions</span></a></div><div id="AddtnlRecsDiv_br4sbb4xu_5" class="mapRecordActions" style="display: none;"><a href="#" class="AddtnlRecs MapActionBtn"><img src="https://assets-cflare.quickbasecdn.net/res/75b7883-13/css/themes/classic/images/icons/Table-Report.png" class="MapInlineIcon"><span id="recSpan"></span></a></div><br id="SingleRecExtraSpace_br4sbb4xu_5"></div></div></div><div class="leaflet-popup-tip-container"><div class="leaflet-popup-tip"></div>`;

    new mapboxgl.Marker(el)
      .setLngLat([-71.095063, 42.35298])
      .setPopup(new mapboxgl.Popup({}).setHTML(popupHTML_Legacy))
      .addTo(map.current);

    map.current.on("load", async () => {
      map.current.flyTo({
        center: [-71.079613, 42.348127],
      });
    });
  };

  return (
    <div>
      <div ref={mapContainerRef} className="map-container" />
    </div>
  );
};

export default GenerateMap;
