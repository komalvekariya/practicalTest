
import React from 'react';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import {Scene,Router,Stack} from 'react-native-router-flux';
import homescreen from '../screens/homescreen'


const AppRouter=() =>
(
<Router>
        <Stack key={'main'}>
            <Scene key="homescreen" component={homescreen} hideNavBar/>   
        </Stack>
    </Router>
);

export default AppRouter;
