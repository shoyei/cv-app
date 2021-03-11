import React from '../../node_modules/react'
import General from './General'
import Education from './Education'
import Experience from './Experience'
import CompletedForm from './CompletedForm'

//Initialized state objects
const eduObj = {
    id: 0,
    school: "",
    yearStart: "",
    yearEnd: "",
    complete: ""
}

const expObj = {
    id: 0,
    company: "",
    startDate: "",
    endDate: "",
    responsibilities: ""
}

class Main extends React.Component {
    constructor() {
        super()
        this.state = {
            general: {
                firstName: "",
                lastName: "",
                phone: "",
                city: "",
                state: "",
                email: "",
                personalStatement: ""
            },
            education: [],
            experience: [],
            eduCount: 0,
            expCount: 0,
            saved: false
        }
        this.handleChange = this.handleChange.bind(this)
        // this.submitGeneral = this.submitGeneral.bind(this)
        this.addSection = this.addSection.bind(this)
        this.deleteSection = this.deleteSection.bind(this)
        this.saveEdit = this.saveEdit.bind(this)
    }

    //Method for updating state with inputs from child components.
    handleChange(event) {
        const { name, value, dataset } = event.target
        if (dataset.directory === 'education') {
            this.setState(prevState => {
                const newEduArray = prevState.education
                newEduArray[parseInt(dataset.index)][name] = value
                return {
                    education: newEduArray
                }
            })
            console.log(this.state)
        }
        else if (dataset.directory === 'experience') {
            this.setState(prevState => {
                const newExpArray = prevState.experience
                newExpArray[parseInt(dataset.id)][name] = value
                return {
                    experience: newExpArray
                }
            })
            console.log(this.state)
        }
        else this.setState(prevState => ({
            general: {
                ...prevState.general,
                [name]: value
            }
        }))
        console.log(this.state)
    }

    //Method for saving "General" section state
    // submitGeneral(event) {
    //     event.preventDefault()
    //     const newInfo = this.state.general
    //     this.setState({ general: newInfo })
    //     setTimeout(() => console.log(this.state), 1000)
    // }

    //Method for adding a new "Experience" or "Education" section
    addSection(event) {
        const { name } = event.target
        if (name === "education") {
            this.setState(prevState => {
                const newEduCount = prevState.eduCount + 1
                const newEduObj = { ...eduObj }
                newEduObj.id = prevState.eduCount
                const newEduArr = [...prevState.education, newEduObj]
                return {
                    ...prevState,
                    education: newEduArr,
                    eduCount: newEduCount
                }
            })
            console.log(this.state.eduCount)
        }
        else {
            this.setState(prevState => {
                const newExpCount = prevState.expCount + 1
                const newExpObj = { ...expObj }
                newExpObj.id = prevState.expCount
                const newExpArr = [...prevState.experience, newExpObj]
                return {
                    ...prevState,
                    experience: newExpArr,
                    expCount: newExpCount
                }
            })
            setTimeout(() => console.log(this.state), 1000)
        }
    }

    //Method for deleting either "Experience" or "Education" section
    deleteSection(event) {
        console.log('deleted')
        const { name, dataset } = event.target
        console.log(dataset.id)
        if (name === 'education') {
            this.setState(prevState => {
                const _newEduArr = prevState.education.filter((item) => parseInt(dataset.id) !== parseInt(item.id))
                console.log(_newEduArr)
                return {
                    education: _newEduArr,
                }
            })
        }
        else {
            this.setState(prevState => {
                const _newExpArr = prevState.experience.filter((item) => parseInt(dataset.id) !== parseInt(item.id))
                return {
                    experience: _newExpArr,
                }
            })
        }
    }

    //Method for updating the DOM with completed information.
    saveEdit() {
        console.log(this.state.saved)
        this.setState(prevState => ({
            saved: !prevState.saved
        }))
        setTimeout(console.log(this.state.saved), 1000)
    }

    render() {
        //Looping through the education array in state
        const edu = this.state.education.map(item => {
            return (
                <Education
                    key={item.id}
                    data={item}
                    handleChange={this.handleChange}
                    deleteSection={this.deleteSection}
                />
            )
        })
        //Looping through the experience array in state
        const exp = this.state.experience.map(item => {
            return (
                <Experience
                    key={item.id}
                    data={item}
                    handleChange={this.handleChange}
                    deleteSection={this.deleteSection}
                />
            )
        })
        //If not saved yet, render input forms
        if (!this.state.saved) return (
            <div className='Main'>
                <h4>Please provide the following:</h4>
                <h3>General Info:</h3>
                <General
                    data={this.state.general}
                    handleChange={this.handleChange}
                    submitGeneral={this.submitGeneral}
                />
                <br />
                <h3>Education:</h3>
                {edu}
                <button onClick={this.addSection} name="education">Add +</button>
                <br />
                <h3>Experience:</h3>
                {exp}
                <button onClick={this.addSection} name="experience">Add +</button>
                <br />
                <button onClick={this.saveEdit}>Save</button>
            </div>
        )
        //If saved, render completed form
        else if (this.state.saved) return (
            <div>
                <h2>Please review for accuracy:</h2>
                <CompletedForm general={this.state.general} education={this.state.education} experience={this.state.experience}/>
                <br />
                <button onClick={this.saveEdit}>Edit</button>
            </div>
        )
    }
}

export default Main