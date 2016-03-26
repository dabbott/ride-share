var React = require('react-native')
var {
  AppRegistry,
  Text,
  View,
  TouchableOpacity,
} = React

class ToggleButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let margin = 4
    let style = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:  "rgba(245,245,245,1)" ,
      paddingRight: margin,
      paddingVertical: margin,
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor:  "rgba(214,214,214,1)" ,
    }
    let buttonStyle = {
      flex: 1,
      backgroundColor: 'white',
      borderRadius:  2 ,
      marginLeft: margin,
      borderWidth: 1,
      borderColor:  "rgba(220,220,220,1)" ,
    }
    let textStyle = {
      fontSize:  11 ,
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding:  8 ,
      fontWeight:  "600" ,
      color:  "rgba(107,107,118,1)" ,
    }
    let buttonActiveStyle = {
      backgroundColor:  "rgba(31,172,199,1)" ,
      borderWidth: 0,
    }
    let textActiveStyle = {
      color:  "rgba(255,255,255,1)" ,
    }
    return (
      <View style={[style, this.props.style]}>
        <TouchableOpacity style={[buttonStyle, buttonActiveStyle]}>
          <Text style={[textStyle, textActiveStyle]}>{'youberX'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={buttonStyle}>
          <Text style={textStyle}>{'youberXL'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

if (__name__ == '__main__') {
  ToggleButton.defaultProps = {
    style: {marginTop: 20}
  }
}

module.exports = ToggleButton