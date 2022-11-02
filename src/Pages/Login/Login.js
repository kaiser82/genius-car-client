import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import image from '../../assets/images/login/login.svg'
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Login = () => {

    const { login, setLoading } = useContext(AuthContext);

    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password)
            .then(res => {
                const user = res.user;
                console.log(user);
                form.reset();
                if (user?.email) {
                    navigate(from, { replace: true });
                }
            })
            .catch(e => console.log(e))
            .finally(() => {
                setLoading(false)
            })
    }

    return (
        <div className="hero w-full">
            <div className="hero-content grid gap-5 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img className='w-4/6' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h1 className="text-3xl font-bold text-center">Login</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" />
                            <label className="label">
                                <Link to="#" className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>

                        </div>
                        <div className="form-control mt-6">
                            <input type="submit" value="Login" className="btn btn-primary bg-orange-600 hover:bg-orange-700" />
                            <label className="label justify-center">
                                <Link to="/signup" className="label-text-alt link link-hover text-md font-semibold">Don't have an account? <span className='text-orange-600'>Sign Up</span></Link>
                            </label>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;