$(document).ready(function(){
  $('.composition-canvas').compositionCanvas();
  contentList = $('#gj_page_admin_content_elements');
  contentListPosition = contentList.offset();
  contentList.css({
      'height': $(window).height() - contentListPosition.top,
      'position': 'fixed',
      'overflow': 'scroll'
  })
});

    
