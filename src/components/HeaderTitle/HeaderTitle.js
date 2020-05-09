import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import Text from '../Text';
import VerticalSeparator from '../VerticalSeparator';
import s from './styles';

const HeaderTitle = ({
    rightTitle,
    rightTitleStyle,
    style,
    current,
    titleStyle,
}) => (
        <View style={[s.root, style]}>
            <Text
                style={[
                    s.title,
                    titleStyle,
                    rightTitle && s.titleLeft,
                ]}
            >
                {
                    new Intl.DateTimeFormat('en-US', {
                        day: 'numeric',
                        month: 'short',
                        weekday: 'short',
                        year: 'numeric',
                        hour: 'numeric',
                        minute: 'numeric'
                    }).format(new Date(current))
                }
            </Text>
            {rightTitle && <VerticalSeparator />}
            {rightTitle && (
                <Text
                    style={[
                        s.title,
                        rightTitleStyle,
                        title && s.titleRight,
                    ]}
                >
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