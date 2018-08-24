"use strict";
import { AppRegistry, StyleSheet, Text, Image, View } from "react-native";

import SettingsList from "react-native-settings-list";
import { Component } from "react";

class SettingsListExample extends Component {
    render() {
        return (
            <View style={{ backgroundColor: "#f6f6f6", flex: 1 }}>
                <View
                    style={{
                        borderBottomWidth: 1,
                        backgroundColor: "#263238",
                        borderColor: "#c8c7cc"
                    }}
                >
                    <Text
                        style={{
                            color: "white",
                            marginTop: 15,
                            marginBottom: 15,
                            marginLeft: 15,
                            fontWeight: "bold",
                            fontSize: 20
                        }}
                    >
                        Settings
                    </Text>
                </View>
                <View style={{ backgroundColor: "#f6f6f6", flex: 1 }}>
                    <SettingsList borderColor="#d6d5d9" defaultItemSize={50}>
                        <SettingsList.Item
                            hasNavArrow={false}
                            title="Wireless & networks"
                            titleStyle={{
                                color: "#009688",
                                marginBottom: 10,
                                fontWeight: "500"
                            }}
                            itemWidth={50}
                            borderHide={"Both"}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 22,
                                            width: 22
                                        }}
                                        source={require("./images/data.png")}
                                    />
                                </View>
                            }
                            hasNavArrow={false}
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            title="Data usage"
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 4,
                                            width: 18
                                        }}
                                        source={require("./images/more.png")}
                                    />
                                </View>
                            }
                            title="More"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Header headerStyle={{ marginTop: -5 }} />
                        <SettingsList.Item
                            hasNavArrow={false}
                            title="Device"
                            titleStyle={{
                                color: "#009688",
                                marginBottom: 10,
                                fontWeight: "bold"
                            }}
                            itemWidth={70}
                            borderHide={"Both"}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 22,
                                            width: 22
                                        }}
                                        source={require("./images/display2.png")}
                                    />
                                </View>
                            }
                            title="Display"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 20,
                                            width: 18
                                        }}
                                        source={require("./images/sound.png")}
                                    />
                                </View>
                            }
                            title="Sound & notification"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 22,
                                            width: 14
                                        }}
                                        source={require("./images/apps.png")}
                                    />
                                </View>
                            }
                            title="Apps"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 14,
                                            width: 20
                                        }}
                                        source={require("./images/storage.png")}
                                    />
                                </View>
                            }
                            title="Storage & USB"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 22,
                                            width: 14
                                        }}
                                        source={require("./images/battery.png")}
                                    />
                                </View>
                            }
                            title="Battery"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Item
                            icon={
                                <View style={styles.imageStyle}>
                                    <Image
                                        style={{
                                            alignSelf: "center",
                                            height: 18,
                                            width: 20
                                        }}
                                        source={require("./images/memory.png")}
                                    />
                                </View>
                            }
                            title="Memory"
                            itemWidth={70}
                            titleStyle={{ color: "black", fontSize: 16 }}
                            hasNavArrow={false}
                        />
                        <SettingsList.Header headerStyle={{ marginTop: -5 }} />
                    </SettingsList>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        marginLeft: 15,
        marginRight: 20,
        alignSelf: "center",
        width: 20,
        height: 24,
        justifyContent: "center"
    }
});

AppRegistry.registerComponent("SettingsListExample", () => SettingsListExample);
