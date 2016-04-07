import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    paddingTop: 20,
  }
})

class DecoRideShareDemo extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

AppRegistry.registerComponent('DecoRideShareDemo', () => DecoRideShareDemo)
