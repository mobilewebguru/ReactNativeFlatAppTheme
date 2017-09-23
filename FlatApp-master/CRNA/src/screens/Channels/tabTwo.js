// @flow
import React, { Component } from "react";
import { Image, TouchableOpacity, Platform } from "react-native";

import { Content, Text, View } from "native-base";
import { Grid, Col, Row } from "react-native-easy-grid";

import styles from "./styles";

class TabTwo extends Component {
  render() {
    const navigation = this.props.navigation;
    return (
      <Content showsVerticalScrollIndicator={false}>
        <View>
          <Grid>
            <Row>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/10.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      ANIMATION
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/13.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      EDUCATION
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/6.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      FINANCES
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/1.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      ENVIRONMENT
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/8.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      AUTO
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/7.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      TECHNOLOGY
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/11.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      SPORTS
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/12.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      ART
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/9.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      FASHION
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
              <Col>
                <TouchableOpacity
                  onPress={() => navigation.navigate("Channel")}
                >
                  <Image
                    source={require("../../../assets/NewsIcons/2.jpg")}
                    style={styles.channelImg}
                  >
                    <Text
                      style={
                        Platform.OS === "android"
                          ? styles.achannelImgText
                          : styles.ioschannelImgText
                      }
                    >
                      SCIENCE
                    </Text>
                  </Image>
                </TouchableOpacity>
              </Col>
            </Row>
          </Grid>
        </View>
      </Content>
    );
  }
}

export default TabTwo;
