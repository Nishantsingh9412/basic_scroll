import React from "react";
import Heading from "./components/Heading";
import Testimonials from "./components/Testimonials";
import reviews from "./data";

const App = () => {
  return(
   <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
    <div className="text-center">
      <Heading />
      <Testimonials 
        reviews={reviews} 
      />
    </div>
  </div>
  );
};

export default App;
