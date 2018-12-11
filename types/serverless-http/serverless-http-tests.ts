import serverlessHttp from "serverless-http";
import * as express from "express";
import * as koa from "koa";
import * as connect from "connect";

// express application
serverlessHttp(express());

// Koa application
serverlessHttp(new koa());

// Connect application
serverlessHttp(connect());
