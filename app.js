// script.js


function convertTemperature() {
    const temperatureInput = parseFloat(document.getElementById('temperatureInput').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const targetUnit = document.getElementById('targetUnit').value;

    if (isNaN(temperatureInput)) {
        document.getElementById('output').innerText = 'Please enter a valid temperature.';
        return;
    }

    let convertedTemp;

    switch (inputUnit) {
        case 'Celsius':
            if (targetUnit === 'Fahrenheit') {
                convertedTemp = (temperatureInput * 9/5) + 32;
            } else if (targetUnit === 'Kelvin') {
                convertedTemp = temperatureInput + 273.15;
            } else {
                convertedTemp = temperatureInput;
            }
            break;
        case 'Fahrenheit':
            if (targetUnit === 'Celsius') {
                convertedTemp = (temperatureInput - 32) * 5/9;
            } else if (targetUnit === 'Kelvin') {
                convertedTemp = ((temperatureInput - 32) * 5/9) + 273.15;
            } else {
                convertedTemp = temperatureInput;
            }
            break;
        case 'Kelvin':
            if (targetUnit === 'Celsius') {
                convertedTemp = temperatureInput - 273.15;
            } else if (targetUnit === 'Fahrenheit') {
                convertedTemp = ((temperatureInput - 273.15) * 9/5) + 32;
            } else {
                convertedTemp = temperatureInput;
            }
            break;
    }

    document.getElementById('output').innerText = `${convertedTemp.toFixed(2)} ${targetUnit}`;

    addHistory(temperatureInput, inputUnit, convertedTemp, targetUnit);
}

function addHistory(inputTemp, inputUnit, convertedTemp, targetUnit) {
    const historyItem = document.createElement('li');
    historyItem.innerText = `${inputTemp} ${inputUnit} = ${convertedTemp.toFixed(2)} ${targetUnit}`;
   
}


window.addEventListener('load', () => {
   
});
