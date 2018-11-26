import * as React from "react";
import Rating from "react-rating";

const SVGIcon = (props: any) => (
    <svg className={props.className} pointerEvents="none">
        <use xlinkHref={props.href} />
    </svg>
);

class Test extends React.Component {
    render() {
        return (
            <Rating
                start={1}
                stop={6}
                step={1}
                fractions={1}
                initialRating={2}
                placeholderRating={2}
                readonly={false}
                quiet={false}
                direction={"ltr"}
                emptySymbol={
                    <SVGIcon href="#icon-star-empty" className="icon" />
                }
                fullSymbol={<SVGIcon href="#icon-star-full" className="icon" />}
                placeholderSymbol={
                    <SVGIcon href="#icon-star-full" className="icon" />
                }
                onClick={this.onClick}
                onChange={this.onChange}
                onHover={this.onHover}
            />
        );
    }

    onClick = () => {};

    onChange = () => {};

    onHover = () => {};
}

export default Test;
