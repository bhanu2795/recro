import React from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Dimensions, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { dimensions, colors } from '../../styles';
const { indent, doubleIndent } = dimensions;
import { Text, Input, Button, KeyboardAvoidingView } from '../../components';
import AntDesign from 'react-native-vector-icons/AntDesign';

const { width } = Dimensions.get('window');

const s = StyleSheet.create({
    modalBackground: {
        flex: 1,
        backgroundColor: '#ffffff00'
    },
    activityIndicatorWrapper: {
        backgroundColor: colors.first,
        width: width - (2 * doubleIndent),
        borderRadius: 10,
        display: 'flex',
        alignItems: 'center',
        padding: 10
    },
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: 'grey',
                shadowOffset: { width: 0, height: 5 },
                shadowOpacity: 0.8,
                shadowRadius: 2
            },
            android: {
                elevation: 6
            },
        })
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 18,
        color: colors.fourth
    },
    icons: {
        color: colors.fourth,
        fontSize: 30
    },
    form: {
        marginTop: indent,
        alignItems: 'center',
        width: '100%',
    },
    input: {
        width: '100%'
    },
    secondContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8
    },
    noteContainer: {
        marginVertical: dimensions.verticalIndent / 10,
        width: '100%'
    },
    btnText: {
        padding: indent,
        fontWeight: '900',
        fontSize: 15
    },
    withdrawlBtn: {
        height: dimensions.verticalIndent * 2,
        alignItems: 'center',
        // width: '%',
        borderRadius: 8
    },
    twoInputs: {
        flex: 1
    },
    rowInputs: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    formOptions: {
        flexDirection: 'row',
        marginVertical: indent / 2,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
});

export default (propName = 'modalOtp') => BaseComponent => props => (
    <React.Fragment>
        <BaseComponent {...props} />
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={props[propName]}
            onRequestClose={() => { props.setModalOtp(null, !props.modalAddJourney) }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[s.modalBackground, s.center, s.shadow]}>
                    <KeyboardAvoidingView withHeader>
                        <View style={s.activityIndicatorWrapper}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={s.center}>
                                    <Text style={[s.title]}>
                                        OTP
                                    </Text>
                                </View>

                                <View>
                                    <TouchableHighlight onPress={() => props.setModalOtp(!props[propName])}>
                                        <AntDesign name={'closecircle'} style={s.icons} />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <View style={s.form}>
                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jounerySubscribeData.toAddress && /^[a-zA-Z0-9]*$/.test(props.jounerySubscribeData.toAddress)}
                                        // error={!(props.jounerySubscribeData.toAddress && /^[a-zA-Z0-9]*$/.test(props.jounerySubscribeData.toAddress)) ? 'Enter Valid Address' : null}
                                        placeholder={'OTP'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setOtp(text); }}
                                        containerStyle={s.noteContainer}
                                        value={props.otp}
                                        keyboardType={'numeric'}
                                        returnKeyType={'next'}
                                        iconRight={{ name: 'qrcode', size: 25, color: colors.greyDarker, onPress: () => { alert('clicked') } }}
                                    />
                                </View>

                                <View style={s.formOptions}>
                                    <Button secondaryOpacity disabled={props.timer} backgroundColor={colors.second} titleStyle={s.btnText} containerStyle={[s.withdrawlBtn, { marginRight: indent }]} title={`Resend (${props.timer})`} onPress={() => {
                                        props._resend();
                                    }} />
                                    <Button secondaryOpacity backgroundColor={colors.second} titleStyle={s.btnText} containerStyle={[s.withdrawlBtn]} title={'Submit'} onPress={async () => {
                                        const payload = await props.verifyOtp(props.registerData.mobile, props.otp);
                                        await Alert.alert(
                                            'TravelMitra Register',
                                            payload.message,
                                            [
                                                {
                                                    text: 'Cancel',
                                                    onPress: () => props.setOtp(''),
                                                    style: 'cancel',
                                                },
                                                { text: 'OK', onPress: () => props.setModalOtp(!props[propName]) },
                                            ],
                                            { cancelable: false });
                                    }} />
                                </View>

                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    </React.Fragment>
);