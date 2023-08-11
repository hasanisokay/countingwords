import { Helmet } from "react-helmet-async";
import { NavLink } from "react-router-dom";
import profile from "../assets/images/profile.jpg"
import { FaAngleDown, FaBars } from "react-icons/fa";
import userInfo from "../assets/images/icons/user.svg"
import favourites from "../assets/images/icons/heart-regular.svg"
import logout from "../assets/images/icons/log-out.svg"
import watchlist from "../assets/images/icons/star-regular.svg"
import setting from "../assets/images/icons/gear.svg"
import notification from "../assets/images/icons/bell.svg"
import { useState } from "react";
const Profile = () => {
    const [activeTab, setActiveTab] = useState("userInfo")
    return (
        <div>
            <Helmet>
                <title>Profile</title>
            </Helmet>
            <div>
                <div className="navbar shadow px-10">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <FaBars />
                            </label>
                            <ul tabIndex={0} className="menu menu-sm font-semibold dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/"}>Count Words</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/validate-email"}>Validate Email</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/file-upload"}>File Upload</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/login"}>Login</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/signup"}>Sign Up</NavLink>
                                <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/profile"}>Profile</NavLink>
                            </ul>
                        </div>
                    </div>
                    <div className="navbar-end">

                        <button className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>

                                <span className="badge badge-xs bg-[#fd602b] indicator-item"></span>
                            </div>
                        </button>
                        <label tabIndex={1}>
                            <div>
                                <img src={profile} className="w-10 h-10 rounded-full" />
                            </div>
                        </label>
                        <div>
                            <p className="ml-2 font-semibold">Md Abu Hasan <FaAngleDown className="inline" /> </p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    <div>
                        {/* user profile */}
                        <h3 className="font-bold text-xl md:mb-10 mb-4">User Profile</h3>
                        <div className="flex">
                            <ul className="flex flex-col flex-wrap  gap-6 mr-10">
                                <li onClick={() => setActiveTab("userInfo")} className={`flex gap-4 items-center font-semibold md:pr-1 pr-4 cursor-pointer md:text-lg text-base ${activeTab==="userInfo"?"border-r-2":""} border-[#fd602b] rounded`}><img className="w-8 h-8" src={userInfo} /> User Info</li>
                                <li onClick={() => setActiveTab("favourites")} className={`flex gap-4 items-center font-semibold md:pr-1 pr-4 cursor-pointer md:text-lg text-base ${activeTab==="favourites"?"border-r-2":""} border-[#fd602b] rounded`}><img className="w-8 h-8" src={favourites} /> Favourites</li>
                                <li onClick={() => setActiveTab("watchlist")} className={`flex gap-4 items-center font-semibold md:pr-1 pr-4 cursor-pointer md:text-lg text-base ${activeTab==="watchlist"?"border-r-2":""} border-[#fd602b] rounded`}><img className="w-8 h-8" src={watchlist} /> Watchlist</li>
                                <li onClick={() => setActiveTab("setting")} className={`flex gap-4 items-center font-semibold md:pr-1 pr-4 cursor-pointer md:text-lg text-base ${activeTab==="setting"?"border-r-2":""} border-[#fd602b] rounded`}><img className="w-8 h-8" src={setting} /> Setting</li>
                                <li onClick={() => setActiveTab("notifications")} className={`flex gap-4 items-center font-semibold md:pr-1 pr-8 cursor-pointer md:text-lg text-base ${activeTab==="notifications"?"border-r-2":""} border-[#fd602b] rounded`}><img className="w-8 h-8" src={notification} /> Notification</li>
                            </ul>
                            <hr className="rotate-90 block" />
                        </div>
                        <div className="flex items-center gap-2 mt-32 cursor-pointer">
                            <img src={logout} className="w-8 h-8" alt="" />
                            <p className="text-[#fd602b] font-semibold">Log Out</p>
                        </div>
                    </div>

                    <div>
                        {/* user details */}
                        <div className="flex gap-4 items-center my-10">
                            <img src={profile} className="w-24 h-24 rounded-full" alt="" />
                            <div className="flex flex-col">
                                <p className="font-semibold text-lg">Md Abu Hasan</p>
                                <p className="text-gray-400 text-sm">Sylhet, Bangladesh</p>
                            </div>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                            <div>
                                <p className="ml-2 text-gray-400 text-sm">Name</p>
                                <p className="bg-gray-100 py-2 px-6 font-semibold flex items-center justify-center border">Hasan</p>
                            </div>
                            <div>
                                <p className="ml-2 text-gray-400 text-sm">Full Name</p>
                                <p className="bg-gray-100 py-2 px-6 font-semibold flex items-center justify-center border">Md Abu Hasan</p>
                            </div>
                            <div>
                                <p className="ml-2 text-gray-400 text-sm">Email Address</p>
                                <p className="bg-gray-100 py-2 px-6 font-semibold flex items-center justify-center border">hasanisokay@gmail.com</p>
                            </div>
                            <div>
                                <p className="ml-2 text-gray-400 text-sm">Phone Number</p>
                                <p className="bg-gray-100 py-2 px-6 font-semibold flex items-center justify-center border">+880176783010</p>
                            </div>
                            <div>
                                <p className="ml-2 text-gray-400 text-sm">Location</p>
                                <p className="bg-gray-100 py-2 px-6 font-semibold flex items-center justify-center border">Habiganj-3300, Sylhet, Bangladesh</p>
                            </div>
                            <div>
                                <p className="ml-2 text-gray-400 text-sm">Postal Code</p>
                                <p className="bg-gray-100 py-2 px-6 font-semibold flex items-center justify-center border">3300</p>
                            </div>
                        </div>
                        <div className="text-center mt-10">
                            <button className="shadow-2xl mt-4 px-4 py-2 bg-[#fd602b] text-white rounded-lg">Save Changes</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Profile;