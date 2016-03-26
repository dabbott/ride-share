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
    this.handleRegionChange = this.handleRegionChange.bind(this)
  }
  handleRegionChange(region) {
    let lat = region.latitude
    let lon = region.longitude
    let latlng = lat + ',' + lon
    this.props.onLatlngChange && this.props.onLatlngChange(latlng)
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
          onRegionChange={this.handleRegionChange}
          minDelta={0.01}
          maxDelta={0.02}
          showsUserLocation={true}
          scrollEnabled={this.props.scroll}
          zoomEnabled={this.props.zoom}
          pitchEnabled={this.props.pitch}
          rotationEnabled={this.props.rotate}
          {...this.props} />
      </View>
    )
  }
}

export default Map
