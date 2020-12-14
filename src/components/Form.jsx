import React, { useState } from 'react';
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [gender, setGender] = useState('Male');
    const [hobby, setHobby] = useState('Dancing');
    const [desc, setDesc] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3333/posts", {
            "name": name,
            "Gender": gender,
            "Hobby": hobby,
            "Description": desc
        })
    }
    return (
        <form onSubmit={submitForm}>
            <div>
            
            <input type="text" id="fname" name="firstname" placeholder="Name" onChange={(e) => setName(e.target.value)} />
            </div>

            <div>
            
            <select id="gender" name="gender" onChange={(e) => setGender(e.target.value)} >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            </div>

            <div>
            
            <select id="hobby" name="hobby" onChange={e => setHobby(e.target.value)} >
            <option value="dancing">Dancing</option>
            <option value="singing">Singing</option>
            <option value="reading">Reading</option>
            </select>
            </div>

            <div>
            <textarea id="subject" name="subject" placeholder="Message" style={{ height: "200px" }} onChange={e => setDesc(e.target.value)}></textarea>
            </div>

            <div>
            <input type="submit" value="Send" />
            </div>
        </form>
    );
};

export default Form;