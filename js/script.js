var containerEl = $('#container');
var searchBtnEl = $('#search-btn');
var searchHistoryEl = $('.search-history');
var oneDayEl = $('.one-day');
var fiveDayEl = $('.five-day');
var API_key = 'f15b9497c6b6f8a664cbf171c926c169';

function getWeatherData(city) {
    var apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=imperial&appid=${API_key}`;

    // Get all of the weather data for their location and put it in aobject to be sent to addWeatherData()
    $.get(apiUrl, function(data) {
        var forecastData = [
        {
          date: data.list[3].dt_txt.split(' ')[0],
          temperature: {
            min: data.list[3].main.temp_max,
            max: data.list[3].main.temp_min
          },
          humidity: data.list[3].main.humidity,
          windSpeed: data.list[3].wind.speed,
          iconUrl: `https://openweathermap.org/img/w/${data.list[3].weather.icon}.png`
        },
        {
          date: data.list[11].dt_txt.split(' ')[0],
          temperature: {
            min: data.list[11].main.temp_max,
            max: data.list[11].main.temp_min
          },
          humidity: data.list[11].main.humidity,
          windSpeed: data.list[11].wind.speed,
          iconUrl: `https://openweathermap.org/img/w/${data.list[11].weather.icon}png`
        },
        {
          date: data.list[19].dt_txt.split(' ')[0],
          temperature: {
            min: data.list[19].main.temp_max,
            max: data.list[19].main.temp_min
          },
          humidity: data.list[19].main.humidity,
          windSpeed: data.list[19].wind.speed,
          iconUrl: `https://openweathermap.org/img/w/${data.list[19].weather.icon}png`
        },
        {
          date: data.list[27].dt_txt.split(' ')[0],
          temperature: {
            min: data.list[27].main.temp_max,
            max: data.list[27].main.temp_min
          },
          humidity: data.list[27].main.humidity,
          windSpeed: data.list[27].wind.speed,
          iconUrl: `https://openweathermap.org/img/w/${data.list[27].weather.icon}png`
        },
        {
          date: data.list[35].dt_txt.split(' ')[0],
          temperature: {
            min: data.list[35].main.temp_max,
            max: data.list[35].main.temp_min
          },
          humidity: data.list[35].main.humidity,
          windSpeed: data.list[35].wind.speed,
          iconUrl: `https://openweathermap.org/img/w/${data.list[35].weather.icon}png`
        }
    ]
    
    console.log(forecastData);
    });
}

// On button click get the city value from the input box and call the getWeatherData() function for that city
searchBtnEl.on('click', function() {
    var city = $('#search-input').val();
    getWeatherData(city);
});