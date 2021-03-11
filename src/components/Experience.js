import React from '../../node_modules/react'
import './Experience.css'

const Experience = (props) => {
    return (
        <div className="Experience">
             <button
            className ="deleteBtn"
            name="experience" 
            data-id={props.data.id}
            onClick={props.deleteSection}
            >X</button>
            <form id={props.data.id} className='expForm'>
                <label>Company:</label>
                <input
                    name="company"
                    data-directory='experience'
                    data-id={props.data.id}
                    value={props.data.company}
                    onChange={props.handleChange}
                />
                
                <label>Start Date:</label>
                <input
                    name="startDate"
                    data-directory='experience'
                    data-id={props.data.id}
                    value={props.data.startDate}
                    onChange={props.handleChange}
                />
                
                <label>End Date:</label>
                <input
                    name="endDate"
                    data-directory='experience'
                    data-id={props.data.id}
                    value={props.data.endDate}
                    onChange={props.handleChange}
                />
                
                <label>Responsibilities:</label>
                <textarea
                    name="responsibilities"
                    data-directory='experience'
                    data-id={props.data.id}
                    value={props.data.responsibilities}
                    onChange={props.handleChange}
                >
                    
                </textarea>
            </form>
        </div>
    )
}

export default Experience