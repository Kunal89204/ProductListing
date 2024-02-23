import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4">About Us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam varius eros non massa mollis, quis tristique libero maximus.</p>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Useful Links</h2>
            <ul>
              <li><a href="/" className="hover:text-gray-400">Home</a></li>
              <li><a href="/" className="hover:text-gray-400">About</a></li>
              <li><a href="/" className="hover:text-gray-400">Services</a></li>
              <li><a href="/" className="hover:text-gray-400">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <p>123 Main Street</p>
            <p>New York, NY 10001</p>
            <p>Email: info@example.com</p>
            <p>Phone: 123-456-7890</p>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 flex justify-between items-center">
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
          <div>
            <a href="/" className="text-gray-400 hover:text-white mr-4">Privacy Policy</a>
            <a href="/" className="text-gray-400 hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
