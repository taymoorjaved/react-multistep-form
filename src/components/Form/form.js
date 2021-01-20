import React, {useState} from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Stepper,
  StepLabel,
  Step,
  Button,
  Container,
  Card,
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import FirstStep from '../Step_1/step1';
import SecondStep from '../Step_2/step2';
import ThirdStep from '../Step_3/step3';
import './form.css';

const MultiStepForm = () => {
  const [bookingDetail, setBookingDetail] = useState({});

  const getSteps = () => {
    return [
      'Where & When to Travel',
      'Personal Information',
      'Preview Your Ticket',
    ];
  };

  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setBookingDetail({});
    setActiveStep(0);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FirstStep
            setBookingDetail={setBookingDetail}
            bookingDetail={bookingDetail}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <SecondStep
            bookingDetail={bookingDetail}
            setBookingDetail={setBookingDetail}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <ThirdStep
            bookingDetail={bookingDetail}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  return (
    <>
      <AppBar position='static'>
        <Toolbar variant='dense'>
          <Typography variant='h6' color='inherit' className='topbar-txt'>
            Ticket Booking Multistep Form
          </Typography>
        </Toolbar>
      </AppBar>

      <Container className='info-text'>
        <Card className='info-card'>
          ⚠️Go ahead fill me with your information I'm just a frontend demo
          form, Yes only you can see your information and no real booking will
          be made.
        </Card>
      </Container>

      <div className='main-container'>
        <Stepper alternativeLabel activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Container>
                <Card className='my-card'>
                  <CheckCircleOutlineIcon className='my-icon success-icon' />
                  <Container className='reset-cont'>
                    <Typography variant='h6' className='title'>
                      All steps completed - Please check Confirmation Email 😃
                    </Typography>
                  </Container>
                </Card>
                <Button
                  className='scuess-btn'
                  variant='contained'
                  color='primary'
                  onClick={handleReset}
                >
                  Reset
                </Button>
              </Container>
            </div>
          ) : (
            <div>
              <Typography>{getStepContent(activeStep)}</Typography>
            </div>
          )}
        </div>
      </div>
      <AppBar position='static' className='botton-bar'>
        <h4>Made with ❤️ by Taymoor javed</h4>
      </AppBar>
    </>
  );
};
export default MultiStepForm;
