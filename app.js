
window.addEventListener('devicelight', function(e) {
  var lux = e.value;
  document.querySelector('#wow').textContent = lux + ' lux';
  
  if(lux < 50) {
    document.body.className = 'dim';
  }
  if(lux >= 50 && lux <= 1000) {
    document.body.className = 'normal';
  }
  if(lux > 1000)  {
    document.body.className = 'bright';
  }
  
});

window.addEventListener('lightlevel', function(e) {
  var level = e.value; document.querySelector('#resultLevel').textContent = level;
  
  if(level === 'dim') {
    document.body.className = 'dim';
  }
  if(level === 'normal')  {
    document.body.className = 'normal';
  }
  if(level === 'bright')  {
    document.body.className = 'bright';
  }
});
