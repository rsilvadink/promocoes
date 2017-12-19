import React from 'react';
import { AppRegistry, Text, View } from 'react-native';
import Mytoolbar from './src/components/my-toolbar';
import ListaPromocoes from './src/components/lista-promocoes';
import { StackNavigator } from 'react-navigation';

const App = () => {
    return (
        <View>
            <Mytoolbar texto={'Promoções'} />
            <ListaPromocoes />
        </View>

    );
};



AppRegistry.registerComponent('promocoes', () => App);
