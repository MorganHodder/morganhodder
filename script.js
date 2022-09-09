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

function openSchema() {
    document.getElementById("schemaIframe")
        .style.display = "block";
}

function closeSchema() {
     document.getElementById("schemaIframe")
        .style.display = "none";
}

function lunchWindow() {
    window.open("https://skolmaten.se/polhemsskolan2/")
}