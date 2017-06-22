import { AskmethatRating, AskmethatRatingSteps } from "askmethat-rating";

var options = {
    backgroundColor: "#e5e500",
    hoverColor: "#ffff66",
    fontClass: "fa fa-star",
    minRating: 1,
    maxRating: 5,
    readonly: false,
    step: AskmethatRatingSteps["OnePerOneStep"],
    inputName: "AskmethatRating"
};

var div = document.createElement("div");
var amcRating = new AskmethatRating(div, 2, options);             