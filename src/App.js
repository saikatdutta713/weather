// import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import HomePage from "./Components/HomePage";

// const socket = io("http://localhost:3001");
const socket = io("https://317rkxm4-3001.inc1.devtunnels.ms/");

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    socket.on("msg", (data) => {
      console.log("msg from server", data);
      setMessage(data);
    });

    socket.emit("notification", "Thanks for connect");

    return () => {
      socket.off("connect");
    };
  }, []);

  return (
    <>
      <p>{message}</p>
          
      <HomePage />
    </>
  );
}

export default App;
