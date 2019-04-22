import StarRatingComponent from "react-star-rating-component";
import * as React from "react";

const interactionCallback = (next: number, prev: number, name: string) => ({
  next,
  prev,
  name
});

// $ExpectError
const missingRequired = <StarRatingComponent />;

// $ExpectError
const valueIsNumber = <StarRatingComponent name="" value={"5"} />;

const validExample = <StarRatingComponent name="test" value={3} />;

const fullExample = (
  <StarRatingComponent
    name="app6"
    starColor="#F3D954"
    emptyStarColor="#F3D954"
    starCount={4}
    value={3.5}
    onStarClick={interactionCallback}
    onStarHover={interactionCallback}
    onStarHoverOut={interactionCallback}
    editing={false}
    renderStarIcon={(index: number, value: number, _: string) => {
      return (
        <span>
          <i className={index <= value ? "fas fa-star" : "far fa-star"} />
        </span>
      );
    }}
    renderStarIconHalf={(_: number, __: number, ___: string) => {
      return (
        <span>
          <span style={{ position: "absolute" }}>
            <i className="far fa-star" />
          </span>
          <span>
            <i className="fas fa-star-half" />
          </span>
        </span>
      );
    }}
  />
);
