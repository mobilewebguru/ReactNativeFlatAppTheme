// @flow
import React, { Component } from "react";
import { Image } from "react-native";

import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Item,
  Input,
  Left,
  Right,
  Body,
  View
} from "native-base";
import styles from "./styles";

const headerLogo = require("../../../assets/header-logo.png");
const primary = require("../../theme/variables/commonColor").brandPrimary;
type Props = {
  navigation: () => void
};
class Feedback extends Component {
  state: {
    offset: {
      x: 0,
      y: 0
    }
  };
  props: Props;
  constructor(props: Props) {
    super(props);
    this.state = {
      offset: {
        x: 0,
        y: 0
      }
    };
  }

  render() {
    const navigation = this.props.navigation;
    return (
      <Container style={{ backgroundColor: "#FFF" }}>
        <Header hasTabs>
          <Left>
            <Button
              transparent
              onPress={() => navigation.navigate("DrawerOpen")}
            >
              <Icon active name="menu" />
            </Button>
          </Left>
          <Body>
            <Image source={headerLogo} style={styles.imageHeader} />
          </Body>
          <Right />
        </Header>
        <Content
          showsVerticalScrollIndicator={false}
          contentOffset={this.state.offset}
          scrollEnabled={false}
        >
          <View style={styles.bg}>
            <View style={styles.contentIconsContainer}>
              <Button transparent style={styles.roundedButton}>
                <Icon
                  name="ios-call-outline"
                  style={{ fontSize: 30, width: 30, color: "#FFF" }}
                />
              </Button>
              <Button transparent style={styles.roundedCustomButton}>
                <Icon
                  name="ios-mail-outline"
                  style={{
                    fontSize: 28,
                    color: primary,
                    width: 22,
                    marginLeft: 5
                  }}
                />
              </Button>
              <Button transparent style={styles.roundedButton}>
                <Icon
                  name="ios-pin-outline"
                  style={{ fontSize: 28, width: 30, color: "#FFF" }}
                />
              </Button>
            </View>
            <View style={styles.feedbackHeaderContainer}>
              <Text style={styles.feedbackHeader}>SEND FEEDBACK</Text>
              <Text note style={styles.feedbackHead}>
                Your feedback is very important to us.
              </Text>
            </View>
          </View>

          <View style={styles.feedbackContainer}>
            <Item rounded style={styles.inputGrp}>
              <Icon
                name="ios-mail-outline"
                style={{ color: "rgba(0,0,0,0.5)", marginTop: 3 }}
              />
              <Input
                placeholder="Email"
                placeholderTextColor="rgba(0,0,0,0.3)"
                style={styles.input}
              />
            </Item>

            <Item regular style={{ marginTop: 10 }}>
              <Input
                placeholder="Write something..."
                placeholderTextColor="rgba(0,0,0,0.5)"
                style={styles.inputBox}
                multiline
                returnKeyType="default"
              />
            </Item>
            <Button
              style={{ alignSelf: "flex-end", marginTop: 10, height: 40 }}
            >
              <Text>Send</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}

export default Feedback;
