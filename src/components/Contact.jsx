import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Swal from 'sweetalert2';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_122e0vb', 'template_r3nphi8', e.target, 'UsUo6jTp6zZuHA7Q_')
      .then(
        (result) => {
          console.log('Success:', result.text);
          setFormData({ name: '', email: '', message: '' });

          Swal.fire({
            title: 'Success!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonText: 'OK',
            confirmButtonColor: '#4CAF50',
          });
        },
        (error) => {
          console.error('Error:', error.text);

          Swal.fire({
            title: 'Oops!',
            text: 'Something went wrong, please try again later.',
            icon: 'error',
            confirmButtonText: 'OK',
            confirmButtonColor: '#f44336'
          });
        }
      );
  };

  return (
    <div id="contact" className="bg-gradient-to-r from-blue-100 via-indigo-200 to-purple-200 py-16 sm:py-24 lg:py-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">Contact Me</h2>

        {/* Contact Form */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-14">
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl"
            whileHover={{ opacity: 0.9 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Get in Touch</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  required
                />
              </div>

              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-4 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                  rows="6"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="bg-white p-8 rounded-lg shadow-xl"
            whileHover={{ opacity: 0.9 }}
          >
            <h3 className="text-2xl font-semibold text-gray-700 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaEnvelope className="text-2xl mr-4 text-gray-600" />
                <a href="mailto:mohammedhasan.contact@gmail.com" className="sm:text-lg text-blue-500 hover:underline text-base">
                  mohammedhasan.contact@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="text-2xl mr-4 text-gray-600" />
                <a href="tel:+8801516556649" className="text-lg text-blue-500 hover:underline">
                  +880 1516 556649
                </a>
              </li>
              <li className="flex items-center">
                <FaWhatsapp className="text-2xl mr-4 text-green-500" />
                <a
                  href="https://wa.me/8801309735145"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-green-500 hover:underline"
                >
                  WhatsApp
                </a>
              </li>
              <li className="flex items-center">
                <span className="text-2xl mr-4">📍</span>
                <span className="text-lg text-gray-600">Chittagong, Bangladesh</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
