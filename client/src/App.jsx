import { NavLink, Outlet, useLocation } from "react-router-dom";

const App = () => {
  const {pathname} = useLocation()
  console.log(pathname);
  return (
    <div >
      {
        pathname !=="/profile" && <div className="flex md:flex-row flex-col items-center justify-center font-semibold text-lg gap-4">
        <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/"}>Count Words</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/validate-email"}>Validate Email</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/file-upload"}>File Upload</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/login"}>Login</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/signup"}>Sign Up</NavLink>
        <NavLink className={({ isActive }) => isActive ? "text-blue-600" : ""} to={"/profile"}>Profile</NavLink>
      </div>
      }

      <div className={`${pathname !=="/profile" && "my-10 mx-10"}`}>
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default App;