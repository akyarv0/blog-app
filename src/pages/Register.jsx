import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { object, string } from 'yup';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

export const registerSchema = object({
  username: string()
    .max(20, "Kullanıcı adı 20 karakterden az olmalıdır.")
    .required("Kullanıcı adı zorunludur"),
  firstName: string()
    .max(20, "İsim 20 karakterden az olmalıdır.")
    .required("İsim zorunludur"),
  lastName: string()
    .max(30, "Soyisim 30 karakterden az olmalıdır.")
    .required("Soyisim zorunludur"),
  email: string()
    .email("Lütfen geçerli bir email giriniz.")
    .required("Email zorunludur"),
  password: string()
    .required("Şifre zorunludur")
    .min(8, "Şifre en az 8 karakter olmalıdır")
    .max(20, "Şifre en fazla 20 karakter olmalıdır")
    .matches(/\d+/, "Şifre bir sayı içermelidir")
    .matches(/[a-z]/, "Şifre bir küçük harf içermelidir")
    .matches(/[A-Z]/, "Şifre bir büyük harf içermelidir")
    .matches(/[!@#$%^&*(),\\.?":{}|<>]+/, "Şifre bir özel karakter içermelidir"),
});

const Register = () => {
  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="flex justify-center h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/3" style={{ backgroundImage: 'url(https://media.giphy.com/media/fC6BAcnLFF2o/giphy.gif)' }}>
          <div className="flex items-center h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-4xl font-bold text-white">Welcome</h2>
              <p className="max-w-xl mt-3 text-gray-300">Create an account to join our awesome community and start exploring amazing features!</p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <h2 className="text-4xl font-bold text-center text-gray-700 dark:text-white">Register</h2>
              <p className="mt-3 text-gray-500 dark:text-gray-300">Sign up to create an account</p>
            </div>

            <div className="mt-8">
              <Formik
                initialValues={{
                  username: '',
                  firstName: '',
                  lastName: '',
                  email: '',
                  password: '',
                }}
                validationSchema={registerSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {() => (
                  <Form>
                    <div className="mb-4">
                      <label htmlFor="username" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Username</label>
                      <Field name="username" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <ErrorMessage name="username" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">First Name</label>
                      <Field name="firstName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Last Name</label>
                      <Field name="lastName" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <ErrorMessage name="lastName" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Email</label>
                      <Field name="email" type="email" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <ErrorMessage name="email" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">Password</label>
                      <Field name="password" type="password" className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40" />
                      <ErrorMessage name="password" component="div" className="text-red-600 text-sm mt-1" />
                    </div>
                    
                    <Link to="/" type="submit" className="block w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-700">Register</Link>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
