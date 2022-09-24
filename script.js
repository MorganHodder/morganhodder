////////////////////////
//ON BUTTON CLICK OPEN//
////////////////////////

function vklassWindow() {
    window.open("https://auth.vklass.se/saml/initiate?idp=http://fs.lund.se/adfs/services/trust&org=60");
}
  
function toggleSchema(){
    iframeClose = document.getElementById("schemaIframe").style.display;
    if (iframeClose == "block") {
        return closeSchema();
    }
    return openSchema();
}

function toggleLunch(){
    iframeClose = document.getElementById("lunchIframe").style.display;
    if (iframeClose == "block") {
        return closeLunch();
    }
    return openLunch();
}

function openSchema() {
    document.getElementById("schemaIframe")
        .style.display = "block";
}

function closeSchema() {
     document.getElementById("schemaIframe")
        .style.display = "none";
}

function openLunch() {
    document.getElementById("lunchIframe")
        .style.display = "block";
}

function closeLunch() {
     document.getElementById("lunchIframe")
        .style.display = "none";
}

$(document).ready(function() {

    $(function() { $("#schemaIframe").draggable({ containment: "window" }); });

});

$(document).ready(function() {

    $(function() { $("#lunchIframe").draggable({ containment: "window" }); });

});

/////////////////////
///GET WEEK NUMBER///
/////////////////////

currentDate = new Date();
    startDate = new Date(currentDate.getFullYear(), 0, 1);
    var days = Math.floor((currentDate - startDate) /
        (24 * 60 * 60 * 1000));
         
    var weekNumber = Math.ceil(days / 7);
    
    document.getElementById("weekNmbr").innerHTML = "Vecka " + weekNumber;