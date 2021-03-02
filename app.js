const weatherData = {
    tempUnit: 'C',
    windSpeedUnit: 'm/s',
    days: [{
        day: 'Monday',
        temp: 22,
        windDirection: 'north-east',
        windSpeed: 10,
        type: 'Sunny'
    }, {
        day: 'Tuesday',
        temp: 14,
        windDirection: 'north-west',
        windSpeed: 14,
        type: 'Rainy'
    }, {
        day: 'Wednesday',
        temp: 17,
        windDirection: 'south-east',
        windSpeed: 23,
        type: 'Windy'
    }, {
        day: 'Thursday',
        temp: 25,
        windDirection: 'south-west',
        windSpeed: 7,
        type: 'Sunny'
    }, {
        day: 'Friday',
        temp: 19,
        windDirection: 'north-east',
        windSpeed: 10,
        type: 'Sunny'
    }, {
        day: 'Saturday',
        temp: 13,
        windDirection: 'north',
        windSpeed: 11,
        type: 'Rainy'
    }, {
        day: 'Sunday',
        temp: 15,
        windDirection: 'west',
        windSpeed: 15,
        type: 'Cloudy'
    }]
};

const content = document.getElementById('content');

function onLoad(){
    createDaysOfTheWeek();
}

function createDaysOfTheWeek(){
    const fragment = document.createDocumentFragment();
    weatherData.days.forEach(element => {
        const day = createDay(element);
        fragment.appendChild(day);
    });

    content.appendChild(fragment);
}

function createDay(element){
    const weekDay = document.createElement('div');
    weekDay.classList.add('weekDay');
    weekDay.onclick = onWeekDayClick.bind(this, element);

    const weekDayName = document.createElement('div');
    weekDayName.textContent = element.day;
    weekDayName.classList.add('day');
    weekDay.appendChild(weekDayName);

    const weekDayTemperature = document.createElement('div');
    weekDayTemperature.textContent = `${convertToKelvin(element.temp)}°${weatherData.tempUnit}`;
    weekDayTemperature.classList.add('temperature');
    weekDay.appendChild(weekDayTemperature);

    return weekDay;
}

function convertToKelvin(temp){
    if(weatherData.tempUnit === 'K') {
        return temp + 273.15;
    }

    return temp;
}

function convertToKmPerHour(windSpeed){
    if(weatherData.windSpeedUnit === 'km/h') {
        return (windSpeed / 1000 * 3600).toFixed(2);;
    }

    return windSpeed;
}

function changeTemperatureUnits(unit){
    weatherData.tempUnit = unit;
    redraw();
}

function changeWindSpeedUnits(unit){
    weatherData.windSpeedUnit = unit;
    redraw();
}

function redraw(){
    content.innerHTML = '';
    createDaysOfTheWeek();
}