import React from "react";

//create your first component
const Home = (props) => {
  console.log(props.sec);
  return (
    <div className="container mx-5 my-4 bg-dark d-flex justify-content-evenly fs-5">
      <h1 className="counter text-white border rounded border-white">
        {Math.floor(props.sec / 100000) % 10}
      </h1>
      <h1 className="counter text-white border rounded  border-white">
        {Math.floor(props.sec / 10000) % 10} 
      </h1>
      <h1 className="counter text-white border rounded  border-white">
        {Math.floor(props.sec / 1000) % 10} 
      </h1>
      <h1 className="counter text-white border rounded  border-white">
        {Math.floor(props.sec / 100) % 10} 
      </h1>
      <h1 className="counter text-white border  rounded border-white">
        {Math.floor(props.sec / 10) % 10} 
      </h1>
      <h1 className="counter text-white border rounded  border-white">
        {Math.floor(props.sec / 1) % 10} 
      </h1>
      
    </div>
  );
};

export default Home;
