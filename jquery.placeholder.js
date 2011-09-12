(function($) {
  $.fn.placeholder = function() {
    return this.each(function() {
      var $this = $(this);
      var placeholder = $this.attr('placeholder');

      // If we find a placeholder attribute on the element
      if(placeholder != undefined && placeholder != '') {
        // Remove the placeholder attribute
        $this.removeAttr('placeholder');
        
        // Create and wrap the input in the input-holder
        var inputHolder = $this.wrap($(document.createElement('span')).addClass('input-holder')).parent();

        // Create the span that holds the default value
        var inputDefault = $(document.createElement('span')).text(placeholder).addClass('input-default');
        inputHolder.append(inputDefault);
        
        // Hide if it's not the delete, tab or shift keys
        $this.keydown(function(event) {
          if(event.keyCode != '8' && event.keyCode != '9' && event.keyCode != '16') { inputDefault.hide(); }
        });
        
        // Show if the field is empty
        $this.keyup(function(event) {
          if($this.val().length == 0) { inputDefault.show(); }
        });
      }
    });
  };
})(jQuery);
