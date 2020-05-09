import { StyleSheet, Dimensions } from 'react-native';
import { dimensions, colors, fontSizes, fontWeights } from '../../styles';
import { doubleIndent } from '../../styles/dimensions';

const { indent, halfIndent } = dimensions;
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({

    root: {
        flex: 1
    },

    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    btn: {
        borderRadius: 5,
        padding: 10,
    },

    container: {
        flex: 1,
        width: '100%',
        marginTop: indent,
        marginHorizontal: indent
    },

    sectionStyle: {
        padding: halfIndent,
        marginHorizontal: halfIndent,
        backgroundColor: colors.greyVeryDarker
    },

    sectionTxtStyle: {
        textTransform: 'uppercase',
        color: colors.white,
        fontSize: fontSizes.medium
    },

    itemContainer: {
        paddingHorizontal: indent,
        marginHorizontal: halfIndent,
        flexWrap: 'wrap'
    },

    slotContainer: {
        position: 'relative',
        margin: halfIndent,
        backgroundColor: colors.fourth,
        height: doubleIndent * 2,
        borderRadius: halfIndent
    },

    selected: {
        paddingHorizontal: indent,
        position: 'absolute',
        left: 0,
        right: 0
    },

    selectedText: {
        color: colors.first,
        fontSize: fontSizes.medium
    }

});

export default styles;
