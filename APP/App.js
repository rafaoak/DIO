import React,{useState,useEffect} from 'react';
import {View, StyleSheet,Image,TouchableOpacity} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake';

const App = () => { 
  const [toggle,setToggle, setValue] = useState(false);

  const handleChangeToggle = () => setToggle(oldToggle => !oldToggle);

  useEffect(() =>{
    // Liga flash do celular 
    Torch.switchState(toggle);
  },[toggle]);
 
  userEffect (()=>{
    const subscription = RNShake.addListener(() => {
      setToggle(oldToggle => !oldToggle);
    });

    return() => subscription.remove();
  }, []);

  return( 
    <View style={toggle ? style.containerLight : style.container}>
     <TouchableOpacity 
      onPress={() => {
        setToggle(oldToggle =>{
          return !oldToggle;
        });
      }}>

     
      <Image 
      style={toggle ? style.lightingOn: style.lightingOff }
      source={
        toggle 
        ? require('./assets/icons/eco-light.png')
        : require('./assets/icons/eco-light-off.png')
      }
     />
     <Image
      style={style.diologo}
      source={
        toggle
        ? require('./assets/icons/logo-dio.png')
        : require('./assets/icons/logo-dio-white.png')
      }
    /> 
   </TouchableOpacity>        
  </View>
  
  );
};

export default App;

const style = StyleSheet.create({   
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignIteins: 'center',
    justifyContent: 'center',
  },
  containerLight: {
    flex: 1,
    backgroundColor: 'white',
    alignIteins: 'center',
    justifyContent: 'center',
  },
  lightingOn:{
    resizeMode: 'contain',
    alingSelf: 'center',
    width: 150,
    height: 150,
  },

  lightingOff:{
    resizeMode: 'contain',
    alingSelf: 'center',
    tintColor: 'white',
    width: 150,
    height: 150,

  },

  diologo:{
    resizeMode: 'contain',
    alingSelf: 'center',
    width: 250,
    height: 150,

  },
});
