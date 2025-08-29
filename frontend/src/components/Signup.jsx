// import React from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { toast } from "react-hot-toast";

// import Login from "./Login";

// function Signup() {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const from = location.state?.from?.pathname || "/";
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = async (data) => {
//     const userInfo = {
//       fullname: data.fullname,

//       email: data.email,
//       password: data.password,
//     };
//     await axios
//       .post("http://localhost:4001/user/signup", userInfo)

//       .then((res) => {
//         console.log(res.data);
//         if (res.data) {
//           toast.success('Signup successfully"');
//           navigate(from, { replace: true });
//         }
//         localStorage.setItem("Users", JSON.stringify(res.data.user));
//         console.log(data);
//       })
//       .catch((err) => {
//         if (err.response) {
//           console.log(err);

//           toast.error("Error:" + err.response.data.message);
//         }
//       });
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div className="w-[600px]">
//         <div className="modal-box">
//           <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//             <Link
//               to="/"
//               className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
//             >
//               ✕
//             </Link>

//             <h3 className="font-bold text-lg">Signup</h3>
//             <div className="mt-4 space-y-2">
//               <label className="block">
//                 Name
//                 <input
//                   type="text"
//                   placeholder="Enter Your Full Name"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("fullname", {
//                     required: "Full name is required",
//                   })}
//                 />
//               </label>
//               {errors.fullname && (
//                 <span className="text-sm text-red-500">
//                   {errors.fullname.message}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4 space-y-2">
//               <label className="block">
//                 Email
//                 <input
//                   type="email"
//                   placeholder="Enter Your Email"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("email", {
//                     required: "Email is required",
//                     pattern: {
//                       value: /^\S+@\S+$/i,
//                       message: "Invalid email format",
//                     },
//                   })}
//                 />
//               </label>
//               {errors.email && (
//                 <span className="text-sm text-red-500">
//                   {errors.email.message}
//                 </span>
//               )}
//             </div>

//             <div className="mt-4 space-y-2">
//               <label className="block">
//                 Password
//                 <input
//                   type="password"
//                   placeholder="Enter Your Password"
//                   className="w-80 px-3 py-1 border rounded-md outline-none"
//                   {...register("password", {
//                     required: "Password is required",
//                     minLength: {
//                       value: 6,
//                       message: "Password must be at least 6 characters",
//                     },
//                   })}
//                 />
//               </label>
//               {errors.password && (
//                 <span className="text-sm text-red-500">
//                   {errors.password.message}
//                 </span>
//               )}
//             </div>

//             <div className="flex justify-around mt-4">
//               <button
//                 type="submit"
//                 className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
//               >
//                 Signup
//               </button>
//               <p className="text-xl">
//                 Have an account?{" "}
//                 <button
//                   to="/Login"
//                   className="text-blue-500 underline cursor-pointer"
//                   onClick={(e) => {
//                     e.preventDefault();
//                     // Add state-based modal control here
//                   }}
//                   >
                
//                   Login
//                 </button>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;


import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

function Signup() {
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    try {
      const res = await axios.post("http://localhost:4001/user/signup", userInfo);
      toast.success("Signup successfully");
      localStorage.setItem("Users", JSON.stringify(res.data.user));
      navigate(from, { replace: true });
    } catch (err) {
      if (err.response) {
        toast.error("Error: " + err.response.data.message);
      } else {
        console.error("Unexpected error:", err);
      }
    }
  };

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="w-full max-w-md">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <Link
              to="/"
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            >
              ✕
            </Link>

            <h3 className="font-bold text-lg">Signup</h3>

            <div className="mt-4 space-y-2">
              <label htmlFor="fullname" className="block">
                Name
                <input
                  id="fullname"
                  type="text"
                  placeholder="Enter Your Full Name"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("fullname", { required: "Full name is required" })}
                />
              </label>
              {errors.fullname && (
                <span className="text-sm text-red-500">{errors.fullname.message}</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="email" className="block">
                Email
                <input
                  id="email"
                  type="email"
                  placeholder="Enter Your Email"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email format",
                    },
                  })}
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-500">{errors.email.message}</span>
              )}
            </div>

            <div className="mt-4 space-y-2">
              <label htmlFor="password" className="block">
                Password
                <input
                  id="password"
                  type="password"
                  placeholder="Enter Your Password"
                  className="w-80 px-3 py-1 border rounded-md outline-none"
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                  })}
                />
              </label>
              {errors.password && (
                <span className="text-sm text-red-500">{errors.password.message}</span>
              )}
            </div>

            <div className="flex justify-around mt-4">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Signup
              </button>
              <p className="text-xl">
                Have an account?{" "}
                <Link to="/" className="text-blue-500 underline cursor-pointer">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;

