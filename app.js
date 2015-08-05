
window.addEventListener('devicelight', function(e) {
  var lux = e.value;
  document.querySelector('#wow').textContent = lux + ' lux';
  
});

var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;
document.querySelector("#battLevel").textContent = battery.level;

document.querySelector("#vibrateOnceButton").addEventListener("click",function(){
  navigator.vibrate(1000);
});

document.querySelector("#vibrateMultipleButton").addEventListener("click",function(){
  navigator.vibrate([3000, 2000, 1000]);
})



