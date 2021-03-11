import React from '../../node_modules/react'
import './General.css'

const General = (props) => {
    const {
        firstName, 
        lastName, 
        phone, 
        city, 
        state, 
        email,
        personalStatement
    } = props.data

    return(
        <div className="General">
            <form onSubmit={props.submitGeneral} id='generalForm'>
                <label htmlFor='firstName'>First Name</label>
                <input
                    className='firstName'
                    name="firstName"
                    value={firstName}
                    onChange={props.handleChange}
                    required
                />
                <label htmlFor='lastName'>Last Name</label>
                <input
                    className='lastName'
                    name="lastName"
                    value={lastName}
                    onChange={props.handleChange}
                    required
                />
                <label htmlFor='city'>City</label>
                <input
                    className='city'
                    name="city"
                    value={city}
                    onChange={props.handleChange}
                    required
                />
                <label htmlFor='state'>State</label>
                <input
                    className='state'
                    name="state"
                    value={state}
                    onChange={props.handleChange}
                    required
                />
                <label htmlFor='phone'>Phone #</label>
                <input
                    className='phone'
                    name="phone"
                    value={phone}
                    onChange={props.handleChange}
                    required
                />
                <label htmlFor='email'>Email</label>
                <input
                    className='email'
                    name="email"
                    value={email}
                    onChange={props.handleChange}
                    required
                />
                <label htmlFor='personalStatement'>Personal Statement</label>
                <textarea
                    className='personalStatement'
                    name="personalStatement"
                    value={personalStatement}
                    onChange={props.handleChange}
                    required
                />
            </form>
        </div>
    )
}

export default General