import express from "express";
import Koa from "koa";
import { graphqlUploadExpress, graphqlUploadKoa } from "graphql-upload";

express()
  .use(graphqlUploadExpress({ maxFileSize: 10000000, maxFiles: 10 }))
  .listen(3000);

new Koa()
  .use(graphqlUploadKoa({ maxFileSize: 10000000, maxFiles: 10 }))
  .listen(3000);
