function convertTemperature() {
    var temperature = parseFloat(document.getElementById("temperature").value);
    var unit = document.getElementById("unit").value;
    var result;

    if (unit === "celsius") {
        result = (temperature * 9 / 5) + 32;
        document.getElementById("result").innerText = temperature + " Celsius is equal to " + result + " Fahrenheit.";
    } else {
        result = (temperature - 32) * 5 / 9;
        document.getElementById("result").innerText = temperature + " Fahrenheit is equal to " + result + " Celsius.";
    }
}