import styled from '@emotion/styled';
import { FC } from 'react';

const TimelineStyled = styled.div`
  background-color: #ccc;
  display: flex;
  height: 60px;
  justify-content: space-between;
  align-items: stretch;
  div {
    display: grid;
    place-content: center;
    flex-grow: 1;
  }
`;

const TimelineElemStyled = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
`;

interface TimelineProps {
  values: {
    name: string;
    color: string;
    active: boolean;
  }[];
}

export const Timeline: FC<TimelineProps> = ({ values }) => {
  return (
    <TimelineStyled>
      {values.map((v, idx) => (
        <TimelineElemStyled key={idx} color={v.color}>
          {v.name}
        </TimelineElemStyled>
      ))}
    </TimelineStyled>
  );
};
