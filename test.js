var Crawler = require("crawler");
var url = require('url');

var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, result, $) {
        // $ is Cheerio by default
        //a lean implementation of core jQuery designed specifically for the server
        console.log($)
    }
});

// Queue just one URL, with default callback
c.queue('http://v.youku.com/v_show/id_XMTI2OTk5MjE5Ng==.html?from=s1.8-1-1.2');
