import Counter from './Counter'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/*
const App = () => <ThemeProvider theme={createMuiTheme({
  palette: {
    primary: {
      main: "#0057cb",
    },
  },
})} > 
{if index <=  Vestire.actions.length
  <AppStyled>
      <Timeline
      />
      <Vestire />
    </AppStyled>
    else
    <AppStyled>
      <Timeline
      />
      <Mangiare />
    </AppStyled>
}
</ ThemeProvider>
*/


const App = () => {
  return <ThemeProvider theme={createMuiTheme({
    palette: {
      primary: {
        main: "#0057cb",
      },
    },
  })} >
<Counter />
</ThemeProvider>;
}

export default App