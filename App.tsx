import React from 'react';
import { View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 50}}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        <TextInput placeholder="Course Goal"
        style={{ width: '80%', padding: 10, borderColor: 'black', borderWidth: 1}}/>
        <Button title="ADD" onPress={ () => {} }/>
      </View>
      <View>

      </View>
    </View>
  );
}
