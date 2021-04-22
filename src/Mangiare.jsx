import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import pranzo from './images/pranzo.jpg';
import styled from '@emotion/styled';

const useStyles = makeStyles({
  media: {
    height: 500,
    width: 500
  },
});

const VStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;

export const Mangiare = ({ actions, index }) => {
  const classes = useStyles();
  const filteredActions = actions.filter((_, indice) => indice >= index)

  return (
    <VStyled>
        <div style={{
        paddingTop: "32px",
        textAlign: "center"
        }}
        >
            <Typography variant="h2">È ora di mangiare:</Typography>
        </div>
        <div >
            {filteredActions.map((action, idx) => (
                <Card style={{
                    height: idx === 0 ? "448px" : "128px",
                    width: idx === 0 ? "calc(100% - 32px)" : "calc(100% - 512px)",
                    margin: idx === 0 ? "16px" : "16px 256px",
                    backgroundColor: idx === 0 ? "#ffffff" : "white",
                    display: "grid",
                    placeContent: "center",
                    borderRadius: "8px"
                }} key={idx}
                elevation={4}>
                <CardActionArea>
                    <CardMedia component = "img"
                    className={classes.media}
                    image = {pranzo}
                    title="Contemplative Reptile"
                    />
                </CardActionArea>
                </Card>
            ))}
        </div>
    </VStyled>
  );
}