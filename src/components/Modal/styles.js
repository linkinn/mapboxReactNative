import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    paddingHorizontal: 30,
  },
  modalContent: {
    height: 180,
    paddingHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  modalTitle: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginVertical: 20,
  },
  modalErro: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    color: '#f00',
  },
  modalInput: {
    fontSize: 14,
    height: 42,
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    paddingHorizontal: 20,
  },
  modelBtns: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
  },
  modalCancel: {
    width: 125,
    height: 42,
    backgroundColor: '#aaa',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  modalAdicionar: {
    width: 125,
    height: 42,
    backgroundColor: '#5dc4b3',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
  },
  modalTextBtn: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default styles;
