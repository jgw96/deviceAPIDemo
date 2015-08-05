
window.addEventListener('devicelight', function(e) {
  var lux = e.value;
  document.querySelector('#wow').textContent = lux + ' lux';
  
});

navigator.getBattery().then(function(result){
  document.querySelector("#battLevel").textContent = result.level;
})


