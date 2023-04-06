import React, {useEffect, useState} from 'react'
import {View, Text} from 'react-native'
import estilo from './Estilo'
import axios from 'axios'
 
function App(){
  const [lista, setLista] = useState([]);

  useEffect(()=>{
    listarDados();
  },[])

  async function listarDados(){
    const res = await axios.get('http://localhost:8085/nomes');
    setLista(res.data);
    console.log(res.data);
  }
  
  return (          
      <View>

        <Text style={estilo.titulo}>Nome:</Text>        
        <ul>{lista.map(item => (
          <li style={estilo.texto}>{item.nome}</li>          
        ))}</ul>
        
        <Text style={estilo.titulo}>Sobrenome:</Text>
        <ul>{lista.map(item => (
          <li style={estilo.texto}>{item.sobrenome}</li>
        ))}</ul>
      </View>      
  )

}

export default App;