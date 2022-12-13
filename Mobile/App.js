import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import CadastroCliente from "./screens/CadastroCliente";
import ListDeProdutos from "./screens/ListaDeProdutos";
import CadastroProduto from "./screens/CadastroProduto";
import AlterarProduto from "./screens/AlterarProduto";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
          name="AlterarProduto"
          component={AlterarProduto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroProduto"
          component={CadastroProduto}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ListDeProdutos"
          component={ListDeProdutos}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CadastroCliente"
          component={CadastroCliente}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
