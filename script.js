// The 404 page from my site http://chabot.tv/404
$(function(){

  var text = $(".element code").html()

  $(".highlighter").typed({
      strings: [text],
      contentType: 'html',
      typeSpeed: -35,
      cursorChar: '&#9608;'
  });
  
   var scrolltobottom = setInterval(function(){ window.scrollTo(0, document.body.scrollHeight)}, 600);
  function f() {
     clearInterval(scrolltobottom);
  }
setTimeout(f, 55000)
});