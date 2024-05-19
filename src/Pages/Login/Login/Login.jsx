import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const naviget = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/category/0'

    const handleLogIn = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                naviget(from, { replace: true })
                form.reset();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className='flex justify-center'>
            <div className="card shrink-0 w-[500px] shadow-2xl bg-base-100">
                <form onSubmit={handleLogIn} className="card-body my-5">
                    <div className='flef text-center border-b pb-8'>
                        <h2 className='text-4xl font-semibold font-sans text-[#403F3F]'>Login your account</h2>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold text-[#403F3F] font-sans">Email</span>
                        </label>
                        <input type="email" name='email' placeholder="Enter your email address" className="outline-none border-none bg-slate-100 py-4 pl-5 rounded-lg" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="text-xl font-semibold text-[#403F3F] font-sans">Password</span>
                        </label>
                        <input type="password" name='password' placeholder="Enter your password" className="outline-none border-none bg-slate-100 py-4 pl-5 rounded-lg" required />
                        {/* <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label> */}
                    </div>
                    <div className="form-control mt-6">
                        <button className="bg-[#403F3F] text-white text-xl font-semibold font-sans py-4 rounded-lg">Login</button>
                    </div>
                    <p className='text-center my-5 text-[#706F6F] text-base font-semibold'>Dont’t Have An Account ? <Link to="/register" className='text-[#ff6647]'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;