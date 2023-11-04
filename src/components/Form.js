import React, {useState, useRef} from "react";

const Form = () => {
    const formRef = useRef(null)
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzXkMJxSZ-lZS-22fyTS7uK1CGufZuno4yOuKGrLEpnDe_Y0dG2pYoLGsY8ugzYW7sy/exec'
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')
    const [formClass, setFormClass] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setLoading(true)

        fetch(scriptURL, {
            method: 'POST',
            body: new FormData(formRef.current),
        }).then(res => {
            setMessage('Registration Successful!')
            setFormClass('success-message')

            setTimeout(() => {
                setFormClass('')
                setMessage('')
                }, 5000);

            setLoading(false)
            formRef.current.reset()
        })
    }

    return ( 
        <div className="form-section">
            <h2 classsName="">Register to Attend</h2>
            <form name="submit-to-google-sheet" ref={ formRef } onSubmit={handleSubmit} className="form-group">
                <input type="text" name="firstname" placeholder="First name" className="form-control" required />
                <input type="text" name="lastname" placeholder="Last name" className="form-control" required />
                <input type="email" name="email" placeholder="Email" className="form-control" required />
                <input type="phone" name="number" placeholder="Phone number" className="form-control" required/>
                <input type="submit" className="form-submit" value={loading ? "Registering..." : "Register"} />
            </form>
            <p className={ formClass }> { message } </p>
        </div>
     );
}
 
export default Form;