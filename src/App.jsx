import { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import iconLocation from "/images/icon-location.svg";

import Header from "./components/Header";

const customIcon = L.icon({
  iconUrl: iconLocation,
  iconSize: [46, 56],
  iconAnchor: [23, 56],
});

const RecenterMap = ({ lat, lng }) => {
  const map = useMap();
  useEffect(() => {
    map.setView([lat, lng]);
  }, [lat, lng, map]);
  return null;
};

const App = () => {
  const [ipData, setIpData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiKey = import.meta.env.VITE_IPIFY_API_KEY;

  const fetchIPData = async (input = "") => {
    setLoading(true);
    setError(null);

    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}`;

    if (input) {
      const isIp =
        /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
          input,
        );

      if (isIp) url += `&ipAddress=${input}`;
      else url += `&domain=${input}`;
    }

    try {
      const res = await fetch(url);
      const data = await res.json();

      if (data.code || !data.location)
        throw new Error("Invalid IP address or domain");

      setIpData({
        ip: data.ip,
        location: `${data.location.city}, ${data.location.region} ${data.location.postalCode}`,
        timezone: `UTC ${data.location.timezone}`,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
      });
    } catch (err) {
      console.error(err);
      setError("Impossible de trouver cette adresse.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIPData();
  }, []);

  return (
    <div className="relative flex h-screen flex-col">
      <Header
        ipData={ipData}
        onSearch={fetchIPData}
        error={error}
        loading={loading}
      />

      {!loading && ipData && (
        <div className="relative z-0 flex-1">
          <MapContainer
            center={[ipData.lat, ipData.lng]}
            zoom={13}
            scrollWheelZoom={true}
            className="h-full w-full"
            zoomControl={false}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <RecenterMap lat={ipData.lat} lng={ipData.lng} />
            <Marker position={[ipData.lat, ipData.lng]} icon={customIcon}>
              <Popup>{ipData.location}</Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </div>
  );
};

export default App;
