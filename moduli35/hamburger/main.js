function openMenu() {
    var menu = document.getElementByid("myLinks");
    if(menu.style.display == "block"){
        menu.style.diplay ="none";
    }else{
        menu.style.display = "block";
    }
}