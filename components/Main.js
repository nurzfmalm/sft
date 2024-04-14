import React, { useState } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';
import { gStyle } from './styles/style';



export default function main({ navigation }) {

    const loadScene = () => {
        navigation.navigate('chooseGrade');
    };

    return (
        <View>
            <Text style={gStyle.title}>Главная Страница</Text>
            <Button title='Выбрать класс' onPress={loadScene} />
        </View>
    );
}