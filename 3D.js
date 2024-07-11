$(document).ready(function() {
    $(document).mousemove(function(e) {
      // Get 'container' offset:
      const o = $('.box').offset();
      // Track mouse position:
      $(".dot").css({
        "top": e.pageY - o.top,
        "left": e.pageX - o.left
      });
    });
  });
  