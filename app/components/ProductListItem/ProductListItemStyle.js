import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  itemWrapper: {
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 10,
    flexDirection: 'row',
    height: 120,
    padding: 20,
  },
  image: {
    flex: 1,
    marginRight: 20,
    height: 80,
  },
  infoWrapper: {
    flex: 2,
    justifyContent: 'space-between',
  },
  titleAndPrice: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  title: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 15,
  },
  price: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  buttonWrapper: {
    flex: 1,
    width: '100%',
    borderColor: 'black',
    borderWidth: 1,
  },
  buttonBack: {
    backgroundColor: (Platform.OS === 'ios') ? 'white' : 'black',
  }
});
