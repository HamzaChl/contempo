var map = L.map("map").setView([50.851663178423294, 4.354844956221893], 17);


// var circle = L.circle([50.83690499974827, 4.32136024922227], {
//   color: "#9a3e4a79",
//   fillColor: "#f03",
//   fillOpacity: 0.5,
//   radius: 50,
// }).addTo(map);

var CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 20
}).addTo(map);

var greenIcon = L.icon({
  iconUrl: '../Assets/icons/map-marker.png',

  iconSize:     [35, 35], // size of the icon
  iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});

L.marker([50.851663178423294, 4.354844956221893], {icon: greenIcon}).addTo(map);
