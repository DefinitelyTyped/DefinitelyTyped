import * as React from 'react';
import StarRating from 'react-native-star-rating';

interface State {
    starCount: number;
}

class GeneralStarExample extends React.Component<{}, State> {
    state = {
        starCount: 3.5
    };

    onStarRatingPress = (rating: number) => {
        this.setState({
            starCount: rating
        });
    }

    render() {
        return (
            <StarRating
                disabled={false}
                maxStars={5}
                animation={'tada'}
                rating={this.state.starCount}
                selectedStar={this.onStarRatingPress}
            />
        );
    }
}

export default GeneralStarExample;
