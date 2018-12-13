import serverlessHttp from "serverless-http";
import * as express from "express";
import * as connect from "connect";

// express application
serverlessHttp(express());

// Connect application
serverlessHttp(connect());
