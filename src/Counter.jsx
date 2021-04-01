import styled from '@emotion/styled';
import { Timeline } from './Timeline';
import {Vestire} from './Vestire';
import {Mangiare} from './Mangiare'
import { useEffect, useState } from 'react';
import {tasks} from "./tasks"

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function App() {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    setInterval(() => setIndex(index => ++index), 3000)
  }, [])

  if (index < tasks.vestire.length) {
    return <AppStyled>
        <Timeline />
        <Vestire actions={tasks.vestire} index={index} />
      </AppStyled>;
  } else {
    return <AppStyled >
        <Timeline
        />
        <Mangiare actions={tasks.mangiare} index={index - tasks.mangiare.length} />
      </AppStyled>;
  }
}

export default App