var button1 = document.getElementById('btn1')
var teksti = document.getElementById('txt1')


button1.onclick = function(){
    teksti.style.color = "red"
    teksti.style.backgroundColor = 'lightgrey'
    teksti.style.fontSize = '100px'
    teksti.style.padding = '20px'
    teksti.style.textAlign = 'center'
}

button2.onclick = function(){
    teksti1.style.csstekst = "color:red; background-color:green; text-Align:center; font-size:25px; font-family:fantasy; "

}

var ifundit = document.getElementById('ifundit')
var pg = document.getElementById('pg')


ifundit.onclick=function(){
    pg.setAttribute("class","paragrafi")
}