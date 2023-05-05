import * as React from 'react';
import { Button, View, Text, ScrollView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SliderComponent} from './src/components/sliderComponent';
import { ModalComponent } from './src/components/modalComponent';
import CardGalera from './src/components/CardGalera';



function HomeScreen({ navigation }) {
  const navigateToGaleras = () => {
    navigation.navigate('Galeras');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'#D3D3D3' }}>
      <StatusBar barStyle="light-content" backgroundColor="#fff" />
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <ScrollView contentContainerStyle={{ alignItems: 'center' }}>
        <CardGalera galera='Galera 14' ca='red' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 8' ca='green' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 6' ca='orange' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 9' ca='red' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 18' ca='green' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 17' ca='red' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 13' ca='orange' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 1' ca='red' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 9' ca='orange' navigateToGaleras={navigateToGaleras}/>
        <CardGalera galera='Galera 15' ca='green' navigateToGaleras={navigateToGaleras}/>
      </ScrollView>
    </View>
  );
}

function DetailsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Ir a creacion de Galeras"
        onPress={() => navigation.navigate('Creacion')}
      />
    </View>
  );
}

function CreacionScreen({ navigation }) {
  return (
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
      <Button
        title="Ir a Home"
        onPress={() => navigation.navigate('Home')}
      />

      <Text>Cantidad de pollos pesados</Text>
    <SliderComponent></SliderComponent>
    <Text>Cantidad de alimento proporcionado</Text>
    <SliderComponent></SliderComponent>
    <Text>Peso medido</Text>
    <SliderComponent></SliderComponent>
    <ModalComponent></ModalComponent>
    </View>
  );
}

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen}
            options={{
              headerTitle: 'Galeras y tareas pendientes',
              headerStyle: {
                backgroundColor: '#fff',
                elevation: 0, // para eliminar la sombra en Android
              },
              headerTintColor: '#000',
              headerTitleStyle: {
                fontSize: 25,
              },
              headerTitleAlign: 'center', // centrar el título
            }}
          />
        <Stack.Screen name="Galeras" component={DetailsScreen} />
        <Stack.Screen name="Creacion" component={CreacionScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
