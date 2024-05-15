import { Slot } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
// Import your global CSS file
import '../global.css';
import { View } from 'react-native';

export default function HomeLayout() {
  return (
    <>
      <View className='flex-1 flex-row justify-center bg-slate-200'>
        <Slot />
      </View>
      <StatusBar style='auto' />
    </>
  );
}
