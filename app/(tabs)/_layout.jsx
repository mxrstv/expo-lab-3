import { Tabs } from 'expo-router';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#BA55D3',
        tabBarLabelPosition: 'beside-icon',
        // tabBarLabelStyle: {
        //   // fontSize: 24,
        //   fontFamily: 'sans-serif',
        // },
        headerTitleStyle: {
          // fontSize: 24,
          color: '#BA55D3',
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'About me',
          
        }}
      />
      <Tabs.Screen
        name="experience"
        options={{
          title: 'My experience',
        }}
      />
    </Tabs>
  );
}