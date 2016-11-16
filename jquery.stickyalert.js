/*!
 * jQuery Sticky Alert v0.0.4
 * https://github.com/tlongren/jquery-sticky-alert
 *
 * Copyright 2013 Tyler Longren
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: April 13, 2014
 */
(function($){

  $.fn.extend({

    stickyalert: function(options) {

  var defaults = {
    barColor: '#222', // alert background color
    barFontColor: '#FFF', // text font color
    barFontSize: '1.1rem', // text font size
    barText: 'I like bass and car audio :)', // the text to display, linked with barTextLink
    barTextLink: 'https://www.longren.io/', // url for anchor
    cookieRememberDays: '2', // in days
    displayDelay: '3000' // in milliseconds
  };

      var options = $.extend(defaults, options);

      return this.each(function() {

          if (document.cookie.indexOf("jqsa") >= 0) {

            $('.alert-box').remove();

          }

          else {

          $('<div class="alert-box" style="background-color:' + options.barColor + '"><a href="' + options.barTextLink + '" style="color:' + options.barFontColor + '; font-size:' + options.barFontSize + '">' + options.barText + '</a><a href="" class="close">&#10006;</a></div>').appendTo(this);

          $(".alert-box").delegate("a.close", "click", function(event) {

            event.preventDefault();

            $(this).closest(".alert-box").fadeOut(function(event){

              $(this).remove();

              // set a new cookie
              if (options.cookieRememberDays === 0) {

                // do nothing

              }

              else {

                var hidefor =  60 * 60 * 24 * options.cookieRememberDays;

                document.cookie = "jqsa=closed;max-age=" + hidefor;

              }

            });

          });

        }

      });

    }

  });

})(jQuery);