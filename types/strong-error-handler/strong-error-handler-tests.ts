import express = require('express');
import errorHandler = require('strong-error-handler');

errorHandler({
    debug: false,
    log: false,
    safeFields: ['test'],
    defaultType: 'json',
    negotiateContentType: true,
});
