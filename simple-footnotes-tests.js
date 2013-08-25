test("Test", function () {
    "use strict";
    var options = {
        destination: '#qunit-fixture',
        source: '#qunit-fixture span.footnote'
    };
    $.simpleFootnotes(options);
    var inlines = $('#qunit-fixture sup');
    equal(inlines.eq(0).html(), '<a id="footnote-inline-1" href="#footnote-1" title="Smith 2001, p. 101">[1]</a>');
    equal(inlines.eq(1).html(), '<a id="footnote-inline-2" href="#footnote-2" title="Johnson 2002, p. 102">[2]</a>');
    equal(inlines.eq(2).html(), '<a id="footnote-inline-3" href="#footnote-3" title="Jones 2003, p. 103">[3]</a>');
    equal(inlines.eq(3).html(), '<a id="footnote-inline-4" href="#footnote-4" title="Brown 2004, p. 104">[4]</a>');
    equal(inlines.eq(4).html(), '<a id="footnote-inline-5" href="#footnote-5" title="Davis 2005, p. 105">[5]</a>');
    equal($('#footnote-1').html(), '<a href="#footnote-inline-1">[1]</a> Smith 2001, p. 101');
    equal($('#footnote-2').html(), '<a href="#footnote-inline-2">[2]</a> Johnson 2002, p. 102');
    equal($('#footnote-3').html(), '<a href="#footnote-inline-3">[3]</a> Jones 2003, p. 103');
    equal($('#footnote-4').html(), '<a href="#footnote-inline-4">[4]</a> Brown 2004, p. 104');
    equal($('#footnote-5').html(), '<a href="#footnote-inline-5">[5]</a> Davis 2005, p. 105');
});
