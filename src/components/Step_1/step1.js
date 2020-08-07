import React, { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Container,
  Button,
  Typography,
  TextField,
  FormControlLabel,
  InputLabel,
  MenuItem,
  RadioGroup,
  Radio,
  FormLabel,
  Card,
} from "@material-ui/core";
import FlightTakeoffIcon from "@material-ui/icons/FlightTakeoff";
import "./step1.css";

const FirstStep = ({ setBookingDetail, handleNext, bookingDetail }) => {
  const [step1, setStep1] = useState({
    From: bookingDetail.From ? bookingDetail.From : "",
    To: bookingDetail.To ? bookingDetail.To : "",
    ticket: bookingDetail.ticket ? bookingDetail.ticket : "",
    startDate: bookingDetail.startDate ? bookingDetail.startDate : "",
    endDate: bookingDetail.endDate ? bookingDetail.endDate : "",
    NoTravellers: bookingDetail.NoTravellers ? bookingDetail.NoTravellers : "1",
    travelClass: bookingDetail.travelClass ? bookingDetail.travelClass : "1",
  });

  return (
    <>
      <Container>
        <Formik
          initialValues={step1}
          validationSchema={Yup.object().shape({
            From: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("Departure Destination Required"),
            To: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("Arrival Destination Required"),
            startDate: Yup.date().required("Date Required"),
            endDate: Yup.date().required("Date Required"),
          })}
          onSubmit={(values) => {
            setStep1(values);
            setBookingDetail(values);
            handleNext && handleNext();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form className='form'>
              <Card className='my-card'>
                <FlightTakeoffIcon className='my-icon' />
                <Typography variant='h6' className='title'>
                  Where & When to Travel
                </Typography>
                <Container className='firstSection'>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='From: Country,City'
                    variant='outlined'
                    helperText={touched.From && errors.From}
                    type='text'
                    value={values.From}
                    name='From'
                    error={errors.From && touched.From}
                  />
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='To: Country,City'
                    variant='outlined'
                    helperText={touched.To && errors.To}
                    type='text'
                    value={values.To}
                    name='To'
                    error={errors.To && touched.To}
                  />
                </Container>
                <Container className='secondSection section'>
                  <FormLabel>
                    <RadioGroup
                      name='ticket'
                      defaultValue='Return'
                      onChange={handleChange}
                    >
                      <FormControlLabel
                        value='Return'
                        control={<Radio color='primary' />}
                        label='Return'
                      />
                      <FormControlLabel
                        value='OneWay'
                        control={<Radio color='primary' />}
                        label='OneWay'
                      />
                    </RadioGroup>
                  </FormLabel>
                </Container>
                <Container className='thirdSection section'>
                  <Container className='section-first-item'>
                    <InputLabel id='label'>Depart</InputLabel>
                    <TextField
                      id='start-date'
                      variant='outlined'
                      name='startDate'
                      type='date'
                      helperText={touched.startDate && errors.startDate}
                      error={errors.startDate && touched.startDate}
                      onChange={handleChange}
                      defaultValue={step1.startDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Container>
                  <Container className='section-second-item'>
                    <InputLabel id='label'>Return</InputLabel>
                    <TextField
                      id='end-date'
                      variant='outlined'
                      name='endDate'
                      type='date'
                      helperText={touched.endDate && errors.endDate}
                      error={errors.endDate && touched.endDate}
                      onChange={handleChange}
                      defaultValue={step1.endDate}
                      InputLabelProps={{
                        shrink: true,
                      }}
                    />
                  </Container>
                  <Container className='section-third-item'>
                    <InputLabel id='label'>No. Travellers</InputLabel>
                    <TextField
                      id='select'
                      select
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.NoTravellers}
                      value={values.NoTravellers}
                      name='NoTravellers'
                      error={errors.NoTravellers && touched.NoTravellers}
                    >
                      <MenuItem value={1}>One</MenuItem>
                      <MenuItem value={2}>Two</MenuItem>
                      <MenuItem value={3}>Three</MenuItem>
                      <MenuItem value={4}>Four</MenuItem>
                      <MenuItem value={5}>Five</MenuItem>
                    </TextField>
                  </Container>
                  <Container className='section-fourth-item'>
                    <InputLabel id='label'>Cabin Class</InputLabel>
                    <TextField
                      id='select'
                      select
                      variant='outlined'
                      onChange={handleChange}
                      onBlur={handleBlur}
                      helperText={errors.travelClass}
                      value={values.travelClass}
                      name='travelClass'
                      error={errors.travelClass && touched.travelClass}
                    >
                      <MenuItem value={1}>Economy</MenuItem>
                      <MenuItem value={2}>First Class</MenuItem>
                    </TextField>
                  </Container>
                </Container>
              </Card>
              <Button type='submit' variant='contained' color='primary'>
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default FirstStep;
