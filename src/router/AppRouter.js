
import React from 'react';
import { StackViewStyleInterpolator } from 'react-navigation-stack';
import {Scene,Router,Stack} from 'react-native-router-flux';
import homescreen from '../screens/homescreen'
import thankyou from '../screens/thankyou';


const AppRouter=() =>
(
<Router>
        <Stack key={'main'}>
            <Scene key="homescreen" component={homescreen} hideNavBar/>
            <Scene key="thankyou" component={thankyou} hideNavBar/>   
        </Stack>
    </Router>
);

export default AppRouter;
