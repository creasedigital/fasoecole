import * as Yup from 'yup';
import "yup-phone";


export default function SignUpValidationSchema() {
  // const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

    return Yup.object().shape({
      name: Yup.string().required('Name is required'),
      email: Yup.string()
        .required('Email is required')
        .email('Email is invalid'),
      phone: Yup.string().required('Enter a valid phone number'),
      password: Yup.string()
        .required('Password is required')
        .min(6, 'Password must be at least 6 characters')
        .max(40, 'Password must not exceed 40 characters'),
    
      /* confirmPassword: Yup.string()
        .required('Confirm Password is required')
        .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
      acceptTerms: Yup.bool().oneOf([true], 'Accept Terms is required'), */
    });
  }