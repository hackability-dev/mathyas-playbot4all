import styled from '@emotion/styled';
import { Timeline } from './Timeline';
import {Displayer} from './Displayer';
import { useEffect, useState } from 'react';
import {tasks} from "./tasks"

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function App({voices}) {
  const [tasks, setTasks] = useState([])
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setInterval(() => setIndex(index => ++index), 3000)
  }, [])
  useEffect(() => {
    fetch("https://a6a36ec8cdfb.ngrok.io/api/tasks/findDay").then(res => {return res.json()}).then(data => {setTasks(data)})
  }, [])
/*useEffect(() => {
    console.log(currentHour)
  }, [])
*/

  //console.log(tasks)
  if (tasks.length === 0){
    return <h1>"vuoto"</h1>
  }
  var currentHour = new Date().getHours();
  console.log(currentHour)
  for (let j=0; j<tasks.length; j++) {
  if (tasks[j].start<=currentHour && tasks[j].end>=currentHour) {
      //for (let i = 0; i < tasks[j].actions.length; i++){
        return <AppStyled>
              <Timeline/>
              <Displayer nome={tasks[j].name} actions={tasks[j].actions} index={index} voices={voices}/>
            </AppStyled>;
      //}      
    }    
  }
  return <h1>"fine"</h1>

  


  // if (index < tasks.vestire.length) {
  //   return <AppStyled>
  //       <Timeline/>
  //       <Vestire actions={tasks.vestire} index={index} voices={voices}/>
  //     </AppStyled>;
  // } else {
  //   return <AppStyled>
  //       <Timeline/>
  //       <Mangiare actions={tasks.mangiare} index={index - tasks.vestire.length} voices={voices}/>
  //     </AppStyled>;
  // }
}

export default App