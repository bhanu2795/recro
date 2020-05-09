import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
// import LottieView from 'lottie-react-native';
import { Text } from '../../components';

// import net from '../../assets/anim/net.json';

const s = StyleSheet.create({
    modalBackground: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        backgroundColor: '#00000040'
    },
    activityIndicatorWrapper: {
        backgroundColor: '#FFFFFF',
        height: 300,
        width: 300,
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'red',
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

export default (propName = 'isConnected') => BaseComponent => props => (
    <React.Fragment>
        <BaseComponent {...props} />
        <Modal
            transparent={true}
            animationType={'none'}
            visible={!props[propName]}
            onRequestClose={() => { console.log('close modal') }}>
            <View style={[s.modalBackground, s.shadow]}>
                <View style={s.activityIndicatorWrapper}>
                    {/* <LottieView
                        source={net}
                        autoPlay loop
                    /> */}
                    <Text style={{ fontSize: 18, position: 'absolute', bottom: 10 }}>Not Connected...</Text>
                </View>
            </View>
        </Modal>
    </React.Fragment>
);