import styled from '@emotion/styled';
import { Timeline } from './Timeline';
import {Vestire} from './Vestire';
import {Mangiare} from './Mangiare';
import {Alzarsi} from './Alzarsi';
import {Colazione} from './Colazione';
import {LavarsiDenti} from './LavarsiDenti';
import {Bagno} from './Bagno';
import { useEffect, useState } from 'react';
import {tasks} from "./tasks"


const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

let act = []; //array per memorizzare le attività ricevute nel file JSON
let cont = 0; //Contatore per tenere traccia l'id dell'attività corrente
let c = 0; //Contatore per tenere traccia delle azioni rimanenti relative all'attività corrente

//Inizializzazione dell'array
function init(){
  for(let i = 0; i < tasks.t.length; i++){
    act[i] = tasks.t[i].id;
    //Inizializzazione della lunghezza della prima attività da mostrare
    if(i == 0)
      c=tasks.t[i].actions.length;
  }
}

//Calcolo dell'offset per l'index delle attività
function count_length(){
  var l=0;
  for(var i=0; i<cont; i++){
    l += tasks.t[i].actions.length;
  }
  return l;
}

//Incremento dei contatori per passare da una azione a un'altra oppure da una attività alla successiva
function updateCont(){
    if(c<1){
      cont++;
      if(cont<tasks.t.length)
        c=tasks.t[cont].actions.length;
    }
    else 
      c-=0.5;
}

//Ricava l'array di azioni riferite all'id dell'attività corrente
function show_actions(id){
  let show = [];
  let j = 0;

  for(let j = 0; j < tasks.t.length; j++){
    if(id === tasks.t[j].id)
      show = tasks.t[j].actions;
  }
  return show;
}

init();

var len = 0;

function App() {
  
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setInterval(() => setIndex(index => ++index), 3000)
  }, [])


  if (0 === act[cont]) {
    len = count_length();
    
    updateCont();
    return <AppStyled>
      <Timeline />
      <Alzarsi actions={show_actions(0)} index={index - len} />
    </AppStyled>;
  } else{
      if(1 === act[cont]){
        len = count_length();

        updateCont();
        return <AppStyled >
          <Timeline />
            <Colazione actions={show_actions(1)} index={index - len} />
        </AppStyled>;
      } else if(2 === act[cont]){
        len = count_length();
        updateCont();
        return <AppStyled >
        <Timeline />
          <Bagno actions={show_actions(2)} index={index - len} />
        </AppStyled>;
      } else if(3 === act[cont]){
            len = count_length();

            updateCont();
            return <AppStyled >
              <Timeline />
                <LavarsiDenti actions={show_actions(3)} index={index - len} />
            </AppStyled>;
          } else if(4 === act[cont]){
            len = count_length();
            updateCont();
            return <AppStyled >
            <Timeline />
              <Vestire actions={show_actions(4)} index={index - len} />
            </AppStyled>;
          } else if(5 === act[cont]){
            len = count_length();
            updateCont();
            return <AppStyled >
              <Timeline />
                <Mangiare actions={show_actions(5)} index={index - len} />
              </AppStyled>;
          } 
          else{
            return <div></div>;
          }
      }
    }
              
      
  


export default App