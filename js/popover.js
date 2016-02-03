/***************************************
*   Plugin:         Popover
*   Author:         Wifsimster
*   Release date:   03/02/2016
***************************************/
(function ($) {
  $.fn.popover = function () {
    $self = $(this);
    var $container = $('#'+$self.attr('data-popover'));
    // Moved all popover at the  end of body
    $.each(this, function(index, elt) {
      $container = $('#'+$(elt).attr('data-popover'));
      $container.clone().appendTo('body');
      $container[0].remove();
    });
    var OFFSET = 26;
    $self.on('click', function() {
      $container = $('#'+$(this).attr('data-popover'));
      var bodyRect = document.body.getBoundingClientRect(),
          elemRect = this.getBoundingClientRect(),
          leftOffset = elemRect.left - bodyRect.left,
          topOffset   = elemRect.top - bodyRect.top + OFFSET;
      if($(this).attr('data-popover-position') === 'top') {
        $container.css('left', leftOffset - ($container.width() / 2)).css('top', topOffset - $container.height() - (OFFSET * 2)).addClass('show');
      } else if($(this).attr('data-popover-position') === 'left') {
        $container.css('left', leftOffset - $container.width() - (OFFSET * 1.2)).css('top', topOffset - ($container.height() / 2) - OFFSET ).addClass('show');
      }  else if($(this).attr('data-popover-position') === 'right') {
        $container.css('left', leftOffset + OFFSET).css('top', topOffset - ($container.height() / 2) - OFFSET ).addClass('show');
      } else {
        $container.css('left', leftOffset - ($container.width() / 2)).css('top', topOffset).addClass('show');
      }
    });
    $(document).mouseup(function (e) {
      if ($container !== null && !$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.removeClass('show');
      }
    });
  };
})(jQuery);