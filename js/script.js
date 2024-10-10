// start
console.log('script already loaded');

// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

// Event listeners for buttons
document.getElementById('convertToFahrenheit').addEventListener('click', function() {
    const celsius = parseFloat(document.getElementById('input').value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius).toFixed(2);
        document.getElementById('output').value = fahrenheit + '°F';
        document.getElementById('calculation').value = `${celsius}°C * (9/5) + 32 = ${fahrenheit}°F`;
    } else {
        alert('Masukkan nilai suhu yang valid');
    }
});

document.getElementById('convertToCelsius').addEventListener('click', function() {
    const fahrenheit = parseFloat(document.getElementById('input').value);
    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit).toFixed(2);
        document.getElementById('output').value = celsius + '°C';
        document.getElementById('calculation').value = `(${fahrenheit}°F - 32) * (5/9) = ${celsius}°C`;
    } else {
        alert('Masukkan nilai suhu yang valid');
    }
});

document.getElementById('reset').addEventListener('click', function() {
    document.getElementById('input').value = '';
    document.getElementById('output').value = '';
    document.getElementById('calculation').value = '';
});
