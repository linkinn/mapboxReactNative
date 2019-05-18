import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  annotationContainer: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
  },
  annotationFill: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  containerText: {
    width: 200,
    height: 100,
    borderRadius: 10,
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 10,
    marginBottom: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  bio: {
    textAlign: 'justify',
    fontSize: 14,
    color: '#fff',
    marginBottom: 10,
  },
});

export default styles;
