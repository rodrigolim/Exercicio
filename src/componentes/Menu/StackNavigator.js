import React from 'react';
import { View } from 'react-native'; 
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScream from './AboutScream';
import HomeScream from './HomeScream';
import Simples from '../Simples';
import Frag from '../Frag';
import ParImpar from '../ParImpar';

const Stack = createNativeStackNavigator();

function SimplesScream(){
  return(
    <View>
      <Simples texto="Passando parametro" />
    </View>
  );
}

function FragScream(){
  return(
    <View>
      <Frag titulo="Cadastro" subTitulo="Teda de Cadastro de Produto" /> 
    </View>
    
  );
}

function ParImparScream(){
  return(
    <View>
      <ParImpar numero={9}  />  
    </View>
    
  );
}

const MainStackNavigator = () => {
  return (
      <Stack.Navigator  >
        <Stack.Screen name="Home" component={HomeScream} />
        <Stack.Screen name="Simples" component={SimplesScream} />
        <Stack.Screen name="Frag" component={FragScream} />
        <Stack.Screen name="ParImpar" component={ParImparScream} />
        <Stack.Screen name="AboutScream" component={AboutScream} />
      </Stack.Navigator>
  );
}

const TabStackNavigator = () =>{
  return (
    <Stack.Navigator  >
      <Stack.Screen name="About" component={AboutScream}/>
    </Stack.Navigator>
  );
}

export { MainStackNavigator, TabStackNavigator };