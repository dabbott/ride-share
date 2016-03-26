var React = require('react-native')
var {
  AppRegistry,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} = React

class LocationPin extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let screenStyle = {
      height: 0,
      width: 0,
      top: 0,
      left: 0,
      position: "absolute",
      overflow: "visible",
    }
    let innerStyle = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
      justifyContent: "center",
      alignItems: "center",
      flex: 1,
    }
    let top = -19 + Dimensions.get('window').height / 2
    let left =  0 
    let style = {
      borderRadius:  21 ,
      backgroundColor:  "rgba(21,21,36,1)" ,
      left: left,
      top: top,
    }
    let textStyle = {
      fontSize:  20 ,
      color:  'white' ,
      backgroundColor: "transparent",
      paddingVertical:  8 ,
      paddingHorizontal:  21 ,
      fontWeight:  "300" ,
    }
    let nubStyle = {
      width:  3 ,
      height:  20 ,
      backgroundColor: 'black',
      top: top,
      left: left,
    }
    return (
      <View style={screenStyle}
        pointerEvents={'box-none'}>
        <View style={innerStyle}>
          <TouchableOpacity style={style}
            onPress={this.props.onPress}
            activeOpacity={ 75  / 100}>
            <Text style={textStyle}>{ "SET LOCATION" }</Text>
          </TouchableOpacity>
          <View style={nubStyle}></View>
        </View>
      </View>
    )
  }
}

export default LocationPin
