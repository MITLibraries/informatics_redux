jQuery(document).ready(function() {
  var wide = jQuery('.views_slideshow_slide img').width();
  jQuery('.block-boxes-os_boxes_slideshow > div,.views-slideshow-controls-text,.views_slideshow_cycle_main,.views-slideshow-controls-bottom').css('width', wide);
  
  //Insert the secondary nav to the content region for smartphone
  jQuery(window).resize(function() {
    if (jQuery(window).width() < 600) {
      jQuery('.region-header-third #block-os-secondary-menu').insertAfter('.region-sidebar-second');
    }
  });

  // Call vertical tabs on front page
  jQuery("body.front section#block-boxes-1362682820 div#tabs").tabs().addClass("ui-tabs-vertical ui-helper-clearfix");
  jQuery("body.front section#block-boxes-1362682820 div#tabs ul").removeClass( "ui-corner-all" );
  jQuery("body.front section#block-boxes-1362682820 div#tabs li").removeClass( "ui-corner-top" );

});
