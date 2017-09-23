// @flow
import React, { Component } from "react";
import { Image, TouchableOpacity, Platform } from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Left,
  Right,
  Body,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");
const primary = require("../../theme/variables/commonColor").brandPrimary;

class Channel extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "#fff" }}>
        <Header>
          <Left>
            <Button transparent onPress={() => navigation.goBack()}>
              <Icon active name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right />
        </Header>

        <Content showsVerticalScrollIndicator={false}>
          <View>
            <Image
              source={require("../../../assets/NewsIcons/2.jpg")}
              style={styles.newsPoster}
            >
              <View>
                <Text
                  style={
                    Platform.OS === "android"
                      ? styles.achannelHeader
                      : styles.ioschannelHeader
                  }
                >
                  SCIENCE CHANNEL
                </Text>
                <Button
                  rounded
                  style={styles.followBtn}
                  onPress={() => this.props.navigation.navigate("Profile")}
                >
                  <Text
                    style={
                      Platform.OS === "android"
                        ? {
                            color: primary,
                            fontSize: 13,
                            fontWeight: "900",
                            textAlign: "center"
                          }
                        : { color: primary, fontSize: 13, fontWeight: "900" }
                    }
                  >
                    Following
                  </Text>
                </Button>
                <View style={{ padding: 0 }}>
                  <Text style={styles.noOfFollowers}>234K Followers</Text>
                </View>
              </View>
            </Image>
          </View>

          <View foregroundColor={"white"} style={{ backgroundColor: "#fff" }}>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  Earth formed around 4.54 billion years ago by accretion from
                  the solar nebula.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>CNN</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>May 24, 2016</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  {" "}A "giant impact" collision is thought to have been
                  responsible for forming the Moon.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>SPACE.com</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>Apr 17, 2016</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  Living forms derived from photosynthesis appeared between 3.2
                  and 2.4 billion years ago.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>CNN</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>Feb 03, 2016</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  Life remained mostly small and microscopic until about 580
                  million years ago.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>SKY.com</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>Dec 17, 2015</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  The history of Earth is divided into four great eons.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>SPACE.com</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>Apr 17, 2016</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  The Earth and Moon have the same oxygen isotopic signature.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>CNN</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>Feb 03, 2016</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ flexDirection: "row" }}
              onPress={() => navigation.navigate("Story")}
            >
              <View style={styles.newsContentWrap}>
                <Text numberOfLines={2} style={styles.newsHeader}>
                  Ice might have covered the oceans 3 billion years ago.
                </Text>
                <Grid style={styles.newsContent}>
                  <Col style={{ flexDirection: "row" }}>
                    <Text style={styles.newsLink}>SKY.com</Text>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>Dec 17, 2015</Text>
                  </Col>
                </Grid>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Channel;
