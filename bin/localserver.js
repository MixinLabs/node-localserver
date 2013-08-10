#!/usr/bin/env node

(function () {
    "use strict";
    
    var program     = require('commander'),
        _           = require('underscore'),
        localserver = require('../lib/server'),
        defaults    = localserver.defaults;
    
    // Mixin underscore.string
    _.mixin(require('underscore.string').exports());
    
    program
        .version('0.1.0')
        .option('-p, --port [port]', _.sprintf('Start static server on specified port, defaults to "%d"', defaults.port), defaults.port)
        .option('--index [index]', _.sprintf('Specify index file, defaults to "%s"', defaults.index), defaults.index)
        .parse(process.argv);
        
    localserver.startServer({
        port: program.port,
        index: program.index
    });
    
}());
