import React from 'react'
import { Field, Form, Formik } from 'formik'
import { withRouter } from "react-router-dom";
import './HomePage.css'

class HomePage extends React.Component {
    constructor(props) {
        super(props)
       
       this.addFormData = props.addFormdata
        
    }
    render() {
        
       
        const checkField = (value) => {
            if (!value) return "Required";
            if (value.length < 3) return "Enter three or more characters";
        }

        const checkDateTime = (value) => {
            if (!value) return "Required";
            if (new Date(value).getTime() < new Date().getTime()) return "Pick a date/time greater than now"
        }


        return (
            <div className='Form-container' style={{ backgroundImage: `url(./backGround1.jpg)` }}>
                <Formik className='Form'
                    initialValues={{
                        mainHeadline: "",
                        secondHeadline: "",
                        subText: "",
                        btnText: "",
                        dateTime: "",
                        bckGround: ""
                    }}
                    // validate={values => {
                    //     console.log('validating', values)
                    // }}
                    onSubmit={values => {
                        
                        this.addFormData( values )
                        this.props.history.push('./timer')
                    }}
                >
                    {({ errors, touched, isValidating }) => (
                        <Form className="Form">
                            <h4> Build Your Landing Page</h4>
                            <div className='Main-Headline'>
                                <h6>Main Headline</h6>
                                <Field name="mainHeadline" type='text' validate={checkField} />
                                {errors.mainHeadline && touched.mainHeadline && <div className="error">{errors.mainHeadline}</div>}
                            </div>
                            <div className='Secondary-Headline'>
                                <h6>Secondary Headline</h6>
                                <Field name="secondHeadline" type='text' validate={checkField} />
                                {errors.secondHeadline && touched.secondHeadline && <div className="error">{errors.secondHeadline}</div>}
                            </div>
                            <div className='Subtext'>
                                <h6>Subext</h6>
                                <Field name="subText" type='text' validate={checkField} />
                                {errors.subText && touched.subText && <div className="error">{errors.subText}</div>}
                            </div>
                            <div className='Button-Text'>
                                <h6>Button Text</h6>
                                <Field name="btnText" type='text' validate={checkField} />
                                {errors.btnText && touched.btnText && <div className="error">{errors.btnText}</div>}
                            </div>
                            <div className='Date-Time'>
                                <h6>When will promo end?</h6>
                                <Field name="dateTime" type="datetime-local" validate={checkDateTime} />
                                {errors.dateTime && touched.dateTime && <div className="error">{errors.dateTime}</div>}
                            </div>

                            <div className='background-picker'>
                                <label>
                                    <Field className='radio' type='radio' name='bckGround' value="One" checked />
                                    <img src="background1.jpg" alt='' />
                                </label>
                                <label>
                                    <Field className='radio' type='radio' name='bckGround' value="Two" />
                                    <img src="background2.jpg" alt='' />
                                </label>
                            </div>
                            <button type="submit">Start Timer</button>
                        </Form>
                    )}
                </Formik>
            </div>
        )
    }
}

export default withRouter(HomePage)