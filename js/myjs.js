
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        //document.querySelector("#myData").innerHTML = "latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude;
        var latitude = position.coords.latitude;
        var longitude = position.coords.longitude;
        var url = 'https://api.openweathermap.org/data/2.5/weather?appid=129c9726ce601a0f49f47285d93387ba&lat=' + latitude + '&lon=' + longitude;
        $.getJSON(url, function (reply) {
            document.querySelector('#city').innerHTML = reply.name + ', ' + reply.sys.country;
            document.querySelector('#temp').innerHTML = '<span id="quotedTemperature">' + (reply.main.temp - 273).toFixed(1) + '</span>' + '<span id="degrees" onclick="clicked()"> °C</span>';
            document.querySelector('#details').innerHTML = reply.weather[0].main + ' <span>(' + reply.weather[0].description + ')</span>';
            document.querySelector('#weatherImage').innerHTML = '<img src="https://openweathermap.org/img/w/' + reply.weather[0].icon + '.png">';
        });
    });
}
function clicked() {
    if (event.target.innerHTML.includes('C')) {
        var celsius = document.getElementById('quotedTemperature').textContent;
        var fahrenheit = ((9 * celsius / 5) + 32).toFixed(1);

        document.getElementById('quotedTemperature').innerHTML = fahrenheit;
        event.target.innerHTML = '  °F';
    }
    else {
        var fahrenheit = document.getElementById('quotedTemperature').textContent;
        var celsius = (5 * (fahrenheit - 32) / 9).toFixed(1);

        document.getElementById('quotedTemperature').innerHTML = celsius;
        event.target.innerHTML = '  °C';
    }
}
