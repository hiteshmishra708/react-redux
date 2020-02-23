import React, { Component } from 'react';
import Aux from '../../hoc/ux';
import { connect } from 'react-redux';

import { increment, decrement, addFive } from '../../store/actions/counter';

// form
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

class AddTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todotodo: 'dgsfhd'
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        alert('The value is: ' + this.state.todo);
        e.preventDefault();
    }
    render() {
        return (<Aux>
            <div class="container">
                <Formik
                    initialValues={{ todo: ''}}
                    onSubmit={(values, { setSubmitting }) => {
                        setSubmitting(false);
                        this.props.history.push('/showtodo')
                        // setTimeout(() => {
                        //     alert(JSON.stringify(values, null, 2));
                        // }, 500);
                    }}
                    validationSchema={Yup.object().shape({
                        todo: Yup.string()
                            .email()
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
                                    <label htmlFor="firstName">Todo</label>
                                    <Field name="todo" type="text" className={'form-control' + (errors.todo && touched.todo ? ' is-invalid' : '')} />
                                    <ErrorMessage name="todo" component="div" className="invalid-feedback" />
                                </div>
                          
                                <div className="form-group">
                                    <button type="submit" className="btn btn-primary mr-2" disabled={isSubmitting} >Add todo</button>
                                </div>
                            </Form>
                        );
                    }}
                </Formik>
            </div>
        </Aux>)
    }
}

const mapStateToProps = (state) => {
    return {
        counter: state.counter.counter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrement: () => dispatch(increment()),
        onDecrement: () => dispatch(decrement()),
        onIncrementByUser: (number) => dispatch(addFive(Number(number)))
        // onIncrement: () => dispatch({type: INC }),
        // onDecrement: () => dispatch({type: DEC }),
        // onIncrementByUser: (number) => dispatch({type: ADD_FIVE, payload: Number(number) })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);