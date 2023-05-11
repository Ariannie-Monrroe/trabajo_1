function api(){

    fetch('https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={da782411f0dd3e140c85a1c83494aa97}')
        .then(response => response.json())
        .then(data => {
            // console.log(data)
        
        })
}