$(document).ready(function(){
  $('.composition-canvas').compositionCanvas();
  fixList($('#gj_page_admin_content_elements'));
  fixList($('#gj_page_admin_design_elements'));
});

function fixList(list){
    
  listPosition = list.offset();
  list.css({
      'height': $(window).height() - listPosition.top,
      'position': 'fixed',
      'overflow': 'auto'
  })
}

    
