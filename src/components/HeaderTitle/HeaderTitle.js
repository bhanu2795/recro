import React from 'react';
import {View} from 'react-native';
import T from 'prop-types';
import Text from '../Text';
import VerticalSeparator from '../VerticalSeparator';
import s from './styles';
import moment from 'moment';

const HeaderTitle = ({
	rightTitle,
	rightTitleStyle,
	style,
	current,
	titleStyle,
}) => (
	<View style={[s.root, style]}>
		<Text style={[s.title, titleStyle, rightTitle && s.titleLeft]}>
			{moment(current).format('ddd, MMM D, YYYY, hh:mm a')}
			{console.log(current)}
		</Text>
		{rightTitle && <VerticalSeparator />}
		{rightTitle && (
			<Text style={[s.title, rightTitleStyle, title && s.titleRight]}>
				{rightTitle}
			</Text>
		)}
	</View>
);

HeaderTitle.propTypes = {
	rightTitle: T.string,
	rightTitleStyle: Text.propTypes.style,
	style: Text.propTypes.style,
	titleStyle: Text.propTypes.style,
};

export default HeaderTitle;
