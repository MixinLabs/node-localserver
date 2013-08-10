#!/usr/bin/env node

(function () {
    "use strict";
    
    var program     = require('commander');
    var localserver = require('../lib/server');
    
    program
        .version('0.1.0')
        .option('-p, --port [port]', 'Start static server on specified port, defaults to "9000"', 9000)
        .option('--index [index]', 'Specify index file, defaults to "index.html"', 'index.html')
        .parse(process.argv);
        
    localserver.startServer({
        port: program.port,
        index: program.index
    });
    
}());
