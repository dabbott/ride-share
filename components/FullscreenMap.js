var React = require('react-native')
var {
  AppRegistry,
  Text,
  View,
  MapView,
  Dimensions,
} = React

class Map extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    let style = {
      position: 'absolute',
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      overflow: "visible",
    }
    let mapStyle = {
      height: Dimensions.get('window').height,
      width: Dimensions.get('window').width,
    }
    return (
      <View style={style}>
        <MapView style={mapStyle}
          showsUserLocation={true} />
      </View>
    )
  }
}

export default Map
