// function printName(){
// document.write("Edlira");
// document.write("<br>");
// setTimeout(
// function(){
//     document.write("Detjon");
//    }, 3000
// );
// document.write("Drin")
// }

// printName();



var color = ['red', 'blue'];

var names = ['Omer', 'Rigon', 'Ernes'];

function changeColor(){
    document.querySelector('body').style.background = color[Math.floor(Math.random()*color.length)];
}


function changeName(){
    document.querySelector('p').innerHTML = names[Math.floor(Math.random()*names.length)]
    }

    setInterval(changeColor, 1);
    setInterval(changeName, 1);
// Math.random (0,1) = 0.1, 0.2, 0.3 ,0.4 ,0.5 ,0.6,