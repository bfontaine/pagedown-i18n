/**!
 * Pagedown-i18n
 * Repo: github.com/bfontaine/pagedown-i18n
 * License: MIT
 *
 * Language: Myrte
 * Author: Julien Sagot
 **/
(function() {

    var _ME = Markdown.Editor;

    Markdown.Editor = function (markdownConverter, idPostfix, options) {

        var strings, s;

        options = options || {};
        strings = options.strings || {};

        options.strings = {

            bold: "Gnorts <strong> Ctrl+B",
            boldexample: "txet gnorts",

            italic: "Sisahpme <em> Ctrl+I",
            italicexample: "txet dezisahpme",

            link: "Knilrepyh <a> Ctrl+L",
            linkdescription: "ereh knil retne",
            linkdialog: "<p><b>Knilrepyh tresni</b></p><p>http://example.com/ \"eltit lanoitpo\"</p>",

            quote: "Etouqkcolb <blockquote> Ctrl+Q",
            quoteexample: "Etouqkcolb",

            code: "Elpmas edoc <pre><code> Ctrl+K",
            codeexample: "ereh edoc retne",

            image: "Egami <img> Ctrl+G",
            imagedescription: "ereh noitpircsed egami retne",
            imagedialog: "<p><b>Egami tresni</b></p><p>http://example.com/images/diagram.jpg \"eltit lanoitpo\"<br><br>Deen <a href='http://www.google.com/search?q=free+image+hosting' target='_blank'>?gnitsoh egami eerf</a></p>",

            olist: "Tsil Derebmun <ol> Ctrl+O",
            ulist: "Tsil DetelluB <ul> Ctrl+U",
            litem: "Meti Tsil",

            heading: "Gnidaeh <h1>/<h2> Ctrl+H",
            headingexample: "Gnidaeh",

            hr: "Elur latnoziroh <hr> Ctrl+R",

            undo: "Odnu - Ctrl+Z",
            redo: "Oder - Ctrl+Y",
            redomac: "Oder - Ctrl+Shift+Z",

            help: "Pleh gnitide nwodkram"

        };

        for ( s in strings ) {
            if ( strings.hasOwnProperty( s ) ) {
                
                options.strings[ s ] = strings[ s ];

            }
        }

        return _ME.call( this, markdownConverter, idPostfix, options );

    };

})();
