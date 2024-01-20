

/* City name w nagłówku */

document.getElementById("search").addEventListener('click', ()=>{
    let cityName = document.getElementById("city-name-search").value;
    if(cityName == ""){
        alert("Wpisz nazwę miejscowości!");
    }
    else{
        document.getElementById("city-name").innerHTML = cityName.toUpperCase();
            document.getElementById("city-name-search").value = "";
            showWeather();
    }
});

document.addEventListener('keypress', (e)=>{
    if(e.key === 'Enter'){
        let cityName = document.getElementById("city-name-search").value;
        if(cityName == ""){
            alert("Wpisz nazwę miejscowości!");
        }
        else{
            document.getElementById("city-name").innerHTML = cityName.toUpperCase();
            document.getElementById("city-name-search").value = "";
            showWeather();
        }
    }
});


