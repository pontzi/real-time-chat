import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  messageLogo: {
    width: 100,
    height: 100,
  },
  shape: {
    width: 500,
    height: 500,
    borderRadius: 250,
    backgroundColor: '#fff',
    position: 'absolute',
    left: -110,
    top: -60,
  },
  data: {
    marginHorizontal: 32,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#514E5A',
    marginTop: 30,
  },
  wrapper: {
    width: '100%',
    height: '100%',
  },
  input: {
    marginTop: 23,
    height: 50,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#BAB7C3',
    borderRadius: 30,
    paddingHorizontal: 16,
    color: '#514E5A',
    fontWeight: 'bold',
  },
  btnContainer: {
    alignItems: 'flex-end',
    marginTop: 64,
  },
  continueToChat: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#2edffc',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 15,
  },
  arrowImage: {
    width: 70,
    height: 70,
  },
});
export default styles;
