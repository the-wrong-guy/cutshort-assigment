import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import StepIcon from './components/StepIcon';
//steps
import StepOne from './components/Steps/StepOne';
import StepTwo from './components/Steps/StepTwo';
import StepThree from './components/Steps/StepThree';
import FinalStep from './components/Steps/FinalStep';

const steps = [<StepOne />, <StepTwo />, <StepThree />, <FinalStep />];

function App() {
   const [currentStep, setCurrentStep] = React.useState(0);

   const handleClick = () => {
      setCurrentStep((prev) => {
         if (prev === 3) return 0;
         return prev + 1;
      });
   };
   return (
      <Container
         sx={{ py: 10, minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10 }}
      >
         <div className="flex items-center gap-1">
            <img src={require('./assets/logo.PNG')} alt="eden" />
            <Typography variant="h4" align="center" fontWeight={600}>
               Eden
            </Typography>
         </div>

         <div className="flex flex-col gap-6 w-full md:items-center">
            <Stepper activeStep={currentStep} sx={{ mb: 5 }} className="w-full md:w-[400px]">
               {steps.map((STEP, index) => (
                  <Step key={index}>
                     <StepLabel
                        StepIconComponent={(props) => (
                           <StepIcon index={index} completed={props.completed} active={props.active} />
                        )}
                     />
                  </Step>
               ))}
            </Stepper>
            {steps[currentStep]}
            <Button variant="contained" color="primary" onClick={handleClick} className="w-full md:w-[400px]">
               Create Workspace
            </Button>
         </div>
      </Container>
   );
}

export default App;
