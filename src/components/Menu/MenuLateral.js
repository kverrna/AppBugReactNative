import React from 'react';
import {
  View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';
import { Badge } from 'native-base';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  itemMenuContainer: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-between',
    marginLeft: 5,
    marginEnd: 5,
    borderBottomColor: 'gray',
    borderWidth: 0,
    alignItems: 'center',
    height: 50,
  },
  imgBackContainer:
  {
    backgroundColor: '#222',
    minHeight: 350,
    borderWidth: 4,
    borderBottomColor: 'black',
  },
  imgBackgrond: {
    width: 300,
    height: 250,
    padding: 20,
    margin: 20,
  },
});


const menuFaClube = [
  {
    nome: 'Sair',
    badge: 1,
    event: () => { Alert.alert('Alert', 'Alertando'); },
  },
  {
    nome: 'Sobre',
    badge: 2,
    event: () => {},
  },
];
const menuAdm = [
  {
    nome: 'Fãs Clubes',
    badge: 1,
    event: () => {},
  },
  {
    nome: 'Fãs',
    badge: 2,
    event: () => {},
  },
  {
    nome: 'Relatórios',
    badge: 0,
    event: () => {},
  },
  {
    nome: 'Sair',
    badge: 12,
    event: () => {},
  },
  {
    nome: 'Sobre',
    badge: 2,
    event: () => {},
  },
];

class MenuLateral extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      valor: '',
    };
    this.carregaOpcoesMenu.bind();
  }

  carregaOpcoesMenu() {
    const { temUsuario, usuarioLogado, navigation } = this.props;
    const menuPublic = [
      {
        nome: 'Entrar',
        badge: 1,
        event: () => { navigation.navigate('PaginaB'); },
      },
      {
        nome: 'Cadastrar Fã Clube',
        badge: 2,
        event: () => {},
      },
      {
        nome: 'Sobre',
        badge: 3,
        event: () => {},
      },
    ];
    if (!temUsuario) {
      return menuPublic;
    }
  }

  render() {
    const RenderBadge = (numero) => {
      if (numero > 0) {
        return (
          <Badge style={{ alignSelf: 'center', width: 30 }} info>
            <Text style={{ alignSelf: 'center', color: '#fff' }}>{numero}</Text>
          </Badge>
        );
      }
      return null;
    };
    return (
      <View style={styles.container}>
        <View style={styles.imgBackContainer}>
          
        </View>
        <TouchableOpacity onPress={() => { this.props.navigation.navigate('PaginaB'); }}>
          <Text>NAVEGAR</Text>
        </TouchableOpacity>
        <FlatList
          data={this.carregaOpcoesMenu()}
          keyExtractor={item => item.nome}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemMenuContainer}
              onPress={() => item.event()}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={{
                  marginLeft: 10, alignSelf: 'center',
                }}
                >
                  {item.nome}
                </Text>
              </View>
              {/* {RenderBadge(item.badge)} */}
            </TouchableOpacity>
          )}
        />
      </View>
    );
  }
}
 
export default MenuLateral;
