/*!
 * jQuery Sticky Alert v0.0.3
 * https://github.com/tlongren/jquery-sticky-alert
 *
 * Copyright 2013 Tyler Longren
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: April 20, 2014
 */
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

          if( jQuery.cookie('jquery-sticky-alert-closed-ddd') === 'closed' ){

            $('<div class="alert-box" style="background-color:' + options.barColor + '"><a href="' + options.barTextLink + '" style="color:' + options.barFontColor + '; font-size:' + options.barFontSize + '">' + options.barText + '</a><a href="" class="close">&#10006;</a></div>').appendTo(this);

            $(".alert-box").delegate("a.close", "click", function(event) {

              event.preventDefault();

              $(this).closest(".alert-box").fadeOut(function(event){

                $(this).remove();

                var date = new Date();

                var minutes = 9988;

                date.setTime(date.getTime() + (minutes * 60 * 1000));

                $.cookie('jquery-sticky-alert-closed', 'closed', { path: '/', expires: date });

              });

            });

          }

        });
      }
  });

})(jQuery);