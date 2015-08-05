
window.addEventListener('devicelight', function(e) {
  var lux = e.value;
  document.querySelector('#wow').textContent = lux + ' lux';
  
});

var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;
document.querySelector("#battLevel").textContent = battery.level;



