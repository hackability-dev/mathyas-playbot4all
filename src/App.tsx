import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { Timeline } from './Timeline';
import { Vestire } from './Vestire';

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

function App() {
  const [cnt, setCnt] = useState(0);
  useEffect(() => {
    setTimeout(() => setCnt(cnt + 1), 1000);
  }, [cnt]);

  return (
    <AppStyled>
      <Timeline
        values={[
          { active: false, color: 'red', name: 'Mattina' },
          { active: false, color: 'blue', name: 'Pomeriggio' },
          { active: false, color: 'green', name: 'Sera' },
        ]}
      />
      <Vestire />
    </AppStyled>
  );
}

export default App;
