import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import MapboxGL from '@mapbox/react-native-mapbox-gl';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { TOKEN_MAPBOX } from 'react-native-dotenv';

import styles from './styles';
import ModalMap from '../../components/Modal';

import { Creators as userActions } from '../../store/ducks/user';

MapboxGL.setAccessToken(TOKEN_MAPBOX);

class Main extends Component {
  state = {};

  onLongPress = async (location) => {
    const { coordinates } = location.geometry;
    const [long, lat] = coordinates;
    const { userModal } = this.props;
    await userModal({ long, lat });
  };

  renderAnnotations = () => {
    const { data } = this.props;
    console.tron.log(data);
    return (
      <>
        {data.map(user => (
          <MapboxGL.PointAnnotation
            key={user.id}
            id={user.login}
            coordinate={[user.coord.long, user.coord.lat]}
          >
            <View style={styles.annotationContainer}>
              <Image style={styles.annotationFill} source={{ uri: user.avatar }} />
            </View>
            <MapboxGL.Callout title="Rocketseat House">
              <ScrollView style={styles.containerText}>
                <Text style={styles.title}>{user.name}</Text>
                <Text style={styles.bio}>{user.bio}</Text>
              </ScrollView>
            </MapboxGL.Callout>
          </MapboxGL.PointAnnotation>
        ))}
      </>
    );
  };

  render() {
    return (
      <>
        <ModalMap />
        <MapboxGL.MapView
          centerCoordinate={[-49.6451598, -27.2177659]}
          style={styles.container}
          showUserLocation
          styleURL={MapboxGL.StyleURL.Street}
          onLongPress={this.onLongPress}
        >
          {this.renderAnnotations()}
        </MapboxGL.MapView>
      </>
    );
  }
}

const mapStateToProps = state => ({ data: state.user.data });

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Main);
