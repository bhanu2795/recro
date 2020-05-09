import React from 'react';
import T from 'prop-types';
import Feather from 'react-native-vector-icons/Feather';
import {
	View,
	TouchableOpacity,
	SectionList,
	TouchableHighlight,
} from 'react-native';
import {Text, HeaderTitle} from '../../components';
import s from './styles';
import {colors} from '../../styles';
import moment from 'moment';

const Home = ({current, slots, addNewSlot, selectedSlotes, ...props}) => (
	<View style={[s.root, s.center]}>
		<View style={s.container}>
			<SectionList
				sections={slots}
				renderItem={({item}) => (
					<View style={s.itemContainer}>
						<TouchableHighlight
							style={s.btn}
							onPress={() => addNewSlot(item)}
							underlayColor="#fefefe">
							<Text>{`${moment(item).format('hh:mm a')}`}</Text>
						</TouchableHighlight>
					</View>
				)}
				keyExtractor={(item, index) => item + index}
				renderSectionHeader={({section: {title}}) => (
					<View style={[s.sectionStyle, s.center]}>
						<Text style={s.sectionTxtStyle}>{title}</Text>
					</View>
				)}
			/>
			{selectedSlotes[
				`'${new Date(current).getDate().toString()}-${new Date(current)
					.getMonth()
					.toString()}-${new Date(current).getFullYear().toString()}'`
			] && (
				<View style={[s.slotContainer, s.center]}>
					<View style={[s.selected, s.center]}>
						<Text style={s.selectedText}>
							{
								selectedSlotes[
									`'${new Date(current).getDate().toString()}-${new Date(
										current,
									)
										.getMonth()
										.toString()}-${new Date(current).getFullYear().toString()}'`
								]
							}
						</Text>
					</View>
				</View>
			)}
		</View>
	</View>
);

Home.navigationOptions = ({navigation}) => ({
	headerLeft: () => (
		<TouchableOpacity onPress={() => navigation.getParam('decrement').call()}>
			<Feather name={'chevrons-left'} size={25} color={colors.first} />
		</TouchableOpacity>
	),
	headerRight: () => (
		<TouchableOpacity onPress={() => navigation.getParam('increment').call()}>
			<Feather name={'chevrons-right'} size={25} color={colors.first} />
		</TouchableOpacity>
	),
	headerLeftContainerStyle: {
		paddingHorizontal: 10,
	},
	headerRightContainerStyle: {
		paddingHorizontal: 10,
	},
	headerStyle: {
		backgroundColor: '#b573f0',
	},
	headerTitleAllowFontScaling: true,
	headerTitle: () => (
		<HeaderTitle
			titleStyle={{
				textTransform: 'uppercase',
				color: colors.first,
			}}
		/>
	),
});

Home.propTypes = {
	onSignIn: T.func,
};

export default Home;
