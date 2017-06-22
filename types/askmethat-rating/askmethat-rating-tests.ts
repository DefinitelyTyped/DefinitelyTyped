import { AskmethatRating, AskmethatRatingSteps } from "askmethat-rating";

let options = {
    backgroundColor: "#e5e500",
    hoverColor: "#ffff66",
    fontClass: "fa fa-star",
    minRating: 1,
    maxRating: 5,
    readonly: false,
    step: AskmethatRatingSteps["OnePerOneStep"],
    inputName: "AskmethatRating"
};

let div = document.createElement("div");
let amcRating = new AskmethatRating(div, 2 , options);
