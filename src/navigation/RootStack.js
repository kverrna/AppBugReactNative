import React from 'react';

import {
    createStackNavigator, createBottomTabNavigator
  } from 'react-navigation';
  import Icon from 'react-native-vector-icons/Feather';

  import PaginaAPage from '../page/PaginaA';
  import PaginaBPage from '../page/PaginaB';
  
  const Stack = createStackNavigator({
    PaginaAPage,
    PaginaBPage
  },
  {
    navigationOptions:
    { title: 'App' },
    headerMode: 'none',
    initialRouteName: 'PaginaAPage',
  });

  const ToolBar = createBottomTabNavigator({
    PaginaAPage,
    PaginaBPage
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