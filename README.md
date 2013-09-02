simple-footnotes
================

jQuery plugin to add footnotes to a web page.

In order for the footnotes to be functional even if JavaScript is disabled, the default settings assume a footnote is in a span tag with the class footnote. It is also assumed the footnote is enclosed in parentheses.

By default, the plugin will replace such <span> tags with a hyperlinked and superscripted numeral enclosed in brackets. The title attribute of the a tag will be populated with the footnote contents (minus the parentheses) so the user can hover over the link to see them.

By default, the footnote contents (minus the parentheses) will be placed in p tags and moved to the bottom of the body tag.

The source code is documented so you can override settings or methods for your use. The tests provide a simple working example.
