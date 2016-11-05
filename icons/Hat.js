import React, { Component } from 'react'

import Svg,{
    Circle,
    Ellipse,
    G,
    LinearGradient,
    RadialGradient,
    Line,
    Path,
    Polygon,
    Polyline,
    Rect,
    Symbol,
    Text,
    Use,
    Defs,
    Stop
} from 'react-native-svg';

/*
Icons by Carla Dias from the Noun Project

https://thenounproject.com/carla.santos.dias.82/collection/halloween/
*/

export default class Hat extends Component {
    render() {
        return (
            <Svg
              height="68.5"
              width="82.8"
            >
            <Path d="M67.3,52.1c-0.4-5.1-2.4-20.7-10.2-27.4C47.8,16.5,27,12.6,25.5,6C24-0.6,8.6-1.1,0,1.4c0,0,17.9,3.9,17.4,10
	c-0.5,6.1-1.5,16.9,6.9,22.1c7.9,4.9-2.7,9.4-3.9,18.6C11,53.7,4.9,56.4,4.9,59.4c0,5,17.4,9.1,38.9,9.1s38.9-4.1,38.9-9.1
	C82.8,56.4,76.7,53.7,67.3,52.1z"/>
</Svg>


        );
    }
}
