const dialog = document.getElementById('dialog');

const bearings = {
    'north': 0,
    'nort-east': 45,
    'east': 90,
    'south-east': 135,
    'south': 180,
    'south-west': 225,
    'west': 270,
    'north-west': 315
};

function onWeekDayClick(element){
    const day = dialog.getElementsByClassName('day')[0];
    const temperature = dialog.getElementsByClassName('temperature')[0];
    const windDirection = dialog.getElementsByClassName('windDirection')[0].getElementsByTagName('img')[0];
    const windSpeed = dialog.getElementsByClassName('windSpeed')[0];
    const type = dialog.getElementsByClassName('type')[0];

    day.textContent = element.day;
    temperature.textContent = `${convertToKelvin(element.temp)}°${weatherData.tempUnit}`;
    windDirection.style.transform = `rotate(${bearings[element.windDirection]}deg)`;
    windSpeed.textContent = `Wind speed: ${convertToKmPerHour(element.windSpeed)} ${weatherData.windSpeedUnit}`;
    type.textContent = element.type;

    dialog.showModal();
}

function closeDialog(){
    dialog.close();
}