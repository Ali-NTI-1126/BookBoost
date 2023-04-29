import React, { useState } from 'react';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './loginForm.css';
import logo from './icons/BB.png';
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const [submitting, setSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string().email('Invalid email address').required('Email is required'),
      password: Yup.string().required('Password is required'),
    }),

    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      setError(null);

      try {
        const response = await fetch('http://127.0.0.1:8000/api/auth/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(values)
        });
        const data = await response.json();
        if (response.ok) {
          console.log(data);

          switch (data.role) {
            case 'admin':
              history.push('/admin');
              window.location.href = '/admin';
              break;
            case 'hotel admin':
              history.push('/hotel-admin');
              window.location.href = '/hotel-admin';
              break;
            case 'facility manager':
              history.push('/facility');
              window.location.href = '/facility';
              break;
            case 'guest':
              history.push('/');
              window.location.href = '/';
              break;
            default:
              console.error('Invalid role');
          }
        } else {
          throw new Error('Invalid email or password');
        }
      } catch (error) {
        console.error('Login failed:', error);
        setError('Invalid email or password');
      }
      

      resetForm();
      setSubmitting(false);
    }
  });

  const disableButton = submitting || !formik.isValid;

  return (
    <div className="login-container">
      <div className="flex justify-center mb-7">
      <a href="/"><img src={logo} alt="logo" /></a>
    </div>
      <Form onSubmit={formik.handleSubmit}>
        <FormGroup>
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
        </FormGroup>
        <FormGroup>
  <Label htmlFor="password">Password</Label>
  <div className="password-input-container">
    <Input
      type={showPassword ? 'text' : 'password'}
      id="password"
      name="password"
      placeholder="Enter your password"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.password}
      invalid={formik.touched.password && formik.errors.password}
    />
    {error && (
    <div className="text-danger">{error}</div>
    )}

    <div
      className="password-toggle-icon"
      onClick={() => setShowPassword(!showPassword)}
    >
      <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
    </div>
  </div>
  {formik.touched.password && formik.errors.password && (
    <div className="text-danger">{formik.errors.password}</div>
  )}
</FormGroup>

        <Button
          className="btn-submit mt-4"
          type="submit"
          disabled={disableButton}
        >
          {submitting ? 'Logging in...' : 'Login'}
        </Button>
        <br/><br/>

        <a href="/register" class="register-link">Don't have an account? Sign up</a>
 
      </Form>
    </div>
  );
};

export default LoginForm;
