import React from 'react';
import { StyleSheet, View, Modal, Dimensions } from 'react-native';
import LottieView from 'lottie-react-native';
import loading from '../../assets/anim/loading.json';
import { dimensions, colors } from '../../styles';
import { Text } from '../../components';
const { doubleIndent } = dimensions;
const { width } = Dimensions.get('window');

const s = StyleSheet.create({
  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#ffffff00'
  },
  activityIndicatorWrapper: {
    backgroundColor: colors.first,
    height: (width / 2) - (2 * doubleIndent),
    width: (width / 2) - (2 * doubleIndent),
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  shadow: {
    ...Platform.select({
      ios: {
        shadowColor: colors.sixth,
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.8,
        shadowRadius: 2
      },
      android: {
        elevation: 6
      },
    })
  }
});

export default (propName = 'isLoading') => BaseComponent => props => (
  <React.Fragment>
    <BaseComponent {...props} />
    <Modal
      transparent={true}
      animationType={'none'}
      visible={props[propName]}
      onRequestClose={() => { console.log('close modal') }}>
      <View style={[s.modalBackground, s.shadow]}>
        <View style={s.activityIndicatorWrapper}>
          <LottieView
            source={loading}
            autoPlay loop
          />
          <Text style={{ position: 'absolute', bottom: 10, color: colors.sixth }}>Please Wait...</Text>
        </View>
      </View>
    </Modal>
  </React.Fragment>
);