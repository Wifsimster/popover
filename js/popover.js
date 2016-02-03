/***************************************
*   Plugin:         Popover
*   Author:         Wifsimster
*   Release date:   03/02/2016
***************************************/
(function ($) {
  "use strict";
  $.fn.popover = function () {
    var OFFSET = 15, $container;

    // Moved all popover at the  end of body
    $.each(this, function (index, elt) {
      $container = $('#' + $(elt).attr('data-popover'));
      $container.clone().appendTo('body');
      if ($container.length > 0) {
        $container[0].remove();
      }
    });

    $(this).on('click', function () {
      $container = $('#' + $(this).attr('data-popover'));
      var bodyRect = document.body.getBoundingClientRect(),
          elemRect = this.getBoundingClientRect(),
          leftOffset = elemRect.left - bodyRect.left,
          topOffset   = elemRect.top - bodyRect.top,
          containerWidth = $container.width() + parseInt($container.css('padding-left')) + parseInt($container.css('padding-right')),
          diff = ($(this).width() - containerWidth) / 2;
      if ($(this).attr('data-popover-position') === 'left') {
        $container
          .css('right', leftOffset + $(this).width() + OFFSET)
          .css('top', topOffset - ($container.height() / 2))
          .addClass('show');
      } else if ($(this).attr('data-popover-position') === 'right') {
        $container
          .css('left', leftOffset + $(this).width() + OFFSET)
          .css('top', topOffset - ($container.height() / 2))
          .addClass('show');
      } else if ($(this).attr('data-popover-position') === 'top') {
        $container
          .css('left', leftOffset + diff)
          .css('top', topOffset - $(this).height() - $container.height() - OFFSET)
          .addClass('show');
      } else {
        $container
          .css('left', leftOffset + diff)
          .css('top', topOffset + $(this).height() + OFFSET)
          .addClass('show');
      }
    });

    $(document).mouseup(function (e) {
      if ($container !== null && !$container.is(e.target) && $container.has(e.target).length === 0) {
        $container.removeClass('show');
      }
    });
  };
})(jQuery);