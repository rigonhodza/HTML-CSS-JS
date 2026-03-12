function displayalert(){
    alert('this is inside the function')
}

displayalert();

function mbledhja(numri1,numri2){
    return numri1+numri2;
}

document.write(mbledhja(5,8));


function toCelsius(f){
    return 5/9*(f-32);
}

console.log("5 faronhite is equal to "+toCelsius(5)+" celsius");

var arrayFunction = () => alert("HELLOO");

arrayFunction();

function dsFunction(){
    var localvar ="DigitalSchools";
    alert(localvar);
}

dsFunction();

function toSeconds(m){
    return m*60;
} 

console.log(toSeconds(5));

function perimetri(a,b,c){
    return a+b+c
} 

console.log(perimetri(5,10,20));

var car={name:"Audi", color:"red", year:2012, vin:"www20456", licensePlate:"01-457-AG";

}

alert(Car.licensePlate);
alert(car['color']);


function Computer(name,CPU, RAM, GPU){
    this.name =name;
    this.CPU =CPU;
    this.RAM= RAM;
    this.GPU;
}

var c1 = new Computer("Macbook", "")
