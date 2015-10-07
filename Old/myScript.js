function changeTemp() {
    document.getElementById("temp").innerHTML = "test";

}

function changeImg() {
    document.getElementById("imgWeather").src = "Picture/fog.png";
}

var currentDay = 0; //global variable, of the offset Day
var gHumadity = 0.98;
var gSpeed = 20;
var gCity = "Laudert";
function changeDay(addDay) {

    if (currentDay < 5 && addDay) {
        currentDay++;
    } else if (currentDay > 0 && (addDay === false)) {
        currentDay--;
    }
    console.log(currentDay);
    updateData();
}

function convertMSToKmH(speed) {
    var retVal = speed / 1000 * 3600;
    return retVal;
}

function convertCToF(temp) {
    var retVal = temp * 1.8 + 32;
    return retVal;
}

function getStringHumidity(value) {
    return (value * 100 + " %");
}


function updateData() {
    document.getElementById("humidity").innerHTML = getStringHumidity(gHumadity);
    var x = document.getElementsByClassName("City");
    
    var i;
    for (i = 0; i < x.length; i++) {
    x[i].innerHTML = gCity.toUpperCase();
}
}

function startDetailView() {
    document.getElementById("detailView").style.display = "block";
    document.getElementById("mainView").style.display = "none";
}

function startMainView() {
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("detailView").style.display = "none";
    document.getElementById("mainView").style.display = "block";
}

function startSidbar() {
    document.getElementById("sidebar").style.display = "block";
}