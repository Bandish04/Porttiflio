import React from 'react';
import DevImg from '../assets/asset 0.png';

const Hero = () => {
  return (
    <section id="home" className="bg-white dark:bg-gray-900 py-20 px-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex flex-col justify-center p-16 mt-4 text-2xl">
        <a href="https://www.linkedin.com/in/bandish-vaidya-22b53315a/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Bandish04" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/bandish002?igsh=MXBiejhxNmJ0em51aA%3D%3D&utm_source=qr" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
          </div>
        <div className="text-left">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Hello, I'm <br />
            <span className="text-purple-600 dark:text-purple-400">Bandish Vaidya</span>
          </h1>
          <h2 className="text-2xl font-semibold mt-2 text-gray-800 dark:text-gray-300">Software Engineer</h2>
          <p className="mt-4 text-gray-600 dark:text-gray-400">Bandish Vaidya is a software engineering student specializing in AI at Centennial College. Passionate about technology and innovation, Bandish is focused on developing intelligent solutions and gaining hands-on experience in the field of AI</p>
          <button className="mt-6 px-6 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
          <a href="#contact">Contact Me</a>
          </button>
        </div>
        <img src={DevImg} alt="Developer Illustration" className="w-1/2 " />
      </div>
    </section>
  );
};

export default Hero;
