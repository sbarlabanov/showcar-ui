//noinspection JSUnresolvedVariable,UnterminatedStatementJS
module.exports = function(){
    @@SCRIPT_ERROR_COLLECTOR
    
    if (window.location.hash.indexOf('systemfonts') < 0) {
    @@SCRIPT_FONT_LOADER
    } else {
        document.write('<style>body,[data-showcar-ui]{font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, "Segoe UI Symbol" !important; }</style>');
    }
    
    @@POLYFILL_DOM4
    @@POLYFILL_DOCUMENT_REGISTER_ELEMENT
    @@POLYFILL_ARRAY
    @@POLYFILL_STRING
    @@POLYFILL_OBJECT
    @@POLYFILL_PROMISE
    @@POLYFILL_FETCH
    @@POLYFILL_URL_SEARCH_PARAMS
    
    (function(w) {
        if(!w.__proto__){l('https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js')}
        if(!w.HTMLPictureElement){l('https://cdnjs.cloudflare.com/ajax/libs/picturefill/3.0.2/picturefill.min.js',1)}
        function l(url,a){document.write('<script '+(a&&'async')+' src="'+url+'"></'+'script>')}
    }(window))
}
