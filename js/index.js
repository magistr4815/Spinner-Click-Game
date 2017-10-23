$(function() {
var deg = 0;
var speed = 0;
var i = 1;
var max = 0;
var obj = document.querySelector("img");

  $("img").click(function(id) {
    go(id);
  });
  
  function go()
  {
    speed=speed+10;
    var id = setInterval(rotate, 10);
    Max(speed);
    function rotate()
    {
      obj.style.WebkitTransform = "rotate("+ deg +"deg)";
      if(deg >= 360) 
      { 
        deg = 0; 
        i = 0;
        speed= speed -10;
      } 
      else { 
        i++;
        deg = deg + Math.log(i+1)/10; 
        
      }
      $("span").text(speed);
      if (deg == 0) { clearInterval(id); }
    };
  }
  
  function Max(a) {
    if(a > max)
      {
        max = a;
      }
  }
  
  
});