import {SafeAreaView, StatusBar} from 'react-native';
import React from 'react';

import {styles} from './styles';
import {COLORS} from '../../themes';

interface IProps {
  children: React.ReactNode;
  hideStatusBar?: boolean;
}

export const Container: React.FC<IProps> = ({
  children,
  hideStatusBar = false,
}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.BLACK}
        barStyle="light-content"
        hidden={hideStatusBar}
      />
      {children}
    </SafeAreaView>
  );
};
