import React from 'react';
import chooseGrade from './components/chooseGrade';
import firstGrade from './components/firstGrade';
import secondGrade from './components/secondGrade';
import thirdGrade from './components/thirdGrade';
import fourthGrade from './components/fourthGrade';
import fifthGrade from './components/fifthGrade';
import main from './components/Main';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function Navigate() {
    return <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen 
                name='Main'
                component={main}
                options={{title: 'Главная'}}
            />
            <Stack.Screen 
                name='chooseGrade'
                component={chooseGrade}
                options={{title: 'Выбрать класс'}}
            />
            <Stack.Screen 
                name='firstGrade'
                component={firstGrade}
                options={{title: 'Первый класс'}}
            />
            <Stack.Screen 
                name='secondGrade'
                component={secondGrade}
                options={{title: 'Второй класс'}}
            />
            <Stack.Screen 
                name='thirdGrade'
                component={thirdGrade}
                options={{title: 'Третий класс'}}
            />
            <Stack.Screen 
                name='fourthGrade'
                component={fourthGrade}
                options={{title: 'Четвертый класс'}}
            />
            <Stack.Screen 
                name='fifthGrade'
                component={fifthGrade}
                options={{title: 'Пятый класс'}}
            />
        </Stack.Navigator>
        </NavigationContainer>
}