(function($) {
  $.fn.placeholder = function(options) {
    return this.each(function() {
      var $this = $(this);
      var placeholder = $this.attr('placeholder');
      var clearOnFocus = (options && options['clearOnFocus']) || false;

      // If we find a placeholder attribute on the element
      if (placeholder != undefined && placeholder != '') {
        // Remove the placeholder attribute
        $this.removeAttr('placeholder');

        // Create and wrap the input in the input-holder
        var inputHolder = $this.wrap($(document.createElement('span')).addClass('input-holder')).parent();

        // Create the span that holds the default value
        var inputDefault = $(document.createElement('span')).text(placeholder).addClass('input-default');
        inputHolder.append(inputDefault);

        // Pass clicks on the placeholder text through to the input
        inputDefault.click(function() { $this.focus(); });

        var updateDisplay = function() {
          if ($this.val().length === 0) {
            inputDefault.show();
          } else {
            inputDefault.hide();
          }
        };

        if (clearOnFocus) {
          $this.focus(function(event) {
            inputDefault.hide();
          });

          $this.blur(updateDisplay);
        } else {
          $this.keydown(function(event) {
            if (event.keyCode !== '8' && event.keyCode !== '9' && event.keyCode !== '16') {
                updateDisplay();
            }
          });

          $this.keyup(updateDisplay);
        }

        $this.change(updateDisplay);
      }
    });
  };
})(jQuery);
