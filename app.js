import React, {
  Component, 
  Text, 
  View,
  AppRegistry,
  StyleSheet,
} from 'react-native'

class Uber extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let style = {flex: 1}
    let backgroundStyle = {position: 'absolute'}
    let overlayStyle = {flex: 1, backgroundColor: 'transparent', justifyContent: 'space-between'}
    return (
      <View style={style}>
        <View style={backgroundStyle}>
        </View>
        <View style={overlayStyle}
          pointerEvents={'box-none'}>
        </View>
      </View>
    )
  }
}

AppRegistry.registerComponent('Project', () => Uber)