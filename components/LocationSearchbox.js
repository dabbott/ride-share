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
  componentWillReceiveProps(newProps) {
    if (newProps.latlng && newProps.latlng !== this.props.latlng) {
      let url = "https://maps.googleapis.com/maps/api/geocode/json?" + 
          "latlng=" + newProps.latlng + "&key=" + "AIzaSyBodeCxWCFMML6JvWL8MW6ztpHJZBN8KTw" +
          "&result_type=street_address"
      let promise = fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          let results = data.results
          if (results.length > 0) {
            this.setState({
              address: results[0].formatted_address.replace(/, CA \d+, USA/, ''),
            })
          }
          return results;
        });
    }
  }
  render() {
    let style = {
      flex: 1,
      margin: this.props.margin || 0,
    }
    let searchboxStyle = {
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: "rgba(225,225,225,1)",
      borderRadius: 4,
      height: 50,
    }
    let searchboxInnerStyle = {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
    }
    let searchboxTextContainerStyle = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
    let iconURL = 'https://api.icons8.com/download/19343120d27c16dd3e9d21ad3aa637f94fd4d5fa/Android_L/PNG/256/Very_Basic/search-256.png'
    let iconSize = 16
    let iconStyle = {
      width: iconSize, 
      height: iconSize,
      opacity: 32 / 100,
    }
    let labelStyle = {
      fontSize: 9,
      color: this.props.labelColor,
      marginTop: 2,
      marginBottom: 3,
      fontWeight: "600",
    }
    let textStyle = {
      fontSize: 14,
      color: this.props.textColor,
    }
    return (
      <View style={[style, this.props.style]}>
        <View style={searchboxStyle}>
          <View style={searchboxInnerStyle}>
            <Image source={{uri: iconURL}} 
              style={iconStyle} />
            <View style={searchboxTextContainerStyle}>
              {this.props.showLabel && <Text style={labelStyle}>{this.props.labelText}</Text>}
              <Text style={textStyle}>{this.state.address || this.props.defaultText}</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
export default LocationSearchbox
