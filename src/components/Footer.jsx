import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-purple-600 py-6">
      <div className="container mx-auto text-center text-white">
        <p>Create By Bandish Vaidya | All Rights Reserved.</p>
        <div className="flex justify-center space-x-4 mt-4">
        <a href="https://www.linkedin.com/in/bandish-vaidya-22b53315a/" className="hover:text-gray-300"><i className="fab fa-linkedin"></i></a>
          <a href="https://github.com/Bandish04" className="hover:text-gray-300"><i className="fab fa-github"></i></a>
          <a href="https://www.instagram.com/bandish002?igsh=MXBiejhxNmJ0em51aA%3D%3D&utm_source=qr" className="hover:text-gray-300"><i className="fab fa-instagram"></i></a>
          <a href="https://www.youtube.com" className="hover:text-gray-300"><i className="fab fa-youtube"></i></a>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
