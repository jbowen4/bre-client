import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Register = () => {

    const [data, setData] = useState({
        name: '',
        company: '',
        contact_email: '',
        contact_number: '',
        job_type: '',
        descriptionn: '',
        address1: '',
        address2: '',
        city: '',
        state: '',
        zipcode: '',
        website: ''
    });

    const [photo, setPhoto] = useState('');

    const handleSubmit = async e => {

        const formData = new FormData();
        formData.append('photo', photo);
        formData.append('name', data.name);
        formData.append('contact_number', data.contact_number);
        formData.append('contact_email', data.contact_email);
        formData.append('job_type', data.job_type);
        formData.append('description', data.description);
        formData.append('address1', data.address1);
        formData.append('address2', data.address2);
        formData.append('city', data.city);
        formData.append('state', data.state);
        formData.append('zipcode', data.zipcode);
        formData.append('company', data.company);
        formData.append('website', data.website);

        try {
            const res = await axios.post('http://localhost:4000/api/pros', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            setData({
                name: '',
                company: '',
                contact_email: '',
                contact_number: '',
                job_type: '',
                descriptionn: '',
                address1: '',
                address2: '',
                city: '',
                state: '',
                zipcode: '',
                website: ''
            });

            setPhoto('');

            e.preventDefault();

        } catch (err) {
            console.log(err);
        }
    }

    function handleChange(e) {
        const { name, value } = e.target;

        setData(currData => {
            return {
                ...currData,
                [name]: value
            };
        });
    }

    const onChangeImage = e => {
        setPhoto(e.target.files[0]);
    }

    return (
        <div class="register-container">
            <div class="register-info">
                <Link to="/">Back home</Link>
                <h1>Register</h1>
                <p>If you are a real estate professional, fill out
                    this form to be included in our database </p>
            </div>

            <div class="form">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div class="form-group">
                        <label for="name">Name</label>
                        <input type="text" class="form-control" name="name" placeholder="Personal or Company Name" onChange={handleChange} required />
                    </div>
                    <div class="form-group">
                        <label for="company">Company</label>
                        <input type="text" class="form-control" name="company" placeholder="Personal or Company Name" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="contact_email">Email address</label>
                        <input type="email" class="form-control" name="contact_email" placeholder="name@example.com" onChange={handleChange} required />
                    </div>
                    <div class="form-group">
                        <label for="contact_number">Phone number</label>
                        <input type="text" class="form-control" name="contact_number" placeholder="1234567890" onChange={handleChange} required />
                    </div>
                    <div class="form-group">
                        <label for="website">Website</label>
                        <input type="text" class="form-control" name="website" placeholder="www.google.com" onChange={handleChange} />
                    </div>
                    <div class="form-group">
                        <label for="job_type">What type of professional are you?</label>
                        <select class="form-control" name="job_type" onChange={handleChange} required>
                            <option value="" selected hidden>Choose</option>
                            <option>Realtor</option>
                            <option>Inspector</option>
                            <option>Loan Manager</option>
                            <option>Title Company</option>
                            <option>Lawyer</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label for="photo">Please submit a photo</label>
                        <input type="file" class="form-control-file" name="photo" onChange={onChangeImage} required />
                    </div>
                    <div class="form-group">
                        <label for="description">Description</label>
                        <textarea class="form-control" name="description" rows="5" cols="50" placeholder="What should customers know about you?" onChange={handleChange}></textarea>
                    </div>
                    <div class="form-group">
                        <label for="address1">Address</label>
                        <input type="text" class="form-control" name="address1" placeholder="1234 Main St" onChange={handleChange} required />
                    </div>
                    <div class="form-group">
                        <label for="address2">Address 2</label>
                        <input type="text" class="form-control" name="address2" placeholder="Apartment, studio, or floor" onChange={handleChange} />
                    </div>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="city">City</label>
                            <input style={{ width: "90%" }} type="text" class="form-control" name="city" onChange={handleChange} required />
                        </div>
                        <div class="form-group col-md-4">
                            <label for="state">State</label>
                            <select name="state" class="form-control" onChange={handleChange} required>
                                <option value="" hidden selected>Choose</option>
                                <option value="AL">AL</option>
                                <option value="AK">AK</option>
                                <option value="AZ">AZ</option>
                                <option value="AR">AR</option>
                                <option value="CA">CA</option>
                                <option value="CO">CO</option>
                                <option value="CT">CT</option>
                                <option value="DE">DE</option>
                                <option value="DC">DC</option>
                                <option value="FL">FL</option>
                                <option value="GA">GA</option>
                                <option value="HI">HI</option>
                                <option value="ID">ID</option>
                                <option value="IL">IL</option>
                                <option value="IN">IN</option>
                                <option value="IA">IA</option>
                                <option value="KS">KS</option>
                                <option value="KY">KY</option>
                                <option value="LA">LA</option>
                                <option value="ME">ME</option>
                                <option value="MD">MD</option>
                                <option value="MA">MA</option>
                                <option value="MI">MI</option>
                                <option value="MN">MN</option>
                                <option value="MS">MS</option>
                                <option value="MO">MO</option>
                                <option value="MT">MT</option>
                                <option value="NE">NE</option>
                                <option value="NV">NV</option>
                                <option value="NH">NH</option>
                                <option value="NJ">NJ</option>
                                <option value="NM">NM</option>
                                <option value="NY">NY</option>
                                <option value="NC">NC</option>
                                <option value="ND">ND</option>
                                <option value="OH">OH</option>
                                <option value="OK">OK</option>
                                <option value="OR">OR</option>
                                <option value="PA">PA</option>
                                <option value="RI">RI</option>
                                <option value="SC">SC</option>
                                <option value="SD">SD</option>
                                <option value="TN">TN</option>
                                <option value="TX">TX</option>
                                <option value="UT">UT</option>
                                <option value="VT">VT</option>
                                <option value="VA">VA</option>
                                <option value="WA">WA</option>
                                <option value="WV">WV</option>
                                <option value="WI">WI</option>
                                <option value="WY">WY</option>
                            </select>
                        </div>
                        <div class="form-group col-md-2">
                            <label for="zipcode">Zip</label>
                            <input type="text" class="form-control" name="zipcode" onChange={handleChange} required />
                        </div>
                    </div>
                    <button type="submit" class="submit-btn">Submit</button>
                </form>
            </div>
        </div>
    )
};

export default Register;