import React, {useEffect, useState} from 'react'
import {
  View, Text, TextInput, ScrollView,
  Image, TouchableOpacity, Alert, FlatList, VirtualizedList
}
  from 'react-native'
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
      <div>

        {/* <h3 style={estilo.h3}>Id:</h3>        
        <ul>{lista.map(item => (
          <li style={estilo.texto}>{item.id}</li>          
        ))}</ul> */}

        <h3 style={estilo.h3}>Nome:</h3>        
        <ul>{lista.map(item => (
          <li style={estilo.texto}>{item.nome}</li>          
        ))}</ul>
        
        <h3 style={estilo.h3}>Sobrenome:</h3>
        <ul>{lista.map(item => (
          <li style={estilo.texto}>{item.sobrenome}</li>
        ))}</ul>
      </div>      
  )

}

export default App;