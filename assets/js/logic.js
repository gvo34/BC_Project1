// Create a map object
var myMap = L.map("mapit", {
  center: [37.09, -95.71],
  zoom: 3
});

// Add a tile layer
L.tileLayer(
  'https://api.mapbox.com/styles/v1/mapbox/outdoors-v10/tiles/256/{z}/{x}/{y}?' +
    'access_token=pk.eyJ1IjoiZ3Vpcmx5biIsImEiOiJjamh0dzZnaHowaTlnM3BvNGl3NzYwNDQ2In0.fjmZrTxDywSwzCeE6BYKUg',
).addTo(myMap);


// An array containing each city's name, location, and population
var cities = [{
  location: [40.7128, -74.0059],
  name: "New York",
  population: "8,550,405"
},
{
  location: [41.8781, -87.6298],
  name: "Chicago",
  population: "2,720,546"
},
{
  location: [38.9047,	-77.0164],
  name: "Washington DC",
  population: "693,972"
},
{
  location: [34.0522, -118.2437],
  name: "Los Angeles",
  population: "3,971,883"
},
{
  location: [42.35843,	-71.0598],
  name: "Boston",
  population: "673,184"
},
{
  location: [35.7721,	-78.6386],
  name: "Raleigh",
  population: "458,880"
},
{
  location: [30.26715,	-97.7431],
  name: "Austin",
  population: "947,890"
},
{
  location: [33.749,	-84.388],
  name: "Atlanta",
  population: "472,522"
}


];

// Loop through the cities array and create one marker for each city, bind a popup containing its name and population add it to the map
for (var i = 0; i < cities.length; i++) {
  var city = cities[i];
  L.marker(city.location)
    .bindPopup("<h4>" + city.name + "</h4> <hr> <h5>Population " + city.population + "</h5>")
    .addTo(myMap);
}
