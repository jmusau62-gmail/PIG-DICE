$ (document).ready(function() {
    $("#roll").click(function player1() {
      var josh = Math.floor(Math.random() *6)+ 1;
      parseInt($("#total-1").text(josh));
      if (josh !=1){
        total += josh;
        parseInt($("#dice1").text(total));
      } else {
        total = 0;
        parseInt($("#dice1").text(total));
      }
    });
  });

/*second player*/
$(document).ready(function() {
$("#hold").click(function player2() {
  var musau= Math.floor(Math.random()*6)+1;
  parseInt($("#total-2").text(musau));
  if (musau !=1){
    total+= musau;
    parseInt($("#dice2").text(total));
  }else {
    total= 0;
    parseInt($)"#dice2").text(total));
  }
});
});
