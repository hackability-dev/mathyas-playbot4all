import styled from '@emotion/styled';
import Typography from "@material-ui/core/Typography"
import ActionCard from "./ActionCard"

const VStyled = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  display: grid;
  grid-template-columns: 1fr 2fr;
`;


export const Vestire = ({ actions, index, voices }) => {
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
          <ActionCard idx={idx} action={action} key={action} voices={voices} />
        ))
        }
      </div>
    </VStyled>
  );
};
