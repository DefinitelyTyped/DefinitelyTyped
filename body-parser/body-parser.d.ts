// Type definitions for body-parser
// Project: http://expressjs.com
// Definition by: Santi Albo <https://github.com/santialbo/>, Jonathan Häberle <https://github.com/dreampulse/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../express/express.d.ts" />

declare module "body-parser" {
  import express = require('express');

  module e {

    // JSON Options
    interface JsonOptions {
      strict? : boolean;                             // only parse objects and arrays. (default: true)
      inflate? : boolean;                            // if deflated bodies will be inflated. (default: true)
      limit? : number;                               // maximum request body size. (default: <100kb>)
      reviver? : (k :any, v:any) => any              // passed to JSON.parse()
      type? : string;                                // request content-type to parse (default: json)
      verify? : (req : express.Request, res : express.Response, streamBuf : any, encoding : string) => void;   // function to verify body content
    }

    // Raw Options
    interface RawOptions {
      inflate? : boolean;   // if deflated bodies will be inflated. (default: true)
      limit? :number;       // maximum request body size. (default: <100kb>)
      type? : string;       // request content-type to parse (default: application/octet-stream)
      verify? : (req : express.Request, res : express.Response, streamBuf : any, encoding : string) => void;   // function to verify body content
    }

    // Text Options
    interface TextOptions {
      defaultCharset? : string;  // the default charset to parse as, if not specified in content-type. (default: utf-8)
      inflate? : boolean;        // if deflated bodies will be inflated. (default: true)
      limit? : number;           // maximum request body size. (default: <100kb>)
      type? : string;            // request content-type to parse (default: text/plain)
      verify? : (req : express.Request, res : express.Response, streamBuf : any, encoding : string) => void;   // function to verify body content
    }

    // UrlEncoded Options
    interface UrlEncodedOptions {
      extended? : boolean;  // parse extended syntax with the qs module. (default: true)
      inflate? : boolean;    // if deflated bodies will be inflated. (default: true)
      limit: number;        // maximum request body size. (default: <100kb>)
      type: string;         // request content-type to parse (default: urlencoded)
      verify? : (req : express.Request, res : express.Response, streamBuf : any, encoding : string) => void;   // function to verify body content
    }


    // Returns middleware that only parses json
    function json(options? : JsonOptions) : express.RequestHandler;

    // Returns middleware that parses all bodies as a Buffer
    function raw(options? : RawOptions) : express.RequestHandler;

    // Returns middleware that parses all bodies as a string
    function text(options? : TextOptions) : express.RequestHandler;

    // Returns middleware that only parses urlencoded bodies
    function urlencoded(options? : UrlEncodedOptions) : express.RequestHandler;
  }

  export = e;
}
