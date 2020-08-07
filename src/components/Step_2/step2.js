import React, { useState } from "react";
import { Formik, Form, yupToFormErrors } from "formik";
import * as Yup from "yup";
import {
  Container,
  Button,
  Typography,
  TextField,
  Card,
  MenuItem,
  InputLabel,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";

import "./step2.css";

const SecondStep = ({
  setBookingDetail,
  handleNext,
  handleBack,
  bookingDetail,
}) => {
  const [step2, setStep2] = useState({
    FirstName: bookingDetail.values ? bookingDetail.values.FirstName : "",
    LastName: bookingDetail.values ? bookingDetail.values.LastName : "",
    Gender: bookingDetail.values ? bookingDetail.values.Gender : "1",
    Age: bookingDetail.values ? bookingDetail.values.Age : "",
    Email: bookingDetail.values ? bookingDetail.values.Email : "",
    Phone: bookingDetail.values ? bookingDetail.values.Phone : "",
    Company: bookingDetail.values ? bookingDetail.values.Company : "",
    Address: bookingDetail.values ? bookingDetail.values.Address : "",
    State: bookingDetail.values ? bookingDetail.values.State : "",
    Country: bookingDetail.values ? bookingDetail.values.Country : "",
  });

  return (
    <>
      <Container className='step2-container'>
        <Formik
          initialValues={step2}
          validationSchema={Yup.object().shape({
            FirstName: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("FirstName Required"),
            LastName: Yup.string()
              .min(2, "Too Short!")
              .max(50, "Too Long!")
              .required("LastName Required"),
            Age: Yup.number()
              .min(18, "Too young for this!")
              .max(100, "Are you a Dinosaurs")
              .required("Age Required"),
            Email: Yup.string()
              .email()
              .max(50, "Nice Try")
              .required("Email Required"),
            Phone: Yup.number().required("Phone Number Required"),
            Company: Yup.string().max(50, "Nice Try"),
            Address: Yup.string()
              .min(4, "Too Short!")
              .max(120, "Too Long!")
              .required("Address Required"),
            State: Yup.string()
              .min(2, "Too Short!")
              .max(40, "Too Long!")
              .required("State Required"),
            Country: Yup.string()
              .min(2, "Too Short!")
              .max(40, "Too Long!")
              .required("Country Required"),
          })}
          onSubmit={(values) => {
            setStep2(values);
            setBookingDetail({ values, ...bookingDetail });
            handleNext && handleNext();
          }}
        >
          {({ values, errors, touched, handleChange, handleBlur }) => (
            <Form>
              <Card className='my-card'>
                <PersonIcon className='my-icon' />
                <Typography variant='h6' className='title'>
                  Personal Information
                </Typography>
                <Container>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='FristName*'
                    variant='outlined'
                    helperText={touched.FirstName && errors.FirstName}
                    className='myFields'
                    type='text'
                    value={values.FirstName}
                    name='FirstName'
                    error={errors.FirstName && touched.FirstName}
                  />
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='LastName*'
                    variant='outlined'
                    helperText={touched.LastName && errors.LastName}
                    className='myFields'
                    type='text'
                    value={values.LastName}
                    name='LastName'
                    error={errors.LastName && touched.LastName}
                  />
                </Container>
                <Container>
                  <TextField
                    id='select'
                    label='Gender*'
                    className='myFields'
                    select
                    variant='outlined'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    helperText={touched.Gender && errors.Gender}
                    value={values.Gender}
                    name='Gender'
                    error={errors.Gender && touched.Gender}
                  >
                    <MenuItem value={1}>Male</MenuItem>
                    <MenuItem value={2}>Female</MenuItem>
                  </TextField>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Age*'
                    variant='outlined'
                    helperText={touched.Age && errors.Age}
                    className='myFields'
                    type='number'
                    value={values.Age}
                    name='Age'
                    error={errors.Age && touched.Age}
                  />
                </Container>
                <Container>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Email*'
                    variant='outlined'
                    helperText={touched.Email && errors.Email}
                    className='myFields'
                    type='email'
                    value={values.Email}
                    name='Email'
                    error={errors.Email && touched.Email}
                  />
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Phone*'
                    variant='outlined'
                    helperText={touched.Phone && errors.Phone}
                    className='myFields'
                    type='number'
                    value={values.Phone}
                    name='Phone'
                    error={errors.Phone && touched.Phone}
                  />
                </Container>
                <Container>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Company'
                    variant='outlined'
                    helperText={touched.Phone && errors.Company}
                    className='myFields'
                    type='text'
                    value={values.Company}
                    name='Company'
                    error={errors.Company && touched.Company}
                  />
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Address*'
                    variant='outlined'
                    helperText={touched.Address && errors.Address}
                    className='myFields'
                    type='text'
                    value={values.Address}
                    name='Address'
                    error={errors.Address && touched.Address}
                  />
                </Container>
                <Container className='last-section'>
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='State*'
                    variant='outlined'
                    helperText={touched.State && errors.State}
                    className='myFields'
                    type='text'
                    value={values.State}
                    name='State'
                    error={errors.State && touched.State}
                  />
                  <TextField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    label='Country*'
                    variant='outlined'
                    helperText={touched.Country && errors.Country}
                    className='myFields'
                    type='text'
                    value={values.Country}
                    name='Country'
                    error={errors.Country && touched.Country}
                  />
                </Container>
              </Card>
              <Button
                variant='contained'
                className='step2-btn'
                onClick={handleBack}
                color='primary'
              >
                back
              </Button>
              <Button
                type='submit'
                className='step2-btn'
                variant='contained'
                color='primary'
              >
                Next
              </Button>
            </Form>
          )}
        </Formik>
      </Container>
    </>
  );
};
export default SecondStep;
