/**!
 * Pagedown-i18n
 * Repo: github.com/bfontaine/pagedown-i18n
 * License: MIT
 *
 * Language: The Language
 * Author: Your Name
 **/
(function() {

    var _ME = Markdown.Editor;

    Markdown.Editor = function (markdownConverter, idPostfix, options) {

        var strings, s;

        options = options || {};
        strings = options.strings || {};

        options.strings = {

            bold: "Strong <strong> Ctrl+B",
            boldexample: "strong text",

            italic: "Emphasis <em> Ctrl+I",
            italicexample: "emphasized text",

            link: "Hyperlink <a> Ctrl+L",
            linkdescription: "enter link description here",
            linkdialog: "<p><b>Insert Hyperlink</b></p><p>http://example.com/ \"optional title\"</p>",

            quote: "Blockquote <blockquote> Ctrl+Q",
            quoteexample: "Blockquote",

            code: "Code Sample <pre><code> Ctrl+K",
            codeexample: "enter code here",

            image: "Image <img> Ctrl+G",
            imagedescription: "enter image description here",
            imagedialog: "<p><b>Insert Image</b></p><p>http://example.com/images/diagram.jpg \"optional title\"<br><br>Need <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>free image hosting?</a></p>",

            olist: "Numbered List <ol> Ctrl+O",
            ulist: "Bulleted List <ul> Ctrl+U",
            litem: "List item",

            heading: "Heading <h1>/<h2> Ctrl+H",
            headingexample: "Heading",

            hr: "Horizontal Rule <hr> Ctrl+R",

            undo: "Undo - Ctrl+Z",
            redo: "Redo - Ctrl+Y",
            redomac: "Redo - Ctrl+Shift+Z",

            help: "Markdown Editing Help"

        };

        for ( s in strings ) {
            if ( strings.hasOwnProperty( s ) ) {
                
                options.strings[ s ] = strings[ s ];

            }
        }

        return _ME.call( this, markdownConverter, idPostfix, options );

    };

})();
