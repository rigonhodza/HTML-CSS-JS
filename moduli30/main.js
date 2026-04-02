var wakeuptime;
var dstime;
var sleeptime;
var noon = 12;

function showCurrentTime(){
    var clock = document.getElementById('clock')
    var currentTime = new Date()

    var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
            var seconds = currentTime.getSeconds();

            var merdian = "AM";

            if(hours >= noon){
                mardian = "PM";
            }

            var clockTime = hours + ":" + minutes + ":" + seconds + " " + merdian;
            clock.innerHTML = clockTime;
            changeImage();

};