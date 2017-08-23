import { AskmethatRating, AskmethatRatingSteps } from "askmethat-rating";

const options = {
    backgroundColor: "#e5e500",
    hoverColor: "#ffff66",
    fontClass: "fa fa-star",
    minRating: 1,
    maxRating: 5,
    readonly: false,
    step: AskmethatRatingSteps["OnePerOneStep"],
    inputName: "AskmethatRating"
};

const div = document.createElement("div");
const amcRating = new AskmethatRating(div, 2 , options);

options.readonly = true;
amcRating.defaultOptions = options;
