import { useState } from 'react'

const ContactFormSection = () => {
    const [form, setForm] = useState({})
    const [contactForm, setContactForm] = useState({name: '', email: '', comment: ''})
    const [formErrors, setFormErrors] = useState({})
    const [submitted, setSubmitted] = useState(false)
    const [failedSubmit, setFailedSubmit] = useState(false)

    const validate = (values) => {
        const errors = {}
        const regex_email = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/

        if(!values.name)
            errors.name = "You must enter a name"

        if(!values.email)
            errors.email = "You must enter an e-mail address"
        else if(!regex_email.test(values.email))
            errors.email = "You must enter a valid e-mail address (eg. name@domain.com)"

        if(!values.comment)
            errors.comment = "You must enter a comment"
        else if(values.comment.length < 5)
            errors.comment = "Your comment must be longer than five characters"

        if(Object.keys(errors).length === 0)
            setSubmitted(true)
        else
            setSubmitted(false)

        return errors;
    }

    const handleChange = (e) => {
        const {id, value} = e.target
        setContactForm({...contactForm, [id]: value})
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setFailedSubmit(false)
        setSubmitted(false)

        const {name, email, comment} = contactForm

        setFormErrors(validate(e, {name, email, comment}))
        

        if (formErrors.name === null && formErrors.email === null && formErrors.comment === null) {

            let json = JSON.stringify({ name, email, comments: comment})
            console.log(json)

            // setName('')
            // setEmail('')
            // setComments('')
            setContactForm({name: '', email: '', comment: ''})
            setFormErrors({})

            let result = await submitData('http://win22-webapi.azurewebsites.net/api/contactform', 'POST', json )
            console.log('await result: ' + result )

            if(true) {
                setSubmitted(true)
                setFailedSubmit(false)
            } else {
                setSubmitted(false)
                setFailedSubmit(true)
            }

        } 
        else {
            setSubmitted(false)
        }
    }

    const submitData = async (url, method, data, contentType = 'application/json') => {

        const res = await fetch(url, { 
            method: method,
            headers: {
                'Content-Type': contentType
            },
            body: data
        })

        console.log(res)

        .then(res => {
            console.log(res.status)
            if (res.status === 200) {
                setSubmitted(true)
                setFailedSubmit(true)
            }
            else {
                setSubmitted(false)
            }
        })
    }

  return (
    <section className="contact-form">
        <div className="container"> 
        {

            failedSubmit ? (
                <div className="alert alert-danger text-center" role="alert">
                    <h3>Something went wrong!</h3>
                    <p>We couldn't submit your comments right now.</p>
                    </div> ) : (<></>)
}

            {submitted ? (
                <div className="alert alert-success text-center" role="alert">
                    <h3>Thank you for your comment</h3>
                    <p>We will contact you as soon as possible</p>
                    </div> ) : (<></>)
            }

            {submitted ? 
            (<div className="d-flex justify-content-center align-items-center">
                <div>Thank you for your comment!</div>
            </div>)
            :
            (
                <>
                    <h2>Come in contact with Us</h2>
                    <pre>{ JSON.stringify(formErrors) }</pre>
                    <form noValidate>
                        <div>
                            <input id="name" type="text" placeholder="Your Name" value={contactForm.name} onChange={handleChange} />
                            <div className="errorMessage"> {formErrors.name} </div>
                        </div>
                        <div>
                            <input id="email" type="email" placeholder="Your Mail" value={contactForm.email} onChange={handleChange} />
                            <div className="errorMessage"> {formErrors.email} </div>
                        </div>
                        <div className="textarea">
                            <textarea id="comment" placeholder="Comments" value={contactForm.comment} onChange={handleChange}></textarea>
                            <div className="errorMessage"> {formErrors.comment} </div>
                        </div>
                        <div className="formBtn">
                            <button type="submit" className="btn-theme">Post Comments</button>
                        </div>
                    </form>
                </>
            )}
                
        </div>
    </section>
  )
}

export default ContactFormSection