
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-links");
    }


    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabname).classList.add("active-tab")
}


var sidemenus = document.getElementById("sidemenu");

function openmenu(){
    sidemenus.style.right="0";
}

function closemenu(){
    sidemenus.style.right="-200px";
}