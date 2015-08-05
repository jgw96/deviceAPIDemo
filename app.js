
/* Ambient Light Events */
window.addEventListener('devicelight', function(deviceLightEvent) {

    /* Check ambient light status */
    if (deviceLightEvent.value < 500) { // snow
        document.querySelector("#wow").text="It is dim";
    }
   
});
