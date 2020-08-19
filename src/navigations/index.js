import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import StackNavigation from './stackNavigation/stackNavigation';

export default function Nav(){
    return(
        <NavigationContainer>
            <StackNavigation/>
        </NavigationContainer>
    );
};