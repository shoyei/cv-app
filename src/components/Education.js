import React from 'react'
import './Education.css'

const Education = (props) => {

    return (
        <div className="Education">
            <button
                className="deleteBtn"
                name="education"
                data-id={props.data.id}
                onClick={props.deleteSection}
            >
            X
            </button>
            <form id={props.data.id} className='eduForm'>
                <label>School:</label>
                <input
                    name="school"
                    data-directory='education'
                    data-index={props.data.id}
                    value={props.data.school}
                    onChange={props.handleChange}
                />
                
                <label>Year Start:</label>
                <input
                    name="yearStart"
                    data-directory='education'
                    data-index={props.data.id}
                    value={props.data.yearStart}
                    onChange={props.handleChange}
                />
                
                <label>Year End:</label>
                <input
                    name="yearEnd"
                    data-directory='education'
                    data-index={props.data.id}
                    value={props.data.yearEnd}
                    onChange={props.handleChange}
                />
                
                <label>Level Completed:</label>
                <input
                    name="complete"
                    data-directory='education'
                    data-index={props.data.id}
                    value={props.data.complete}
                    onChange={props.handleChange}
                />
            </form>
        </div>
    )
}

export default Education