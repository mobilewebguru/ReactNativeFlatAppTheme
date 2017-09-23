// @flow
import React, { Component } from "react";
import { Platform, Dimensions, StatusBar, View } from "react-native";
import { Container, Content, Text, Button, Icon } from "native-base";
import Carousel from "react-native-carousel-view";

import styles from "./styles";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
class Walkthrough extends Component {
  render() {
    return (
      <Container>
        <StatusBar barStyle="light-content" />
        <Content>
          <Carousel
            width={deviceWidth}
            height={deviceHeight}
            loop={false}
            indicatorAtBottom
            indicatorOffset={deviceHeight / 15}
            indicatorSize={Platform.OS === "android" ? 15 : 10}
            indicatorColor="#FFF"
            animate={false}
          >
            <View style={styles.slides}>
              <Text
                style={
                  Platform.OS === "android"
                    ? styles.apaginationText
                    : styles.iospaginationText
                }
              >
                1 of 3
              </Text>
              <Icon name="ios-paper-outline" style={styles.imageIcons} />
              <Text
                numberOfLines={2}
                style={
                  Platform.OS === "android" ? styles.aText : styles.iosText
                }
              >
                Explore the latest news from your mobile device
              </Text>
              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("Drawer")}
                style={styles.Button}
              >
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Skip To App
                </Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Text
                style={
                  Platform.OS === "android"
                    ? styles.apaginationText
                    : styles.iospaginationText
                }
              >
                2 of 3
              </Text>
              <Icon
                name="ios-information-circle-outline"
                style={styles.imageIcons}
              />
              <Text
                numberOfLines={2}
                style={
                  Platform.OS === "android" ? styles.aText : styles.iosText
                }
              >
                Get News Feed of variuos domains at one place
              </Text>
              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("Drawer")}
                style={styles.Button}
              >
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Skip To App
                </Text>
              </Button>
            </View>

            <View style={styles.slides}>
              <Text
                style={
                  Platform.OS === "android"
                    ? styles.apaginationText
                    : styles.iospaginationText
                }
              >
                3 of 3
              </Text>
              <Icon name="ios-volume-up-outline" style={styles.imageIcons} />
              <Text
                numberOfLines={2}
                style={
                  Platform.OS === "android" ? styles.aText : styles.iosText
                }
              >
                Get going with the React Native Flat App Theme
              </Text>
              <Button
                transparent
                rounded
                onPress={() => this.props.navigation.navigate("Drawer")}
                style={styles.Button}
              >
                <Text style={{ color: "#FFF", fontWeight: "600" }}>
                  Continue To App
                </Text>
              </Button>
            </View>
          </Carousel>
        </Content>
      </Container>
    );
  }
}

export default Walkthrough;
