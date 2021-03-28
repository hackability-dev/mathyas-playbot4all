import styled from '@emotion/styled';
import { FC, useEffect, useState } from 'react';

const VStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ccc;
  display: grid;
  grid-template-columns: 1fr 2fr;
  .left {
    padding: 20px;
  }
`;

const actions = ['mutande', 'maglietta', 'pantaloni', 'calze', 'felpa'];

export const Vestire = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    setInterval(() => setIndex(index + 1), 5000);
  }, [index]);

  const filteredActions = actions.filter((_, i) => i >= index);

  return (
    <VStyled>
      <div className="left">
        <h1>Vestiti</h1>
      </div>
      <div className="right">
        {filteredActions.map((a, idx) => (
          <Timeline active={idx === 0} key={idx}>
            <p>{a}</p>
          </Timeline>
        ))}
      </div>
    </VStyled>
  );
};

const TimelineStyled = styled.div<{ active: boolean }>`
  height: 200px;
  width: 80%;
  margin: 10px;
  background-color: ${(props) => {
    if (props.active) {
      return 'red';
    } else {
      return '#ccc';
    }
  }};
  display: grid;
  place-content: center;
  color: white;
  font-size: 40px;
`;
const Timeline: FC<{ active: boolean }> = ({ children, active }) => {
  return <TimelineStyled active={active}>{children}</TimelineStyled>;
};
