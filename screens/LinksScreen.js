import React from 'react';
import { ScrollView, StyleSheet, View, Text } from 'react-native';


export default function LinksScreen() {
  return (
    <ScrollView style={styles.container}>
      {/**
       * Go ahead and delete ExpoLinksView and replace it with your content;
       * we just wanted to provide you with some helpful links.
       */}
      <View><Text>留言板功能待实现。</Text></View>
    </ScrollView>
  );
}

LinksScreen.navigationOptions = {
  title: '留言',
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

