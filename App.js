import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";


//telas de iniciaçao
import Home from './src/screens/Home';
import Password from './src/screens/Password';
const Tab = createBottomTabNavigator();


//Navegaçao com Butoes
const HomeTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false }}
      barStyle={{ backgroundColor: "white" }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            if(focused){
              return <Ionicons name="home" size={size} color={color} />
            }
            <Ionicons name="home-outline" size={size} color={color} />
          }
        }} />

      <Tab.Screen
        name="Password"
        component={Password}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color, size }) => {
            if(focused){
              return <Ionicons name="lock-closed" size={size} color={color} />
            }
            <Ionicons name="lock-closed-outline" size={size} color={color} />
          }
        }}
      />

    </Tab.Navigator>
  );
};
//Funçao que inicia toda a Home 
function App() {
  return (
    <NavigationContainer>
        <HomeTabs />
    </NavigationContainer>
  );
}

export default(App);
