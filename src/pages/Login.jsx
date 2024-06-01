import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Lütfen geçerli bir email giriniz.')
    .required('Email zorunludur'),
  password: Yup.string()
    .required('Şifre zorunludur')
    .min(8, 'Şifre en az 8 karakter olmalıdır')
    .max(20, 'Şifre en fazla 20 karakter olmalıdır')
    .matches(/\d+/, 'Şifre bir sayı içermelidir')
    .matches(/[a-z]/, 'Şifre bir küçük harf içermelidir')
    .matches(/[A-Z]/, 'Şifre bir büyük harf içermelidir')
    .matches(/[!@#$%^&*(),.?":{}|<>]+/, 'Şifre bir özel karakter içermelidir'),
});

const Login = () => {
  return (
    <div className="bg-white dark:bg-gray-900 ">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif)' }}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-10">
            <div>
              <h2 className="text-4xl font-bold text-white">Brand</h2>
              <p className="max-w-xl mt-3 text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. In autem ipsa, nulla laboriosam dolores, repellendus perferendis libero suscipit nam temporibus molestiae</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6 ">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Brand</h2>
              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign in to access your account</p>
            </div>

            <div className="mt-8">
              <Formik
                initialValues={{
                  email: '',
                  password: '',
                }}
                validationSchema={LoginSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {() => (
                  <Form>
                    <div>
                      <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-200">Email Address</label>
                      <Field name="email" type="email" placeholder="example@example.com" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                    </div>

                    <div className="mt-6">
                      <div className="flex justify-between mb-2">
                        <label htmlFor="password" className="text-sm text-gray-600 dark:text-gray-200">Password</label>
                        <Link to="#" className="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline">Forgot password?</Link>
                      </div>

                      <Field name="password" type="password" placeholder="Your Password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                    </div>

                    <div className="mt-6">
                      <button type="submit" className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:bg-blue-400 focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                        Sign in
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>

              <p className="mt-6 text-sm text-center text-gray-400">Don't have an account yet? <Link to="register" className="text-blue-500 focus:outline-none focus:underline hover:underline">Sign up</Link>.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
