import StarRatings from './index';
import * as React from 'react';


// $ExpectError
const rateIsString = <StarRatings rating={"5"} />;

// $ExpectError
const colorIsNumber = <StarRatings starRatedColor={5} />;

const validExample = (<StarRatings
    rating={4}
    starRatedColor="blue"
    numberOfStars={5}
    name="rating"
    starDimension="14px"
    starSpacing="3px"
/>)
