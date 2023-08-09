function convert() {
    const temperature = parseFloat(document.getElementById('temperature').value);
    const unit = document.getElementById('unit').value;
    let result;
    if (unit === 'celsius') {
      result = (temperature * 9 / 5) + 32;
    } else {
      result = (temperature - 32) * 5 / 9;
    }
    document.getElementById('converted').innerText = `Converted temperature: ${result.toFixed(2)} ${unit === 'celsius' ? 'Fahrenheit' : 'Celsius'}`;
  }