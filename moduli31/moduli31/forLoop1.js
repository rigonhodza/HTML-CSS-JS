var cars = ['Volvo', 'BMW', 'Audi', 'Ford', 'Mazda', 'Toyotaa']

var text = '';

text += cars[0] + '<br>';
text += cars[1] + '<br>';
text += cars[2] + '<br>';
text += cars[3] + '<br>';
text += cars[4] + '<br>';
text += cars[5] + '<br>';

document.getElementById('forLoop1').innerHTML = text;
console.log(text);