////////////////////////
//ON BUTTON CLICK OPEN//
////////////////////////
function vklassOpen() {
    window.open("https://auth.vklass.se/saml/initiate?idp=http://fs.lund.se/adfs/services/trust&org=60");
}
  

function toggleSchema(){
    iframeClose = document.getElementById("schemaIframe").style.display;
    if (iframeClose == "block") {
        return close();
    }
    return open();
}

function open() {
    document.getElementById("schemaIframe")
        .style.display = "block";
}

function close() {
     document.getElementById("schemaIframe")
        .style.display = "none";
}

function lunchOpen() {
    window.open("https://skolmaten.se/polhemsskolan2/")
}