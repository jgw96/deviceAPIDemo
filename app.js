
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
});

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

if (navigator.getUserMedia) {
   navigator.getUserMedia({ video: { width: 1280, height: 720 } },
      function(stream) {
         var video = document.querySelector('video');
         video.src = window.URL.createObjectURL(stream);
         video.onloadedmetadata = function(e) {
           video.play();
         };
      },
      function(err) {
         console.log("The following error occured: " + err.name);
      }
   );
} else {
   console.log("getUserMedia not supported");
}



