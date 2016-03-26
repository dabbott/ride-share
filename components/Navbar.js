var React = require('react-native')
var {
  AppRegistry,
  Text,
  View,
} = React

class Navbar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let style = {
      paddingTop: 20,
      height: 65,
      backgroundColor: 'white',
      borderBottomWidth: 1,
      borderColor: "rgba(207,207,207,1)",
      justifyContent: 'center',
      alignItems: 'center',
    }
    let textStyle = {
      fontSize: 14,
      fontWeight: "700"
    }
    return (
      <View style={style}>
        <Text style={textStyle}>{this.props.title || "Title"}</Text>
      </View>
    )
  }
}

export default Navbar
