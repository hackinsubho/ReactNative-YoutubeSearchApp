import React from 'react';
import { Header } from 'react-native-elements';

const AppHeader = (props) =>{
return(
  <Header
    centerComponent={{text:props.headerText, style: {color:'white'}}}
    outerContainerStyles={{ backgroundColor:'#E62117'}}
  />
);
};

export default AppHeader;
