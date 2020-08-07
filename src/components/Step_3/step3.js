import React from "react";
import { Card, Container, Button, Typography } from "@material-ui/core";
import "./step3.css";

const ThirdStep = ({ bookingDetail, handleBack, handleNext }) => {
  return (
    <Container>
      <Card className='my-card'>
        <Container className='ticket-container'>
          <Container className='ticket-content'>
            <Typography variant='h3' className='my-text-one'>
              {bookingDetail.values.FirstName}
            </Typography>
            <Typography variant='h3' className='my-text-two'>
              {bookingDetail.From}
            </Typography>
            <Typography variant='h3' className='my-text-three'>
              {bookingDetail.To}
            </Typography>
          </Container>
        </Container>
      </Card>
      <Button
        variant='contained'
        className='step2-btn'
        color='primary'
        onClick={handleBack}
      >
        back
      </Button>
      <Button
        variant='contained'
        className='step2-btn'
        color='primary'
        onClick={handleNext}
      >
        Finsh
      </Button>
    </Container>
  );
};
export default ThirdStep;
