import React, { Component } from 'react';
import {
  Modal, Text, TouchableOpacity, View, TextInput, ActivityIndicator,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Creators as userActions } from '~/store/ducks/user';

import styles from './styles';

class ModalMap extends Component {
  state = {
    inputUser: '',
  };

  handleAddUser = async () => {
    const { inputUser } = this.state;
    const { coord, userRequest } = this.props;
    await userRequest(inputUser, coord);
    this.setState({
      inputUser: '',
    });
  };

  render() {
    const { inputUser } = this.state;
    const {
      visible, loading, error, userCancel,
    } = this.props;
    return (
      <View style={{ marginTop: 22 }}>
        <Modal animationType="slide" transparent visible={visible}>
          <View style={styles.container}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Adicionar novo local</Text>
              {error && <Text style={styles.modalErro}>{error}</Text>}
              <TextInput
                style={styles.modalInput}
                value={inputUser}
                onChangeText={text => this.setState({ inputUser: text })}
                placeholder="Usuario no GitHub"
              />

              <View style={styles.modelBtns}>
                <TouchableOpacity style={styles.modalCancel} onPress={() => userCancel()}>
                  <Text style={styles.modalTextBtn}>Cancelar</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.modalAdicionar} onPress={this.handleAddUser}>
                  {loading ? (
                    <ActivityIndicator />
                  ) : (
                    <Text style={styles.modalTextBtn}>Adicionar</Text>
                  )}
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  visible: state.user.visible,
  coord: state.user.coord,
  loading: state.user.loading,
  error: state.user.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(userActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ModalMap);
