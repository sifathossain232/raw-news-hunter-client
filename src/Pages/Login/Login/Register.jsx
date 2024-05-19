import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);

    const handleRegister = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password, photo);

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleAccepted = event =>{
        setAccepted(event.target.checked);
    }

    return (
        <div className='flex justify-center'>
            <div className="card shrink-0 w-[600px] shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                    <div className='flef text-center border-b pb-8'>
                        <h2 className='text-4xl font-semibold font-sans text-[#403F3F]'>Register your account</h2>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold text-[#403F3F] font-sans">Your Name</span>
                        </label>
                        <input
                            type="text"
                            name='name'
                            placeholder="Enter your name"
                            className="outline-none border-none bg-slate-100 py-4 pl-5 rounded-lg"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold text-[#403F3F] font-sans">Photo URL</span>
                        </label>
                        <input
                            type="text"
                            name='photo'
                            placeholder="Enter your photo url"
                            className="outline-none border-none bg-slate-100 py-4 pl-5 rounded-lg"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold text-[#403F3F] font-sans">Email</span>
                        </label>
                        <input
                            type="email"
                            name='email'
                            placeholder="Enter your email address"
                            className="outline-none border-none bg-slate-100 py-4 pl-5 rounded-lg"
                            required
                        />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold text-[#403F3F] font-sans">Password</span>
                        </label>
                        <input
                            type="password"
                            name='password'
                            placeholder="Enter your password"
                            className="outline-none border-none bg-slate-100 py-4 pl-5 rounded-lg"
                            required
                        />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                        <div className='flex gap-2 mt-2'>
                            <input onClick={handleAccepted}
                                className='text-base'
                                type="checkbox"
                                name="accept"
                                id=""
                            />
                            <label className='text-base text-[#706F6F]' >
                                Accept <Link to='/trems' className='font-semibold text-[#706F6F]'>Term & Conditions</Link>
                            </label>
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button disabled={!accepted} className="bg-[#403F3F] text-white text-xl font-semibold font-sans py-4 rounded-lg">
                            Register
                        </button>
                    </div>
                    <p className='text-center my-5 text-[#706F6F] text-base font-semibold'>
                        Already Have An Account ? <Link to="/login" className='text-[#ff6647]'>Login</Link>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Register;