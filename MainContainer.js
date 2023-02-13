import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import NavigationBar from 'react-native-navbar-color'

// Screens
import SearchScreen from './screens/SearchScreen';
import SosScreen from './screens/SosScreen';
import MenuScreen from './screens/MenuScreen';
import ProfileScreen from './screens/ProfileScreen';

//Screen names
const searchName = "SEARCH";
const sosName = "SOS";
const menuName = "MENU";
const profileName = "PROFILE";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={searchName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === searchName) {
              iconName = focused ? 'search' : 'search-outline';

            } else if (rn === sosName) {
              iconName = focused ? 'happy' : 'happy-outline';

            } else if (rn === menuName) {
              iconName = focused ? 'document-text' : 'document-text-outline';
            } else if (rn === profileName) {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'grey',
          inactiveTintColor: 'white',
          labelStyle: { paddingBottom: 5, fontSize: 10},
          style: { padding: 10, height: 70,backgroundColor: '#3D5A90',height:90}
        }}>
        <Tab.Screen name={searchName} component={SearchScreen} />
        <Tab.Screen name={sosName} component={SosScreen} />
        <Tab.Screen name={menuName} component={MenuScreen} />
        <Tab.Screen name={profileName} component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;