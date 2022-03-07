import React, {Component} from "react";
import Field from "../common/Field";
import {withFormik} from "formik";
import * as Yup from 'yup';

const field = {
    section:[
        [
            {name:'name', type:'text', elementName:'input', placeholder:'Your name*'},
            {name:'email', type:'email', elementName:'input', placeholder:'Your email*'},
            {name:'phone', type:'text', elementName:'input', placeholder:'Your phone number*'}
        ],
        [
            {name:'message', type:'text', elementName:'textarea', placeholder:'Type your message*'}
        ]
    ]
}

class Contact extends Component{
    render(){
        return(
            <section className="page-section" id="contact">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Contact Us</h2>
                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                    </div>
                    <form onSubmit={this.props.handleSubmit} id="contactForm" data-sb-form-api-token="API_TOKEN">
                        <div className="row align-items-stretch mb-5">
                            {field.section.map((section, sectionIndex)=>{
                                console.log("rendering section", sectionIndex,"with", section);
                                return(
                                    <div className="col-md-6" key={sectionIndex}>
                                        {section.map((field, i) => {
                                            return <Field 
                                                            {...field} 
                                                            key={i}
                                                            value={this.props.values[field.name]}
                                                            name={field.name}
                                                            onChange={this.props.handleChange}
                                                            onBlur={this.props.handleBlur}
                                                            touched={(this.props.touched[field.name])}
                                                            errors={this.props.errors[field.name]}
                                                            />
                                        })}
                                    </div>
                                )
                            })}
                            
                        </div>
                        <div className="d-none" id="submitSuccessMessage">
                            <div className="text-center text-white mb-3">
                                <div className="fw-bolder">Form submission successful!</div>
                                <br />
                                <a href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                            </div>
                        </div>
                        <div className="d-none" id="submitErrorMessage"><div className="text-center text-danger mb-3">Error sending message!</div></div>
                        <div className="text-center">
                            <button 
                            className="btn btn-primary btn-xl text-uppercase" 
                            id="submitButton" 
                            type="submit"
                            >Send Message</button>
                        </div>
                    </form>
                </div>
            </section>
        )
    }
}

export default withFormik({
    mapPropsToValues: () =>({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    validationSchema: Yup.object().shape({
        name: Yup.string().min(3, "Minimum 3 character!").required("You must give us your name."),
        email: Yup.string().email("Not a valid email!").required("You must give us your email."),
        phone: Yup.string().min(8, "Provide real number").max(16, "Too many number").required("You must give us your number"),
        message: Yup.string().min(10, "Dont be fooling around here").required("You must give us the messge.")
    }),
    handleSubmit: (values, {setSubmitting}) => {
        alert("You've submitted the form")
    }
}) (Contact)