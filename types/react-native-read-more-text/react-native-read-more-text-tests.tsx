// Tests taken from Usage at https://github.com/expo/react-native-read-more-text#usage
import * as React from "react";
import { Text, View } from "react-native";

import ReadMore from "react-native-read-more-text";

interface Props {
    text: string;
}

declare const styles: any;
declare const Colors: any;

export class DescriptionCard extends React.Component<Props> {
    render() {
        const { text } = this.props;

        return (
            <View>
                <View style={styles.cardLabel}>
                    <Text style={styles.cardLabelText}>Description</Text>
                </View>

                <View style={styles.card}>
                    <View style={styles.cardBody}>
                        <ReadMore
                            numberOfLines={3}
                            renderTruncatedFooter={this._renderTruncatedFooter}
                            renderRevealedFooter={this._renderRevealedFooter}
                            onReady={this._handleTextReady}
                        >
                            <Text style={styles.cardText}>{text}</Text>
                        </ReadMore>
                    </View>
                </View>
            </View>
        );
    }

    _renderTruncatedFooter = (handlePress: () => void) => {
        return (
            <Text
                style={{ color: Colors.tintColor, marginTop: 5 }}
                onPress={handlePress}
            >
                Read more
            </Text>
        );
    }

    _renderRevealedFooter = (handlePress: () => void) => {
        return (
            <Text
                style={{ color: Colors.tintColor, marginTop: 5 }}
                onPress={handlePress}
            >
                Show less
            </Text>
        );
    }

    _handleTextReady = () => {
        // ...
    }
}
