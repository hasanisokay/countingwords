import axios from "axios";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const SignUp = () => {

    const handleSubmitLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        axios.post("https://counting-words.vercel.app/signup", { email, password, name })
            .then(data => {
                alert("Successfully Signed Up.");
                console.log(data.data);
            })
            .catch(err => console.log(err))
    }
    return (
        <>
            <form className="hero" onSubmit={handleSubmitLogin}>
            <Helmet>
                <title>Sign Up</title>
            </Helmet>
                <div className="hero-content ">
                    <div className="card shadow-2xl font-semibold w-full bg-gray-400 min-w-[300px] md:min-w-[400px]">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" placeholder="Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="email" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name="password" placeholder="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>
                            <div>
                                <p>Already have an account? Please <span className="italic"><Link to={"/login"} >Login</Link></span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    );
};

export default SignUp;