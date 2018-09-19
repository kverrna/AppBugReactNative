import React from 'react';

import {
    createStackNavigator, createBottomTabNavigator
  } from 'react-navigation';
  import Icon from 'react-native-vector-icons/Feather';

  import PaginaAPage from '../page/PaginaA';
  import PaginaBPage from '../page/PaginaB';
  import MenuLateralComponent from '../components/Menu/MenuLateral';
  import SideMenuComponent from '../components/Menu/SideMenu';

  const Stack = createStackNavigator({
    PaginaAPage,
    PaginaBPage,
    MenuLateralComponent,
    SideMenuComponent,
  },
  {
    navigationOptions:
    { title: 'App' },
    headerMode: 'none',
    initialRouteName: 'PaginaAPage',
  });

  const ToolBar = createBottomTabNavigator({
    PaginaAPage,
    PaginaBPage,
    MenuLateralComponent,
    SideMenuComponent,
  },
  {
    navigationOptions: ({ navigation }) => ({

      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
  
        if (routeName === 'PaginaAPage') {
          iconName = 'radio';
        }
        if (routeName === 'PaginaBPage') {
          iconName = 'settings';
        }
        return <Icon name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  });
  export default ToolBar;