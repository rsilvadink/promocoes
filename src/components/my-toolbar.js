import React from 'react';
import { Text, View } from 'react-native';

const Mytoolbar = (props) => {
    const { estiloText, estiloView } = estilos;
    console .log('Props: ',props);
    return (
        <View style={estiloView}>
            <Text style={estiloText}>{props.texto}</Text>
        </View>
    );
};

const estilos = {
    estiloView: {
        backgroundColor: '#ccccff',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2,
        position: 'relative'

    },
    estiloText: {
        fontSize: 20
    }
};

export default Mytoolbar;