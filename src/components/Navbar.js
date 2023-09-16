import React from 'react'
import { Link } from "react-router-dom";
import { toast } from "react-hot-toast";

const Navbar = (props) => {
   let isLoggedIn = props.isLoggedIn;
   let setIsLoggedIn = props.setIsLoggedIn;
  return (
    <div className='bg-slate-500'>
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link to="/">
          <div>
            <h3 className='text-teal-50 text-2xl font-bold'>TodoApp</h3>
          </div>
        </Link>
        <div>
          {!isLoggedIn && (
            <Link to="/login">
              <button
                className="  py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700 text-white"
              >
                Log in
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <Link to="/">
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  toast.success("Logged Out");
                }}
                className="bg-richblack-800 text-richblack-100 py-[8px] 
                    px-[12px] rounded-[8px] border border-richblack-700"
              >
                Log Out
              </button>
            </Link>
          )}
        </div>
      </div> 
    </div>
  );
}

export default Navbar