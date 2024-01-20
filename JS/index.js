
/* City name w nagłówku */

document.getElementById("search").addEventListener('click', ()=>{
    let cityName = document.getElementById("city-name-search").value;
    if(cityName == ""){
        alert("Wpisz nazwę miejscowości!");
    }
    else{
        document.getElementById("city-name").innerHTML = cityName.toUpperCase();
            
            async function showWeather(){
                let cityName = document.getElementById("city-name-search").value;

                const apiKey = "a6bf352259ef900f8c2c2ebf968546ec";
                const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
                const result = document.getElementById("result");
                
                const response = await fetch(apiURL+`&q=${cityName}&appid=${apiKey}`);
                var data = await response.json();

                console.log(data);
                document.getElementById("temp").innerHTML = "Temperatura: "+data.main.temp+"°C";
                document.getElementById("wind").innerHTML = "Prędkość wiatru: "+data.wind.speed+"km/h";
                document.getElementById("humidity").innerHTML = "Wilgotność: "+data.main.humidity+"%";
            }  

            showWeather();
            document.getElementById("city-name-search").value = "";
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
            async function showWeather(){
                let cityName = document.getElementById("city-name-search").value;

                const apiKey = "a6bf352259ef900f8c2c2ebf968546ec";
                const apiURL = "https://api.openweathermap.org/data/2.5/weather?&units=metric";
                const result = document.getElementById("result");
                
                const response = await fetch(apiURL+`&q=${cityName}&appid=${apiKey}`);
                var data = await response.json();

                console.log(data);
                document.getElementById("temp").innerHTML = "Temperatura: "+data.main.temp+"°C";
                document.getElementById("wind").innerHTML = "Prędkość wiatru: "+data.wind.speed+"km/h";
                document.getElementById("humidity").innerHTML = "Wilgotność: "+data.main.humidity+"%";]
/* 
                const weather = data. */
            }  

            showWeather();
            document.getElementById("city-name-search").value = "";
        }
    }
});


