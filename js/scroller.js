$(document).ready(function () {
	var maxIndex = $('.scroll span').length,
    curIndex = 0;

$(function(){
  spin();
})
  
function spin(){
$('.scroll').animate({ scrollTop: curIndex * $('.scroll span').height() + 'px' }, 300, function(){
  if(curIndex + 1 === maxIndex){
    curIndex = 0;
  } else {
    curIndex++;
  }
  setTimeout(function(){ spin() }, 2000);
});
}
});

