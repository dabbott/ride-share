var React = require('react-native')
var {
  AppRegistry,
  Text,
  View,
  Image,
} = React

class LocationSearchbox extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let style = {
      flex: 1,
    }
    let searchboxStyle = {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: "rgba(225,225,225,1)",
      borderRadius:  4 ,
      height:  50 ,
    }
    let searchboxInnerStyle = {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding:  10 ,
    }
    let searchboxTextContainerStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
    let iconURL = 'https://api.icons8.com/download/19343120d27c16dd3e9d21ad3aa637f94fd4d5fa/Android_L/PNG/256/Very_Basic/search-256.png'
    let iconSize =  16 
    let iconStyle = {
      width: iconSize, 
      height: iconSize,
      opacity:  32  / 100,
    }
    let labelStyle = {
      fontSize:  9 ,
      color:  "rgba(60,173,43,1)" ,
      marginTop:  2 ,
      marginBottom:  3 ,
      fontWeight:  "600" ,
    }
    let textStyle = {
      fontSize:  14 ,
    }
    return (
      <View style={[style, this.props.style]}>
        <View style={searchboxStyle}>
          <View style={searchboxInnerStyle}>
            <Image source={{uri: iconURL}} 
              style={iconStyle} />
            <View style={searchboxTextContainerStyle}>
              <Text style={labelStyle}>{'PICKUP LOCATION'}</Text>
              <Text style={textStyle}>{'Go To Pin'}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

// if (__name__ == '__main__') {
//   LocationSearchbox.defaultProps = {
//     style: {marginTop: 20, backgroundColor: 'teal', margin: 20,}
//   }
// }

module.exports = LocationSearchbox