// @flow
import React, { Component } from "react";
import {
  Image,
  TouchableOpacity,
  Platform,
  Slider,
  Dimensions,
  View as RNView
} from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Body,
  View
} from "native-base";
import { Grid, Col } from "react-native-easy-grid";

import Modal from "react-native-modalbox";
import Carousel from "react-native-carousel-view";

import styles from "./styles";

const deviceWidth = Dimensions.get("window").width;

type Props = {
  navigation: () => void
};
class Story extends Component {
  state = {
    animationType: "slideInDown",
    open: false,
    value: 0
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      animationType: "slideInDown",
      open: false,
      value: 0
    };
  }

  modalO() {
    this.setState({ open: true });
  }

  modalX() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Container>
        <Header
          style={[
            styles.headerStyle,
            this.state.open ? styles.headerModalStyle : styles.headerStyle
          ]}
        >
          <Body
            style={{ flexDirection: "row", justifyContent: "space-around" }}
          >
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon active name="arrow-back" style={styles.headerIcons} />
            </Button>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("Comments")}
            >
              <Icon name="chatboxes" style={styles.headerIcons} />
            </Button>
            <Button transparent onPress={() => this.modalO()}>
              <Text style={styles.headerTextIcon}>Aa</Text>
            </Button>
            <Button transparent>
              <Icon name="bookmarks" style={styles.headerIcons} />
            </Button>
            <Button transparent>
              <Icon name="download" style={styles.headerIcons} />
            </Button>
          </Body>
        </Header>

        <Content
          showsVerticalScrollIndicator={false}
          style={{ backgroundColor: "#fff" }}
        >
          <View style={{ flex: 1 }}>
            <View>
              <Image
                source={require("../../../assets/NewsIcons/5.jpg")}
                style={styles.newsPoster}
              />
            </View>
            <View style={{ backgroundColor: "#fff" }}>
              <View style={styles.newsContent}>
                <Grid style={{ paddingBottom: 20 }}>
                  <Col style={{ flexDirection: "row" }}>
                    <TouchableOpacity>
                      <Text style={styles.newsLink}>CDC</Text>
                    </TouchableOpacity>
                    <Icon name="ios-time-outline" style={styles.timeIcon} />
                    <Text style={styles.newsLink}>1h ago</Text>
                  </Col>
                  <Col>
                    <TouchableOpacity style={styles.newsTypeView}>
                      <Text style={styles.newsTypeText}>ENVIRONMENT</Text>
                    </TouchableOpacity>
                  </Col>
                </Grid>
                <Text style={styles.newsHeader}>
                  React Native Flat App Theme, a fascinating React Native
                  starter kit with flat UI design, Redux and NativeBase
                  components for your application.
                </Text>
              </View>

              <View style={{ padding: 20 }}>
                <View style={styles.newsCommentContainer}>
                  <Text style={styles.newsComment}>
                    It’s a responsive theme with clean and modern look highly
                    focussed on efficiency. The flat design enables resizing the
                    contents easily to fit various screen devices. Eye soothing
                    color makes the React Native Flat app theme simple yet eye
                    catchy and smooth running.
                  </Text>
                  <Text style={styles.newsComment}>- StrapMobile</Text>
                </View>
                <Text style={styles.newsHeader}>
                  The flat UI design adds an aesthetic touch to the native look
                  and feel of React Native apps.
                </Text>
                <View style={{ paddingBottom: 15 }}>
                  <Text style={styles.newsHeader}>
                    NativeBase is a free and open source framework that enables
                    developers to build high-quality mobile apps using React
                    Native iOS and Android apps with a fusion of ES6.
                  </Text>
                </View>
                <View style={{ paddingBottom: 20 }}>
                  <Text style={styles.newsHeader}>
                    NativeBase builds a layer on top of React Native that
                    provides you with basic set of components for mobile
                    application development. This helps you to build world-class
                    application experiences on native platforms.
                  </Text>
                </View>
              </View>

              <View style={styles.wrapper}>
                <Carousel
                  width={deviceWidth}
                  height={230}
                  indicatorAtBottom
                  indicatorSize={Platform.OS === "android" ? 15 : 10}
                  indicatorColor="#FFF"
                  indicatorOffset={10}
                  animate={false}
                >
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.newsPoster}
                      source={require("../../../assets/NewsIcons/1.jpg")}
                    />
                  </RNView>
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.newsPoster}
                      source={require("../../../assets/NewsIcons/3.jpg")}
                    />
                  </RNView>
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.newsPoster}
                      source={require("../../../assets/NewsIcons/4.jpg")}
                    />
                  </RNView>
                  <RNView style={styles.slide}>
                    <Image
                      style={styles.newsPoster}
                      source={require("../../../assets/NewsIcons/5.jpg")}
                    />
                  </RNView>
                </Carousel>
              </View>

              <View style={{ alignSelf: "center" }}>
                <Button
                  transparent
                  iconRight
                  onPress={() => this.props.navigation.goBack()}
                  textStyle={{ color: "#222", fontWeight: "700" }}
                >
                  <Text>NEXT STORY</Text>
                  <Icon name="ios-arrow-forward" style={styles.forwardBtn} />
                </Button>
              </View>
            </View>
          </View>
        </Content>

        <Modal
          position="top"
          entry="top"
          isOpen={this.state.open}
          onOpened={() => this.setState({ open: true })}
          onClosed={() => this.setState({ open: false })}
          backButtonClose
          style={styles.modal}
        >
          <View>
            <View style={styles.modalContentBox}>
              <Grid style={{ flex: 10, padding: 20 }}>
                <Col>
                  <Button transparent style={styles.dayButton}>
                    <Icon name="ios-sunny-outline" />
                  </Button>
                </Col>
                <Col>
                  <Button transparent style={styles.nightButton}>
                    <Icon name="ios-moon-outline" style={{ color: "#fff" }} />
                  </Button>
                </Col>
              </Grid>
            </View>
            <View style={styles.modalContentBox}>
              <Grid style={styles.modalContentGrid1}>
                <Col>
                  <Text style={styles.modalContentGridText}>
                    CHOOSE TYPESPACE
                  </Text>
                </Col>
                <Col>
                  <Button
                    transparent
                    iconRight
                    style={{ marginTop: -5, alignSelf: "center" }}
                  >
                    <Text style={{ color: "#FFF" }}>SANS SERIF</Text>
                    <Icon name="ios-arrow-forward" style={{ fontSize: 28 }} />
                  </Button>
                </Col>
              </Grid>
            </View>
            <View>
              <Grid style={styles.modalContentGrid2}>
                <Col>
                  <Text style={styles.modalSmallText}>A</Text>
                </Col>
                <Col style={{ alignSelf: "flex-end" }}>
                  <Text style={styles.modalLargeText}>A</Text>
                </Col>
              </Grid>
              <Slider
                {...this.props}
                minimumTrackTintColor="#fff"
                thumbTintColor="#fff"
                onValueChange={value => this.setState({ value })}
              />
            </View>
          </View>
        </Modal>
      </Container>
    );
  }
}

export default Story;
