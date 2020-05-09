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

export default (propName = 'modalAddJourney') => BaseComponent => props => (
    <React.Fragment>
        <BaseComponent {...props} />
        <Modal
            transparent={true}
            animationType={'fade'}
            visible={props[propName]}
            onRequestClose={() => { props.setModalAddJourney(null, !props.modalAddJourney) }}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <View style={[s.modalBackground, s.center, s.shadow]}>
                    <KeyboardAvoidingView withHeader>
                        <View style={s.activityIndicatorWrapper}>
                            <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <View style={s.center}>
                                    <Text style={[s.title]}>
                                        Add Journey
                                    </Text>
                                </View>

                                <View>
                                    <TouchableHighlight onPress={() => props.setModalAddJourney(!props.modalAddJourney)}>
                                        <AntDesign name={'closecircle'} style={s.icons} />
                                    </TouchableHighlight>
                                </View>
                            </View>

                            <View style={s.form}>
                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jouneryData.toAddress && /^[a-zA-Z0-9]*$/.test(props.jouneryData.toAddress)}
                                        // error={!(props.jouneryData.toAddress && /^[a-zA-Z0-9]*$/.test(props.jouneryData.toAddress)) ? 'Enter Valid Address' : null}
                                        placeholder={'Description'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, description: text }); }}
                                        containerStyle={s.noteContainer}
                                        value={props.jouneryData.description}
                                        keyboardType={'default'}
                                        returnKeyType={'next'}
                                        iconRight={{ name: 'qrcode', size: 25, color: colors.greyDarker, onPress: () => { alert('clicked') } }}
                                    // onSubmitEditing={() => { props.inputRefs.amount.focus(); }}
                                    />
                                </View>
                                <View style={s.rowInputs}>
                                    <View style={[s.twoInputs, { marginRight: 5 }]}>
                                        <Input
                                            // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                            // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                            placeholder={'Origin'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, origin: text }); }}
                                            keyboardType={'default'}
                                            containerStyle={s.noteContainer}
                                            value={props.jouneryData.origin}
                                            returnKeyType={'done'}
                                        // inputRef={(input) => { props.inputRefs.password = input }}
                                        />
                                    </View>
                                    <View style={s.twoInputs}>
                                        <Input
                                            // isValid={!!props.jouneryData.amount && /[0-9]+(\.[0-9][0-9]?)?/.test(props.jouneryData.amount)}
                                            // error={!(props.jouneryData.amount && /[0-9]+(\.[0-9][0-9]?)?/.test(props.jouneryData.amount)) ? 'Enter Valid Amount' : null}
                                            placeholder={'Destination'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, destination: text }); }}
                                            keyboardType={'default'}
                                            containerStyle={s.noteContainer}
                                            value={props.jouneryData.destination}
                                            keyboardType={'default'}
                                            returnKeyType={'next'}
                                        // inputRef={(input) => { props.inputRefs.amount = input }}
                                        // onSubmitEditing={() => { props.inputRefs.description.focus(); }}
                                        />
                                    </View>

                                </View>

                                <View style={s.rowInputs}>
                                    <View style={[s.twoInputs, { marginRight: 5 }]}>
                                        <Input
                                            // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                            // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                            placeholder={'Weight Carrying Capacity'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, weightCarryingCapacity: text }); }}
                                            containerStyle={s.noteContainer}
                                            keyboardType={'numeric'}
                                            value={props.jouneryData.weightCarryingCapacity}
                                            returnKeyType={'done'}
                                        // inputRef={(input) => { props.inputRefs.password = input }}
                                        />
                                    </View>

                                    <View style={s.twoInputs}>
                                        <Input
                                            // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                            // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                            placeholder={'Charge/Kg'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, chargePerKg: text }); }}
                                            containerStyle={s.noteContainer}
                                            keyboardType={'numeric'}
                                            value={props.jouneryData.chargePerKg}
                                            returnKeyType={'done'}
                                        // inputRef={(input) => { props.inputRefs.password = input }}
                                        />
                                    </View>
                                </View>
                                <View style={s.rowInputs}>
                                    <View style={[s.twoInputs, { marginRight: 5 }]}>
                                        <Input
                                            // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                            // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                            placeholder={'Journey Medium'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, journeyMedium: text }); }}
                                            containerStyle={s.noteContainer}
                                            keyboardType={'default'}
                                            value={props.jouneryData.journeyMedium}
                                            returnKeyType={'done'}
                                        // inputRef={(input) => { props.inputRefs.password = input }}
                                        />

                                    </View>
                                    <View style={s.twoInputs}>
                                        <Input
                                            // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                            // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                            placeholder={'Journey Type'}
                                            secondContainerStyle={s.secondContainerStyle}
                                            onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, journeyType: text }); }}
                                            containerStyle={s.noteContainer}
                                            keyboardType={'default'}
                                            value={props.jouneryData.journeyType}
                                            returnKeyType={'done'}
                                        // inputRef={(input) => { props.inputRefs.password = input }}
                                        />
                                    </View>
                                </View>

                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                        // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                        placeholder={'Min Charge'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, minimunCharge: text }); }}
                                        containerStyle={s.noteContainer}
                                        keyboardType={'numeric'}
                                        value={props.jouneryData.minimunCharge}
                                        returnKeyType={'done'}
                                    // inputRef={(input) => { props.inputRefs.password = input }}
                                    />
                                </View>
                                <View style={s.input}>
                                    <Input
                                        isValid
                                        placeholder={'Date of Journey'}
                                        maxLength={30}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, doj: text }); }}
                                        keyboardType={'default'}
                                        containerStyle={s.noteContainer}
                                        value={props.jouneryData.doj}
                                        returnKeyType={'next'}
                                    // inputRef={(input) => { props.inputRefs.description = input }}
                                    // onSubmitEditing={() => { props.inputRefs.password.focus(); }}
                                    />
                                </View>
                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                        // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                        placeholder={'Preferred PickUp Location'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, preferredPickUpLocation: text }); }}
                                        containerStyle={s.noteContainer}
                                        keyboardType={'default'}
                                        value={props.jouneryData.preferredPickUpLocation}
                                        returnKeyType={'done'}
                                    // inputRef={(input) => { props.inputRefs.password = input }}
                                    />
                                </View>

                                <View style={s.input}>
                                    <Input
                                        // isValid={!!props.jouneryData.password && props.jouneryData.password.length > 6}
                                        // error={!(props.jouneryData.password && props.jouneryData.password.length > 6) ? 'Enter Valid Password' : null}
                                        placeholder={'Vehicle Number'}
                                        secondContainerStyle={s.secondContainerStyle}
                                        onChangeText={(text) => { props.setJouneryData({ ...props.jouneryData, vehicleNumber: text }); }}
                                        containerStyle={s.noteContainer}
                                        keyboardType={'default'}
                                        value={props.jouneryData.vehicleNumber}
                                        returnKeyType={'done'}
                                    // inputRef={(input) => { props.inputRefs.password = input }}
                                    />
                                </View>

                                <Button secondaryOpacity backgroundColor={colors.fourth} titleStyle={s.btnText} containerStyle={[s.withdrawlBtn]} title={'Add'} onPress={() => {
                                    props._addJourney();
                                    props.setJouneryData({
                                        'description': 'Delhi to Mumbai',
                                        'destination': 'Mumbai',
                                        'doj': '29/01/2020',
                                        'journeyMedium': 'Train',
                                        'journeyType': 'Domestic',
                                        'origin': 'DELHI',
                                        'preferredPickUpLocation': 'DELHI STATION',
                                        'vehicleNumber': '1234',
                                        'weightCarryingCapacity': 25,
                                        'chargePerKg': 50,
                                        'minimunCharge': 300
                                    });
                                    props.setModalAddJourney(!props[propName]);
                                }} />
                            </View>
                        </View>
                    </KeyboardAvoidingView>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    </React.Fragment>
);