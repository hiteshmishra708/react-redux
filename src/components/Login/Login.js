import React, { Component } from 'react';
import Aux from '../../hoc/ux';

// form
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class Login extends Component {

    // constructor(props) {
    //     super(props)
    // }


    render() {
        return (<Aux>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        {/* <button onClick={() => this.props.history.push('/showtodo')} >
                login        </button>        */}
                        <Formik
                            initialValues={{ email: '', password: '' }}
                            onSubmit={(values, { setSubmitting }) => {
                                setSubmitting(false);
                                sessionStorage.setItem('auth',true)
                                this.props.history.push('/showtodo')


                                // setTimeout(() => {
                                //     alert(JSON.stringify(values, null, 2));
                                // }, 500);
                            }}
                            validationSchema={Yup.object().shape({
                                email: Yup.string()
                                    .email()
                                    .required('Required'),
                                password: Yup.string()
                                    .required('Required'),
                            })}
                        >
                            {props => {
                                const {
                                    values,
                                    touched,
                                    errors,
                                    dirty,
                                    isSubmitting,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    handleReset,
                                } = props;
                                return (
                                    <Form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Email</label>
                                            <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                            <ErrorMessage name="email" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="firstName">Password</label>
                                            <Field name="password" type="text" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                        </div>
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-primary mr-2" disabled={isSubmitting} >Register</button>
                                            {/* <button type="reset" className="btn btn-secondary">Reset</button> */}
                                        </div>

                                        {/* <button
                                            type="button"
                                            className="outline"
                                            onClick={handleReset}
                                        >Reset</button>
                                        <button type="submit"
                                        disabled={isSubmitting} 
                                        >
                                            Submit</button> */}
                                    </Form>
                                );
                            }}
                        </Formik>
                    </div> </div> </div>

        </Aux>)
    }
}



export default (Login);