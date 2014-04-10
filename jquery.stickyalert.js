(function($){

  $.fn.extend({

    stickyalert: function(options) {

        var defaults = {
            barColor: '#222',
            barFontColor: '#FFF',
            barFontSize: '1.1rem',
            barText: 'I like to work! Hire me!',
            barTextLink: 'http://longren.io/work-with-me/',
        };

        var options = $.extend(defaults, options);

        return this.each(function() {

          $('<div class="alert-box" style="background-color:' + options.barColor + '"><a href="' + options.barTextLink + '" style="color:' + options.barFontColor + '">' + options.barText + '</a><a href="" class="close">&#10006;</a></div>').appendTo(this);

          $(".alert-box").delegate("a.close", "click", function(event) {

            event.preventDefault();

            $(this).closest(".alert-box").fadeOut(function(event){

              $(this).remove();

            });

          });

        });
      }
  });

})(jQuery);