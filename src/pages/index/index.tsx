import * as React from 'react';
import { View,Button, navigateTo } from 'remax/ali';
import styles from './index.css';

export default () => {
  return (
    <View className={styles.app}>
      <Button onClick={
        ()=>navigateTo({url:'/package/pages/a/index'})
      }>A</Button>
    </View>
  );
};
