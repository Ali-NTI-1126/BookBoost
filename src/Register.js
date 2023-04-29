import Login from './Login';
import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button, InputGroupAddon, InputGroupText, InputGroup } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './RegistrationForm.css';
import logo from './icons/BB.png';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useHistory } from 'react-router-dom';


const RegistrationForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showLogin, setShowLogin] = useState(false);
  const history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      phone: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
      phone: Yup.string().required('Phone number is required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      console.log(values);
    
      try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        const data = await response.json();
    
        console.log('Registration successful:', data);
        resetForm();
        window.location.href = '/welcome';
        history.push('/welcome'); 
      } catch (error) {
        console.error('Registration failed:', error);
      }
    
      setSubmitting(false);
    },
    
    
  });

  const disableButton =
  submitting ||
  !formik.isValid ||
  confirmPassword !== formik.values.password;


  const handleLoginClick = () => {
    setShowLogin(true);
  }

  if (showLogin) {
    return <Login />;
  }
    
  
  return (
    <div className='body'> 
    <div className="register-container">
      <div className="flex justify-center mb-7">
      <a href="/"><img src={logo} alt="logo" /></a>
    </div>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            invalid={formik.touched.name && formik.errors.name}
          />
          {formik.touched.name && formik.errors.name && (
            <div className="text-danger">{formik.errors.name}</div>
          )}
        </FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            invalid={formik.touched.email && formik.errors.email}
          />
          {formik.touched.email && formik.errors.email && (
            <div className="text-danger">{formik.errors.email}</div>
          )}

          <FormGroup>
          <Label htmlFor="phone">Phone</Label>
          <PhoneInput
          id="phone"
          name="phone"
          country={'se'}
          value={formik.values.phone}
          onChange={(phone) => formik.setFieldValue('phone', phone)}
          onBlur={formik.handleBlur}
    
          />
          {formik.touched.phone && formik.errors.phone && (
          <div className="text-danger">{formik.errors.phone}</div>
          )}
          </FormGroup>


        <br></br>


        <FormGroup>
         <Label htmlFor="password">Password</Label>
         <div className="password-input">
          <div className="password-icon" onClick={() => setShowPassword(!showPassword)}>
          <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
        </div>
        
        <Input
        type={showPassword ? "text" : "password"}
        id="password"
        name="password"
        placeholder="Enter your password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        invalid={formik.touched.password && formik.errors.password}/>
        </div>

        
        </FormGroup>

        <FormGroup>
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input
    type="password"
    id="password_confirmation"
    name="password_confirmation"
    placeholder="Confirm your password"
    onChange={(e) => {
      formik.handleChange(e);
      setConfirmPassword(e.target.value);
    }}
    onBlur={formik.handleBlur}
    value={confirmPassword}
    invalid={confirmPassword !== formik.values.password}
  />
  {confirmPassword !== formik.values.password && (
    <div className="text-danger">Passwords do not match</div>
  )}
    </FormGroup>

        <Button
          className="btn-submit mt-4"
          type="submit"
          disabled={disableButton}
        >
          {submitting ? 'Submitting...' : 'Sign Up'}
        </Button>
        <br/><br/>

        <a href="/login" class="login-link">Already have an account? Login</a>
 
      </Form>
    </div>
    </div>
  );
};

export default RegistrationForm;
