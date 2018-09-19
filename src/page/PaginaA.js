import React from 'react';
import {View,Text, Button,Alert} from 'react-native';
import SideMenu  from '../components/Menu/SideMenu';

const PaginaA = (props)=>
{
 return(

 <SideMenu navigation={props.navigation}>
 <View style={{margin:30}}>
     <Text>Pagina A</Text>
     <Button title="Ir para B" onPress={()=>{props.navigation.navigate('PaginaBPage');}}/>
 </View>
 </SideMenu>
 
 
 )   
};
export default PaginaA;