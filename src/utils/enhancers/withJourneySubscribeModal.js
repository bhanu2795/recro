import React from 'react';
import { StyleSheet, View, Modal, TouchableHighlight, Dimensions, Keyboard, TouchableWithoutFeedback } from 'react-native';
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
        width: '100%',
        borderRadius: 8
    },
    twoInputs: {
        flex: 1
    },
    rowInputs: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    }
});

export default (propName = 'modalSubscribeJourney') => BaseComponent => props => (
    <React.Fragment>
        <BaseComponent {...props} />
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={props[propName]}
            onRequestClose={() => { props.setModalSubscribeJourney(null, !props.modalAddJourney) }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[s.modalBackground, s.center, s.shadow]}>
                    <KeyboardAvoidingView withHeader>
                        <View style={s.activityIndicatorWrapper}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={s.center}>
                                    <Text style={[s.title]}>
                                        Subscribe Journey
                                    </Text>
                                </View>

                                <View>
                                    <TouchableHighlight onPress={() => props.setModalSubscribeJourney(!props[propName])}>
                                        <AntDesign name={'closecircle'} style={s.icons} />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <View style={s.form}>
                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jounerySubscribeData.toAddress && /^[a-zA-Z0-9]*$/.test(props.jounerySubscribeData.toAddress)}
                                        // error={!(props.jounerySubscribeData.toAddress && /^[a-zA-Z0-9]*$/.test(props.jounerySubscribeData.toAddress)) ? 'Enter Valid Address' : null}
                                        placeholder={'Description'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJounerySubscribeData({ ...props.jounerySubscribeData, description: text }); }}
                                        containerStyle={s.noteContainer}
                                        value={props.jounerySubscribeData.description}
                                        keyboardType={'default'}
                                        returnKeyType={'next'}
                                        iconRight={{ name: 'qrcode', size: 25, color: colors.greyDarker, onPress: () => { alert('clicked') } }}
                                    // onSubmitEditing={() => { props.inputRefs.amount.focus(); }}
                                    />
                                </View>
                                <View style={s.rowInputs}>
                                    <View style={[s.twoInputs, { marginRight: 5 }]}>
                                        <Input
                                            // isValid={!!props.jounerySubscribeData.password && props.jounerySubscribeData.password.length > 6}
                                            // error={!(props.jounerySubscribeData.password && props.jounerySubscribeData.password.length > 6) ? 'Enter Valid Password' : null}
                                            placeholder={'Luggage Count'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJounerySubscribeData({ ...props.jounerySubscribeData, origin: text }); }}
                                            keyboardType={'default'}
                                            containerStyle={s.noteContainer}
                                            value={props.jounerySubscribeData.luggageCount}
                                            returnKeyType={'done'}
                                        // inputRef={(input) => { props.inputRefs.password = input }}
                                        />
                                    </View>
                                    <View style={s.twoInputs}>
                                        <Input
                                            // isValid={!!props.jounerySubscribeData.amount && /[0-9]+(\.[0-9][0-9]?)?/.test(props.jounerySubscribeData.amount)}
                                            // error={!(props.jounerySubscribeData.amount && /[0-9]+(\.[0-9][0-9]?)?/.test(props.jounerySubscribeData.amount)) ? 'Enter Valid Amount' : null}
                                            placeholder={'Luggage Type'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJounerySubscribeData({ ...props.jounerySubscribeData, destination: text }); }}
                                            keyboardType={'default'}
                                            containerStyle={s.noteContainer}
                                            value={props.jounerySubscribeData.luggageType}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                        // inputRef={(input) => { props.inputRefs.amount = input }}
                                        // onSubmitEditing={() => { props.inputRefs.description.focus(); }}
                                        />
                                    </View>

                                </View>

                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jounerySubscribeData.password && props.jounerySubscribeData.password.length > 6}
                                        // error={!(props.jounerySubscribeData.password && props.jounerySubscribeData.password.length > 6) ? 'Enter Valid Password' : null}
                                        placeholder={'Luggage Weight'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJounerySubscribeData({ ...props.jounerySubscribeData, minimunCharge: text }); }}
                                        containerStyle={s.noteContainer}
                                        keyboardType={'numeric'}
                                        value={props.jounerySubscribeData.luggageWeight}
                                        returnKeyType={'done'}
                                    // inputRef={(input) => { props.inputRefs.password = input }}
                                    />
                                </View>

                                <Button secondaryOpacity backgroundColor={colors.second} titleStyle={s.btnText} containerStyle={[s.withdrawlBtn]} title={'Subscribe'} onPress={() => {
                                    props._subscribeJourney(props.jounerySubscribeData, props.currentJournetId);
                                    props.setJounerySubscribeData({
                                        'description': 'want to sent luggage',
                                        'luggageCount': 1,
                                        'luggageType': 'Clothes',
                                        'luggageWeight': 5
                                    });
                                    props.setModalSubscribeJourney(!props[propName]);
                                }} />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    </React.Fragment>
);