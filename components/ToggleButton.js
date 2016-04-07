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
    let margin = this.props.padding
    let borderWidth = this.props.borderWidth
    let style = {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: "rgba(245,245,245,1)",
      paddingRight: margin,
      paddingVertical: margin,
      borderTopWidth: borderWidth,
      borderBottomWidth: borderWidth,
      borderColor: "rgba(214,214,214,1)",
    }
    let buttonStyle = {
      flex: 1,
      backgroundColor: this.props.defaultColor,
      borderRadius: this.props.borderRadius,
      marginLeft: margin,
      borderWidth: borderWidth,
      borderColor: "rgba(224,224,224,1)",
    }
    let textStyle = {
      fontSize: 11,
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding: 8,
      fontWeight: "600",
      color: this.props.defaultText,
    }
    let backgroundColor = this.props.activeColor
    let buttonActiveStyle = {
      backgroundColor: backgroundColor,
      borderColor: backgroundColor,
      borderWidth: borderWidth,
    }
    let textActiveStyle = {
      color: this.props.activeText,
    }
    let options = this.props.options.map((option, i) => {
      const active = option === this.props.value
      return (
        <TouchableOpacity key={i} 
          onPress={this.props.onChange.bind(this, option)}
          style={active ? [buttonStyle, buttonActiveStyle] : buttonStyle}>
          <Text style={active ? [textStyle, textActiveStyle] : textStyle}>{option}</Text>
        </TouchableOpacity>
      )
    })
    return (
      <View style={[style, this.props.style]}>
        {options}
      </View>
    )
  }
}

ToggleButton.defaultProps = {
  options: [],
  onChange: () => {},
}

export default ToggleButton
