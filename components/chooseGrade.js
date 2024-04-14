import React, { useState } from 'react';
import { StyleSheet, View, Text, Button} from 'react-native';


export default function chooseGrade({ navigation }) {

    const firstGrade = () => {
        navigation.navigate('firstGrade');
    };
    const secondGrade = () => {
        navigation.navigate('secondGrade');
    };
    const thirdGrade = () => {
        navigation.navigate('thirdGrade');
    };
    const fourthGrade = () => {
        navigation.navigate('fourthGrade');
    };
    const fifthGrade = () => {
        navigation.navigate('fifthGrade');
    };

    return (
        <View>
            <Text>Выберите класс</Text>
            <Button title='Первый класс' onPress={firstGrade} />
            <Button title='Первый класс' onPress={secondGrade} />
            <Button title='Первый класс' onPress={thirdGrade} />
            <Button title='Первый класс' onPress={fourthGrade} />
            <Button title='Первый класс' onPress={fifthGrade} />
         </View>
    );
}

const styles = StyleSheet.create({

});