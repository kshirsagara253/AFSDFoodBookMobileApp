import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import Login from './login';
import Register from './register';
import Dashboard from './dashboard';
import ItemDetails from './ItemDetails';
import ItemCard from './ItemCard';
import { TouchableOpacity, Text } from 'react-native';

const Stack = createStackNavigator();

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
    setLoggedIn(true);
  };

  const handleLogout = () => {
    setUser(null);
    setLoggedIn(false);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {loggedIn ? (
          <Stack.Screen
            name="Dashboard"
            options={{
              headerRight: () => (
                <TouchableOpacity onPress={handleLogout}>
                  <Text style={{ marginRight: 10 }}>Logout</Text>
                </TouchableOpacity>
              ),
            }}
          >
            {(props) => <Dashboard {...props} user={user} onLogout={handleLogout} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="Login">
              {(props) => <Login {...props} onLogin={handleLogin} />}
            </Stack.Screen>
            <Stack.Screen name="Register">
              {(props) => <Register {...props} onRegister={handleLogin} />}
            </Stack.Screen>
          </>
        )}
        <Stack.Screen name="ItemDetails" component={ItemDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
