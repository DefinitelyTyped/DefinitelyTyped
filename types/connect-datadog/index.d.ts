import express = require("express");
import hotShots = require("hot-shots");

export = Factory;

declare function Factory(options?: Factory.Options): express.RequestHandler;

declare namespace Factory {
    interface Options {
        stat?: string | undefined;
        tags?: string[] | undefined;
        path?: boolean | undefined;
        base_url?: boolean | undefined;
        method?: boolean | undefined;
        protocol?: boolean | undefined;
        response_code?: boolean | undefined;
        dogstatsd?: hotShots.StatsD | undefined;
    }
}
