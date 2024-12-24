import React from 'react'

function Contactus() {
  return (
    <>
    <div className="App bg-gray-100 min-h-screen flex flex-col">
      <main className="flex-grow flex justify-center items-center">
        <section className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-purple-600 text-center mb-4">Contact Us</h2>
          <p className="text-gray-700 text-center mb-6">
            We’d love to hear from you! Fill out the form below or reach us using the provided
            contact information.
          </p>
          <div className="text-gray-700 text-center mb-6">
            <p><strong>Email:</strong> support@onlinebookstore.com</p>
            <p><strong>Phone:</strong> +1 (800) 123-4567</p>
            <p><strong>Address:</strong> 123 Book Lane, Fiction City, FL 56789</p>
          </div>
          <form
            className="flex flex-col"
            onSubmit={(e) => {
              e.preventDefault();
              alert('Form submitted successfully!');
            }}
          >
            <label htmlFor="name" className="text-gray-600 mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
              className="border rounded-md p-2 mb-4 focus:ring-2 focus:ring-purple-400"
            />

            <label htmlFor="email" className="text-gray-600 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
              className="border rounded-md p-2 mb-4 focus:ring-2 focus:ring-purple-400"
            />

            <label htmlFor="message" className="text-gray-600 mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your Message"
              rows="5"
              required
              className="border rounded-md p-2 mb-4 focus:ring-2 focus:ring-purple-400"
            ></textarea>

            <button
              type="submit"
              className="bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </section>
      </main>
    
    </div>
    </>
  )
}

export default Contactus

