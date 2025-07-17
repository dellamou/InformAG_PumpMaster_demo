import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';
import L from 'leaflet';
import { PumpCoordinates } from '../types/pump.ts';

// Fix for default markers in react-leaflet
let DefaultIcon = L.divIcon({
  html: `<div style="background-color: #3388ff; width: 20px; height: 20px; border-radius: 50%; border: 2px solid white; box-shadow: 0 1px 3px rgba(0,0,0,0.4);"></div>`,
  iconSize: [20, 20],
  className: 'custom-div-icon'
});

L.Marker.prototype.options.icon = DefaultIcon;

type Props = {
  coordinates: PumpCoordinates;
};

const PumpLocationMap = ({ coordinates }: Props) => {
  console.log('PumpLocationMap coordinates:', coordinates);
  
  useEffect(() => {
    // Ensure Leaflet is properly initialized
    console.log('Leaflet version:', L.version);
  }, []);
  
  const isValid =
    typeof coordinates.lat === 'number' &&
    typeof coordinates.lng === 'number' &&
    !isNaN(coordinates.lat) &&
    !isNaN(coordinates.lng);

  console.log('Coordinates valid:', isValid);

  if (!isValid) {
    return <p style={{ color: 'red' }}>Invalid coordinates</p>;
  }

  return (
    <div style={{ width: '100%', border: '1px solid #ccc', borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ height: '60vh', width: '100%', backgroundColor: '#f0f0f0' }}>
        <MapContainer
          center={[coordinates.lat, coordinates.lng]}
          zoom={13}
          style={{ height: '100%', width: '100%' }}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={[coordinates.lat, coordinates.lng]}>
            <Popup>
              <div>
                <strong>Pump Location</strong><br />
                Latitude: {coordinates.lat}<br />
                Longitude: {coordinates.lng}
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default PumpLocationMap;
