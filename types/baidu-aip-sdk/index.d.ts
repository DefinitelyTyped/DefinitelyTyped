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
    AipFace as face,
    AipImageCensor as contentCensor,
    AipImageClassify as imageClassify,
    AipImageProcess as imageprocess,
    AipImageSearch as imageSearch,
    AipKg as kg,
    AipNlp as nlp,
    AipOcr as ocr,
    AipSpeech as speech,
    HttpClient,
};
