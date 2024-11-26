import * as React from "react";
import { Text, View } from "react-native";
import { SimpleAnimation } from "react-native-simple-animations";

// Test basic usage
class TestComponent extends React.Component {
    render() {
        return (
            <SimpleAnimation
                aim="in"
                duration={1000}
                movementType="slide"
                direction="up"
            >
                <Text>Test content</Text>
            </SimpleAnimation>
        );
    }
}

// Test avec toutes les props
class CompleteTest extends React.Component {
    render() {
        return (
            <SimpleAnimation
                aim="out"
                animate={true}
                animateOnUpdate={false}
                delay={200}
                direction="down"
                distance={100}
                duration={500}
                fade={true}
                friction={5}
                movementType="spring"
                staticType="bounce"
                tension={100}
                useNativeDriver={true}
                style={{ marginTop: 10 }}
            >
                <View>
                    <Text>Complete test</Text>
                </View>
            </SimpleAnimation>
        );
    }
}
