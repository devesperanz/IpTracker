// var mymap = L.map('mapid').fitWorld();
// L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/1/1/0?access_token=sk.eyJ1IjoiY29vbGhvcGUiLCJhIjoiY2tndmllMmFhMDBxdzJ6cW1qNmo4ZDhubSJ9.0mnkSMSot0llQLeQoezqPQ', {
//     attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//     maxZoom: 18,
//     id: 'mapbox/streets-v11',
//     tileSize: 512,
//     zoomOffset: -1,
//     accessToken: 'sk.eyJ1IjoiY29vbGhvcGUiLCJhIjoiY2tndmllMmFhMDBxdzJ6cW1qNmo4ZDhubSJ9.0mnkSMSot0llQLeQoezqPQ'
// }).addTo(mymap);
// var marker = L.marker([51.5, -0.09]).addTo(mymap);


// document.querySelector('#mapButton').addEventListener('click', findAddress);
function findAddress(){
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_lNRHxoKFiAub0vZ3bCg4shBxoX6XE&ipAddress=${searchInput.value}`)
    .then((res)=> res.json())
    .then((data)=> console.log(data))
}
const searchInput = document.querySelector('#searchInput');
searchInput.addEventListener('search', searchIp);
function searchIp(e){
  if(e.target.value == ''){
    console.log('hi')
  }else{
    findAddress()   
  }
  let ipAddress = document.querySelector('.ip-address');
  ipAddress.innerHTML += e.ip
  e.target.value = ''
}

