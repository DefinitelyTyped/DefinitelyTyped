import AipImageCensor = require("./AipContentCensor");
import AipImageProcess = require("./AipImageProcess");
import AipImageSearch = require("./AipImageSearch");
import AipImageClassify = require("./AipImageClassify");
import AipFace = require("./AipFace");
import AipOcr = require("./AipOcr");
import AipNlp = require("./AipNlp");
import AipKg = require("./AipKg");
import AipSpeech = require("./AipSpeech");
import HttpClient = require("./http/httpClient");


export {
  AipImageProcess as imageprocess,
  AipImageSearch as imageSearch,
  AipImageClassify as imageClassify,
  AipImageCensor as contentCensor,
  AipFace as face,
  AipOcr as ocr,
  AipNlp as nlp,
  AipKg as kg,
  AipSpeech as speech,
  HttpClient
};
