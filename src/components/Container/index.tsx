import {SafeAreaView, StatusBar, ViewStyle} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {COLORS} from '../../themes';

interface IProps {
  children: React.ReactNode;
  hideStatusBar?: boolean;
  containerStyle?: ViewStyle;
}

export const Container: React.FC<IProps> = ({
  children,
  hideStatusBar = false,
  containerStyle,
}) => {
  return (
    <SafeAreaView style={[styles.container, containerStyle]}>
      <StatusBar
        backgroundColor={COLORS.BLACK}
        barStyle="light-content"
        hidden={hideStatusBar}
      />
      {children}
    </SafeAreaView>
  );
};
