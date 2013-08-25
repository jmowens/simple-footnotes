(function ($) {
    "use strict";
    $.simpleFootnotes = function (options) {
        /***********************************************************************
         * Add footnotes to (part of) a document
         *
         * Parameters:
         * - options: customized options to override the default options
         **********************************************************************/
        var opts = $.extend({}, $.simpleFootnotes.defaults, options),
            src = $(opts.source),
            dest = $(opts.destination).eq(0);
        src.each(function (i, elem) {
            var num = i + 1,
                srcHtml = $.simpleFootnotes.formatSrcHtml(opts, num, elem),
                destHtml = $.simpleFootnotes.formatDestHtml(opts, num, elem);
            $(dest).append(destHtml);
            $(elem).replaceWith(srcHtml);
        });
    };

    $.simpleFootnotes.defaults = {
        /*
         * Selector for where the footnotes will end up after the plugin runs.
         * This might be at the end of the page or at the end of a section. The
         * plugin will place the footnotes at the first element that matches the
         * selector.
         */
        destination: "body",
        /*
         * Prefix of the ID for the footnote at bottom of page.
         */
        destinationIdPrefix: "footnote-",
        /*
         * Selector to get the footnotes from their initial position. This might
         * be the main text of an article.
         */
        source: "span.footnote",
        /*
         * Prefix of the ID for the footnote in its inline position.
         */
        sourceIdPrefix: "footnote-inline-",
        /*
         * Character to trim from left side of text in cleanText/cleanHtml
         */
        trimLeft: "(",
        /*
         * Character to trim from right side of text in cleanText/cleanHtml
         */
        trimRight: ")"
    };

    $.simpleFootnotes.cleanHtml = function (options, elem) {
        /***********************************************************************
         * Return a cleaned up version of an element's HTML
         *
         * Parameters:
         * - options: the options to use to clean up the HTML
         * - elem: the element whose HTML needs cleaning
         **********************************************************************/
        var html = $(elem).html();
        html = $.trim(html);
        html = html.replace(/"/g, "&quot;");
        if (html.length > 0 && html[0] === options.trimLeft) {
            html = html.slice(1);
        }
        if (html.length > 0 && html[html.length - 1] === options.trimRight) {
            html = html.slice(0, html.length - 1);
        }
        html = $.trim(html);
        return html;
    };

    $.simpleFootnotes.cleanText = function (options, elem) {
        /***********************************************************************
         * Return a cleaned up version of an element's text
         *
         * Parameters:
         * - options: the options to use to clean up the text
         * - elem: the element whose text needs cleaning
         **********************************************************************/
        var text = $(elem).text();
        text = $.trim(text);
        text = text.replace(/"/g, "&quot;");
        if (text.length > 0 && text[0] === options.trimLeft) {
            text = text.slice(1);
        }
        if (text.length > 0 && text[text.length - 1] === options.trimRight) {
            text = text.slice(0, text.length - 1);
        }
        text = $.trim(text);
        return text;
    };

    $.simpleFootnotes.formatDestHtml = function (options, num, elem) {
        /***********************************************************************
         * Return HTML for the footnote at the end of the page
         *
         * Parameters:
         * - options: the options to use to format the HTML
         * - num: the number of the footnote
         * - elem: the element in its initial position
         **********************************************************************/
        var id = 'id="' + $.simpleFootnotes.getDestId(options, num) + '"',
            href = 'href="#' + $.simpleFootnotes.getSrcId(options, num) + '"',
            html = '<p ' + id + '>';
        html += '<a ' + href + '>';
        html += '[' + num + ']';
        html += '</a> ';
        html += $.simpleFootnotes.cleanHtml(options, elem);
        html += '</p>';
        return html;
    };

    $.simpleFootnotes.formatSrcHtml = function (options, num, elem) {
        /***********************************************************************
         * Return HTML for the footnote at its inline position
         *
         * Parameters:
         * - options: the options to use to format the HTML
         * - num: the number of the footnote
         * - elem: the element in its initial position
         **********************************************************************/
        var id = 'id="' + $.simpleFootnotes.getSrcId(options, num) + '"',
            href = 'href="#' + $.simpleFootnotes.getDestId(options, num) + '"',
            title = 'title="' + $.simpleFootnotes.cleanText(options, elem) + '"',
            html = '<sup>';
        html += '<a ' + id + ' ' + href + ' ' + title + '>';
        html += '[' + num + ']';
        html += '</a>';
        html += '</sup>';
        return html;
    };

    $.simpleFootnotes.getDestId = function (options, num) {
        /***********************************************************************
         * Return ID for the footnote at the end of the page
         *
         * Parameters:
         * - options: the options to use to create the ID
         * - num: the number of the footnote
         **********************************************************************/
        return options.destinationIdPrefix + num;
    };

    $.simpleFootnotes.getSrcId = function (options, num) {
        /***********************************************************************
         * Return ID for the footnote in its inline position
         *
         * Parameters:
         * - options: the options to use to create the ID
         * - num: the number of the footnote
         **********************************************************************/
        return options.sourceIdPrefix + num;
    };
}(jQuery));
