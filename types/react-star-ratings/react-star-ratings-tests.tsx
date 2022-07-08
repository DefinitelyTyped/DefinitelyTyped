import StarRatings = require('react-star-ratings');
import * as React from 'react';

// @ts-expect-error
const rateIsString = <StarRatings rating={"5"} />;

// @ts-expect-error
const colorIsNumber = <StarRatings starRatedColor={5} />;

const validExample = (
    <StarRatings
        rating={4}
        starRatedColor="blue"
        numberOfStars={5}
        name="rating"
        starDimension="14px"
        starSpacing="3px"
/>);
