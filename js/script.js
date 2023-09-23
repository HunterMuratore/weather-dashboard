var containerEl = $('#container');
var searchBtnEl = $('#search-btn');
var searchHistoryEl = $('.search-history');
var oneDayEl = $('.one-day');
var fiveDayEl = $('.five-day');
var API_key = 'f15b9497c6b6f8a664cbf171c926c169';
var date = dayjs().format('MM/DD/YYYY')

function getWeatherData(city) {
  var oneDayApiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${API_key}`;
  var fiveDayApiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=40&units=imperial&appid=${API_key}`;
  // Get the weather data for their location at the current time and save it in anobject
  $.get(oneDayApiUrl, function(data) {
    var oneDayData = {
      temperature: data.main.temp,
      humidity: data.main.humidity,
      windSpeed: data.wind.speed,
      iconUrl: `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    };

    showOneDayForecast(oneDayData, city);
  });
  // Get the weather data for their location for the next 5 days and save it in anobject
  $.get(fiveDayApiUrl, function(data) {
    var fiveDayData = [
    {
      date: data.list[3].dt_txt.split(' ')[0],
      temperature: data.list[3].main.temp_max,
      humidity: data.list[3].main.humidity,
      windSpeed: data.list[3].wind.speed,
      iconUrl: `https://openweathermap.org/img/w/${data.list[3].weather[0].icon}.png`
    },
    {
      date: data.list[11].dt_txt.split(' ')[0],
      temperature: data.list[11].main.temp_max,
      humidity: data.list[11].main.humidity,
      windSpeed: data.list[11].wind.speed,
      iconUrl: `https://openweathermap.org/img/w/${data.list[11].weather[0].icon}.png`
    },
    {
      date: data.list[19].dt_txt.split(' ')[0],
      temperature: data.list[19].main.temp_max,
      humidity: data.list[19].main.humidity,
      windSpeed: data.list[19].wind.speed,
      iconUrl: `https://openweathermap.org/img/w/${data.list[19].weather[0].icon}.png`
    },
    {
      date: data.list[27].dt_txt.split(' ')[0],
      temperature: data.list[27].main.temp_max,
      humidity: data.list[27].main.humidity,
      windSpeed: data.list[27].wind.speed,
      iconUrl: `https://openweathermap.org/img/w/${data.list[27].weather[0].icon}.png`
    },
    {
      date: data.list[35].dt_txt.split(' ')[0],
      temperature: data.list[35].main.temp_max,
      humidity: data.list[35].main.humidity,
      windSpeed: data.list[35].wind.speed,
      iconUrl: `https://openweathermap.org/img/w/${data.list[35].weather[0].icon}.png`
    }
  ];
    
    showFiveDayForecast(fiveDayData);
  });
}

function showOneDayForecast(forecast, city) {
  var oneDayHtml =  `
      <h2>${city.toUpperCase()} ${date} <span><img src="${forecast.iconUrl}" alt="Weather     Icon"></span></h2>
      <p>Temperature: ${forecast.temperature}°F</p>
      <p>Wind Speed ${forecast.windSpeed} mph</p>
      <p>Humidity: ${forecast.humidity}</p>
      `;

  oneDayEl.addClass('border border-dark bg-dark text-white');
  oneDayEl.append(oneDayHtml);
}

function showFiveDayForecast(forecast) {  
  fiveDayEl.append('<h2>5-Day Forecast:</h2>', '<div class="card-container d-flex flex-row flex-wrap mx-1 mt-3">');
  var cardContainerEl = $('.card-container');

  for (var i = 0; i < 5; i++) {
    var fiveDayHtml = `
    <div class="card mt-3 me-3 bg-dark text-white" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${forecast[i].date} <span><img src="${forecast[i].iconUrl}"  alt="Weather Icon"></span></h3>
        <div class="card-text">
          <p>Temperature: ${forecast[i].temperature}°F</p>
          <p>Wind Speed ${forecast[i].windSpeed} mph</p>
          <p>Humidity: ${forecast[i].humidity}</p>
        </div>
      </div>
    </div>`;
    cardContainerEl.append(fiveDayHtml);
  }
}

// On button click get the city value from the input box and call the getWeatherData() function for that city
searchBtnEl.on('click', function() {
    var city = $('#search-input').val();
    getWeatherData(city);
});