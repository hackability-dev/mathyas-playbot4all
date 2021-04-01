import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import Card from "@material-ui/core/Card"
import Typography from "@material-ui/core/Typography"

const VStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;


export const Vestire = ({ actions, index }) => {

  const filteredActions = actions.filter((_, indice) => indice >= index)
  return (
    <VStyled>
      <div style={{
        paddingTop: "32px",
        textAlign: "center"
      }}
      >
        <Typography variant="h2">È ora di vestirsi:</Typography>
      </div>

      <div >
        {filteredActions.map((action, idx) => (
          <Card style={{
            height: idx === 0 ? "448px" : "128px",
            width: idx === 0 ? "calc(100% - 32px)" : "calc(100% - 512px)",
            margin: idx === 0 ? "16px" : "16px 256px",
            backgroundColor: idx === 0 ? "#0057cb" : "white",
            display: "grid",
            placeContent: "center",
            borderRadius: "8px"
          }}
            key={idx}
            elevation={4}>
            <Typography style={{
              fontSize: idx === 0 ? "128px" : "64px",
              fontWeight: 300,
              color: idx === 0 ? "white" : "black",
            }}>
              {action}
            </Typography></Card>
        ))}
      </div>
    </VStyled>
  );
};
