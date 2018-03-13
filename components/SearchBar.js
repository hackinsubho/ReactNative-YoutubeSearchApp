import React, {Component} from 'react';
import { View, TextInput } from 'react-native';
import { Button } from 'react-native-elements';

class SearchBar extends Component{
  state = { term: ''}
    render(){
      const {
        containerStyle,
        searchTextStyle,
        buttonStyles
      } = styles;
      return(
        <View style={containerStyle}>
        <TextInput
              style={searchTextStyle}
              onChangeText={term=> this.setState({term})}  //{term}==={term:term}
              value={this.state.term}
        />
        <Button
        buttonStyles={buttonStyles}
        title= {this.props.loading ? 'Loading.....':'Search'}
        onPress={()=> this.props.onPressSearch(this.state.term)}
        />
        </View>
      );
    }

}

const styles = {
  containerStyle:{
      flexDirection: 'row',
      marginTop: 20,
      marginRight: 10,
      marginLeft: 10,
    
  },
  searchTextStyle: {
      flex: 1
  },
  buttonStyles:{
      height: 30,
      marginButtom: 8
  }
};

export default SearchBar;
