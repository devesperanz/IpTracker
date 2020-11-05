const searchInput = document.querySelector('#searchInput');
const searchIpAddress = document.getElementById('search-ip')
const locationDetails =  document.querySelector('#location-details')
const ipAddress =  document.getElementById('ip-address')
const timezone = document.getElementById('timezone')
const isp = document.getElementById('isp')
const inputGroup = document.querySelector('.input-group')

//FETCHING THE IP, DOMAIN OR EMAI ADDRESS
function findAddress(){
    
    fetch(`https://geo.ipify.org/api/v1?apiKey=at_lNRHxoKFiAub0vZ3bCg4shBxoX6XE&ipAddress=${searchInput.value},
            https://geo.ipify.org/api/v1?apiKey=at_lNRHxoKFiAub0vZ3bCg4shBxoX6XE&domain=${searchInput.value}`)
    .then((res)=> res.json())
    .then((data)=> {        
        if (data.code == 422 ){            
           inputGroup.innerHTML += `<p class>${data.messages}</p>`
           console.log('seem')          
        }else{
            console.log(data)          
            locationDetails.innerHTML = `${data.location.city},  ${data.location.country}, ${data.location.postalCode}`
            ipAddress.innerHTML = data.ip
            timezone.innerHTML = data.location.timezone
            isp.innerHTML = data.isp    
        }      
        searchInput.value           
   })   
    
}

// EVENT LISTENERS
searchInput.addEventListener('search', searchIp);
searchIpAddress.addEventListener('click', searchIp);

function searchIp(e){
    if(e.target.value == ''){
        // inputGroup.innerHTML += '<p class= "task-error">*Add a task</p>';        
        console.log('hi')
    }else{
        findAddress()        
    }   
    e.target.value = ''; 
    e.preventDefault();
}