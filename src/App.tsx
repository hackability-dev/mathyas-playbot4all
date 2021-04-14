import { useState } from "react"
import Counter from './Counter'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CircularProgress from "@material-ui/core/CircularProgress"


const App = () => {
  //listener che si accorge quando le voci sono caricate
  const [voices, setVoices] = useState([])
  ///@ts-ignore
  speechSynthesis.addEventListener('voiceschanged', () => setVoices(speechSynthesis.getVoices()))

  return <ThemeProvider theme={createMuiTheme({
    palette: {
      primary: {
        main: "#0057cb",
      },
    },
  })} >
    {voices[0] ? <Counter voices={voices}/> : <CircularProgress size={60} style={{
      //centra il caricamento
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)"
    }} />}
  </ThemeProvider>;
}

export default App
