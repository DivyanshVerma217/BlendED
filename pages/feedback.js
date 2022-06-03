
import { useRef, useState } from "react";
import NavBar from "../components/navBar";

export default function Feedback() {
  const outputDivRef = useRef(null);
  const [userDetails, setUserDetails] = useState({});

  const handleSubmit = (e) => {
    
    e.preventDefault();

    console.log("name->",e.target.name.value);
    console.log("email->", e.target.email.value)
    alert("CHECK CONSOLE")
  
    // outputDivRef.current.style.display = "block";

    setUserDetails({
      name: e.target.name.value,
      email: e.target.email.value,
    });
  };

  return (
    <div className="flex items-center justify-center h-screen w-screen bg-black">
      <NavBar />

      <div className="max-w-3xl m-auto px-6" >
        <h1 className="text-5xl text-white flex justify-center m-6 font-bold underline">ENTER DETAILS</h1>
        <form
          className="border-2 p-4 shadow-lg shadow-white flex flex-col rounded-lg md:w-[40vw] md:h-[35vh]"
          onSubmit={handleSubmit}
        >
          <h1 className="text-white">Name</h1>
          <input
            type="text"
            placeholder="Enter your name"
            name="name"
            className="borders outline-none"
            required
          />
          <h1  className="text-white">Email</h1>
          <input
            type="email"
            placeholder="Enter your email"
            name="email"
            className="borders outline-none"
            required
          />
          <button
            type="submit"
            className="bg-white   w-2/4 p-2  my-2 font-bold text-black hover:text-[#FE595E] self-center rounded"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
   
  );
  console.log("hello");
}
