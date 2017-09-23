// @flow
import React, { Component } from "react";
import { ProgressViewIOS } from "react-native";
import color from "color";

export default class ProgressBarNB extends Component {
  render() {
    return (
      <ProgressViewIOS
        {...this.props}
        progress={this.props.progress ? this.props.progress / 100 : 0.5}
        progressTintColor={this.props.color ? this.props.color : "#FFF"}
        trackTintColor={color(this.props.color).lighten(1).hex()}
      />
    );
  }
}
