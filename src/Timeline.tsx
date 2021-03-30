import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';


export const Timeline = () => {
  return <Stepper style={{
    padding: "24px 96px" 
  }}>
    <Step >
      <StepLabel>Mattina</StepLabel>
    </Step>
    <Step >
      <StepLabel>Pomeriggio</StepLabel>
    </Step>
    <Step >
      <StepLabel>Sera</StepLabel>
    </Step>
  </Stepper>
}

