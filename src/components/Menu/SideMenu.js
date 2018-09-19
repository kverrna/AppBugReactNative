import React from 'react';
import Drawer from 'react-native-drawer';
import { View, Text,Alert } from 'react-native';
import {
  Header, Left, Body, Right, Button, Icon, Title,
} from 'native-base';
import Menulateral from './MenuLateral';

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nada: '',
    };
  }

  renderMenus() {
    return (<Menulateral navigation={this.props.navigation} drawer={this._drawer} />);
  }
 navegacao()
 {
  this.props.navigation.navigate('PaginaBPage');
 }
  render() {
    const closeDrawer = () => {
      this._drawer.close();
    };
    const openDrawer = () => {
      this._drawer.open();
    };
    return (
      <Drawer
        ref={ref => this._drawer = ref}
        type="overlay"
        openDrawerOffset={0.2}
        panCloseMask={0.2}
        tapToClose
        styles={{ shadowColor: '#000000', shadowOpacity: 0.8, shadowRadius: 3 }}
        content={this.renderMenus()}
      >
        <Header>
          <Left>
            <Button transparent onPress={() => openDrawer()}>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>App Bug</Title>
          </Body>
          <Right >
          <Button transparent onPress={() =>this.navegacao()}>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <View style={{ flex: 1 }}>
          {this.props.children}
        </View>
      </Drawer>

    );
  }
}
