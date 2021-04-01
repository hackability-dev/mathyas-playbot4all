import styled from '@emotion/styled';
import { Timeline } from './Timeline';
import Vestire from './Vestire';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const AppStyled = styled.div`
  display: grid;
  grid-template-rows: auto 1fr;
  height: 100vh;
`;

const App = () => <ThemeProvider theme={createMuiTheme({
  palette: {
    primary: {
      main: "#0057cb",
    },
  },
})} > <AppStyled>
    <Timeline
    />
    <Vestire />
  </AppStyled></ ThemeProvider>

export default App