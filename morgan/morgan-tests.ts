/**
 * Created by staticfunction on 8/3/14.
 */

import morgan = require('morgan');
import express = require('express');

// a pre-defined name
morgan('combined')
morgan('common')
morgan('short')
morgan('tiny')

// a format string
morgan(':remote-addr :method :url')

morgan('combined', {
    buffer: true,
    immediate: true,
    skip: function (req, res) { return res.statusCode < 400 },
    stream: {
    	write: (str: string) => {
        	console.log(str);
    	}
    }
});


// test interface definition for morgan

// a named custom format defined as string (example: extend 'tiny' format with user-agent token)
morgan.format('tiny-extended', ':method :url :status :res[content-length] - :response-time ms :user-agent');


// a named custom format defined using the Function signature (example: extend 'dev' format with user-agent token)

// extend morgan.FormatFn interface with memoizer property to avoid unnecessary re-compiling
// of status-code range driven colorized format functions
interface IFormatFnIndexer {
  [memoizerName: string]: morgan.FormatFn;
}

interface IExtendedFormatFn extends morgan.FormatFn {
  memoizer?: IFormatFnIndexer;
}


var developmentExtendedFormatLine : IExtendedFormatFn = function(tokens, req, res):string {
    
  // get the status code if response written
  var status = res.statusCode
    ? res.statusCode
    : undefined;

  // get status color
  var color = status >= 500 ? 31 // red
    : status >= 400 ? 33 // yellow
    : status >= 300 ? 36 // cyan
    : status >= 200 ? 32 // green
    : 0; // no color

  // get colored format function, if previously memoized, otherwise undefined
  var fn: morgan.FormatFn = developmentExtendedFormatLine.memoizer[color];

  if (!fn) {
    // compile
    fn = developmentExtendedFormatLine.memoizer[color] = morgan.compile('\x1b[0m:method :url \x1b['
      + color + 'm:status \x1b[0m:response-time ms - :res[content-length]\x1b[0m :user-agent');
  }

  return fn(tokens, req, res);
};

developmentExtendedFormatLine.memoizer = {};


morgan.format('dev-extended', developmentExtendedFormatLine);
