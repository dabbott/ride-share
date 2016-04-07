 import React, {
  Component,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

class ToggleItem extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const {
      option, 
      active, 
      isLast, 
      onPress,
      // Styles
      color, 
      backgroundColor, 
      activeColor, 
      activeBackgroundColor, 
      borderColor,
      borderRadius,
      spacing = 0,
    } = this.props
    
    const margin = 0
    const borderWidth = 1
    
    let buttonStyle = {
      flex: 1,
      backgroundColor: backgroundColor || "rgba(241,241,241,1)",
      borderRadius: borderRadius,
      borderWidth: borderWidth,
      borderColor: borderColor || "rgba(224,224,224,1)",
      alignItems: 'center',
      justifyContent: 'center',
    }
    let textStyle = {
      fontSize: 11,
      textAlign: 'center',
      backgroundColor: 'transparent',
      padding: 8,
      fontWeight: "600",
      color: color || "rgba(151,151,151,1)",
    }
    let buttonActiveStyle = {
      backgroundColor: activeBackgroundColor || "rgb(74,144,226)",
      borderWidth: 0,
      padding: 1,
    }
    let textActiveStyle = {
      color: activeColor || "rgba(255,255,255,1)",
    }
    
    return (
      <TouchableOpacity
        onPress={this.props.onPress.bind(this, option)}
        style={active ? [buttonStyle, buttonActiveStyle] : buttonStyle}>
        <Text style={active ? [textStyle, textActiveStyle] : textStyle}>{option}</Text>
      </TouchableOpacity>
    )
  }
}

ToggleItem.defaultProps = {
  active: false,
  option: null,
  onPress: () => {},
}

export default ToggleItem
