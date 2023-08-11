import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const Login = () => {
    const handleSubmitSignUp = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        console.log(email, password);
        axios.post("https://counting-words.vercel.app/login", { email, password })
            .then(data => {
                console.log(data.data);
                alert("Success")
            })
            .catch(err => alert(err.response.data.message))
    }
    return (<>
        <form className="hero" onSubmit={handleSubmitSignUp}>
        <Helmet>
            <title>Login</title>
        </Helmet>
            <div className="hero-content ">
                <div className="card shadow-2xl font-semibold w-full min-w-[300px] md:min-w-[400px] bg-gray-400">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="text" name="password" placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary" type="submit">Login</button>
                        </div>
                        <div>
                            <p>New Here? Please <span className="italic"><Link to={"/signup"} >Sign Up</Link></span> </p>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>
    );
};

export default Login;