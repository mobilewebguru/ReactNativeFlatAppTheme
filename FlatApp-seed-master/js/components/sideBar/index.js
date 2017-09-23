
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image } from 'react-native';
import { Container, Content, Text, Icon, ListItem } from 'native-base';

import { Actions } from 'react-native-router-flux';
import { closeDrawer } from '../../actions/drawer';
import styles from './style';

const singUp = require('../../../images/BG-signUp.png');

class SideBar extends Component {


  render() {
    return (
      <Container>
        <Image source={singUp} style={styles.background} >
          <Content style={styles.drawerContent}>
              <ListItem
                button iconLeft
                onPress={() => { Actions.home(); this.props.closeDrawer(); }}
                style={styles.links}
              >
                <Icon name="grid" />
                <Text style={styles.linkText} >HOME</Text>
              </ListItem>

              <ListItem
                button iconLeft
                onPress={() => { Actions.blankPage(); this.props.closeDrawer(); }}
                style={styles.links}
              >
                <Icon name="keypad" />
                <Text style={styles.linkText}>BLANK PAGE</Text>
              </ListItem>
          </Content>
        </Image>
      </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    closeDrawer: () => dispatch(closeDrawer()),
  };
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, bindAction)(SideBar);
