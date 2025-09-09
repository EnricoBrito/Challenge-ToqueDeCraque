import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingTop: height * 0.08,
    paddingBottom: 50,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#fff',
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginBottom: 10,
  },
  videoWrapper: {
    width: width - 40,
    height: 201,
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    borderWidth: 3,
    borderColor: '#fff',
  },
  video: {
    width: '100%',
    height: '100%',
  },
  lastVideoTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f7f7f7ff',
    textAlign: 'left',
    alignSelf: 'flex-start',
    marginLeft: 0,
    marginBottom: 30,
  },
  imageWrapper: {
    width: 220,
    height: 220,
    borderRadius: 110,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    marginHorizontal: 10,
  },
  image: {
    width: 150,
    height: 240,
    borderRadius: 30
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    marginHorizontal: 20,
    marginTop: 15,
  },
});
