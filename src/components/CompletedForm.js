import React from 'react'
import './CompletedForm.css'

function CompletedForm(props) {

    const { general, education, experience } = props
    console.log(education)

    return (
        <div>
            <div className="general">
                <h2>{general.firstName} {general.lastName}</h2>
                <p>{general.phone}</p>
                <p>{general.city}, {general.state}</p>
                <p>{general.email}</p>
                <p>{general.linkedIn}</p>
                <p>{general.personalStatement}</p>
            </div>
            <div className="education">
                <h2>Education:</h2>
                {education.map(item => {
                    return (<div className='school' key={item.id}>
                        <h3>{item.school}</h3>
                        <p>{item.yearStart} - {item.yearEnd}</p>
                        <p>{item.complete}</p>
                    </div>)
                })}
            </div>
            <div className="experience">
                <h2>Experience:</h2>
                {experience.map(item => {
                    return (<div className='company' key={item.id}>
                        <h3>{item.company}</h3>
                        <p>{item.startDate} - {item.endDate}</p>
                        <p>{item.responsibilities}</p>
                    </div>)
                })}
            </div>

        </div>
    )
}

export default CompletedForm