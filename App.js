import regeneratorRuntime from "regenerator-runtime";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TDSGraphContainer from './components/TDSGraphContainer';
import StaticGraph from './components/StaticGraph';
import { useState } from "react";

export default function App() {
  const [target, setTarget] = useState({x: 15, y: 15});
  const [current, setCurrent] = useState({x: 30, y: 30});
  
  return (
    <View style={styles.container}>
      <TDSGraphContainer>
        <StaticGraph target={target} current={current} />
      </TDSGraphContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
