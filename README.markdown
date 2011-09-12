# jQuery Placeholder
Enables flexible placeholders that are simple to style and modify.

It modifies the input elements by wrapping them in a container that holds the input element, as well as a span tag containing the placeholder text. If something is entered into the textbox, the placeholder text is hidden, if the text is removed the placeholder is restored.

##Example usage

### HTML
``` html
<input type="text" id="firstName" name="firstName" placeholder="Mike" />
```

Gets converted to:
``` html
<span class="input-holder">
  <input type="text" id="firstName" name="firstName">
  <span class="input-default">Mike</span>
</span>
```

### jQuery
``` js
$('input').placeholder();
```

### CSS
Since input-holder and input-default classes are added to the span tags you can style them with something similar to:

``` css
.input-holder {
  position: relative;
}

.input-default {
  color: #ccc;
  position: absolute;
  top: 1px;
  left: 5px;
}
```