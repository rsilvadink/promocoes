import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableHighlight, ToastAndroid } from 'react-native';
//import {Promocao} from './src/components/promocao';


class ListaPromocoes extends Component {
    state = { lista: [] };

    urlApi = 'http://terrafm94.com.br/json-promocoes.php';
    componentWillMount() {

        this.carregaLista();
    }

    carregaLista() {
        fetch(this.urlApi)
            .then(resposta => {
                console.log('OK', resposta);
                resposta.json().then(
                    data => {
                        console.log(data);
                        this.setState({
                            lista: data
                        });
                    }
                ).catch(
                    console.log('Deu erro')
                    );
            }

            )
            .catch(erro => {
                console.log('Erro', erro);
            }

            );
    }

    onPress = () => {

        ToastAndroid.show('Click na imagem!', ToastAndroid.SHORT);

    }


    renderPromocoes() {
        const { imagemStyle, containerStyle } = estilos;
        return this.state.lista.map(
            (promocao, ind) =>
                <View key={ind} style={containerStyle}>
                    <Text>{promocao.titulo}</Text>
                    <TouchableHighlight onPress={() => this.onPress()}>
                        <Image style={imagemStyle} source={{ uri: promocao.banner }} />
                    </TouchableHighlight>

                </View >

        );

    }

    render() {
        console.log('lista rendeer');
        
        return (
            <ScrollView>
                {this.renderPromocoes()}
            </ScrollView>
        );
    }

    


}

const estilos = {
    imagemStyle: {
        height: 300,
        width: 300

    },
    containerStyle: {
        alignItems: 'center',
        flexDirection: 'column'
    }
};

export default ListaPromocoes;