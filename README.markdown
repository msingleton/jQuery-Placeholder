jQuery Placeholder
=============
Enables flexible placeholders that are simple to style and modify

Usage
-------------
Add a 'placeholder' attribute to your text inputs you want to use this on and call: 
$('input').placeholder();

It modifies the input elements by wrapping them in a container that holds the input element, as well as a span tag containing the placeholder text.

If something is entered into the textbox, the placeholder text is hidden, if the text is removed the placeholder is restored.

Example:
-------------
Before:
    <input type="text" id="firstName" name="firstName" placeholder="Mike" />

After:
    <span class="input-holder">
      <input type="text" id="firstName" name="firstName">
      <span class="input-default">Mike</span>
    </span>