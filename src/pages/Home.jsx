import React from 'react';
import img from '../assets/logo.jpg';
// import Typewriter from '../components/Typewriter';
import {ReactTyped} from "react-typed";

function Home() {
    
    return (
        <div className="bg-gray-100 min-h-screen flex justify-center items-center font-poppins">
            <div className="max-w-2xl p-8 mx-4">
                <h1 className="text-4xl md:text-8xl mb-4 font-bold text-blue-500 font-poppins">StudySync</h1>
                <p className="text-xl md:text-3xl mb-4 text-purple-700">
               Time to{" "}
            <ReactTyped strings={["get your study in sync"]} typeSpeed={100} loop />
                </p>
            </div>
            <div>
                <img src={img} className="max-w-full h-auto" alt="Logo" />
            </div>
        </div>
    );
}

export default Home;
