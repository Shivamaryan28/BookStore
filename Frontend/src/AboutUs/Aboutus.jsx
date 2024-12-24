import React from 'react'

function Aboutus() {
  return (
    <>
      <div className="bg-gray-100 min-h-screen flex flex-col items-center">
      <header className="bg-purple-600 text-white py-6 w-full text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
      </header>
      <main className="flex flex-col items-center py-8 px-4 w-full max-w-6xl">
        {/* Introduction */}
        <section className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">Who We Are</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Welcome to <span className="font-bold">Online Bookstore</span>, your go-to destination for books from all genres and for all ages. 
            We aim to connect readers with the stories they love and support authors by promoting their work globally. 
          </p>
        </section>

        {/* Figures Section */}
        <section className="grid grid-rows-2 md:grid-row-2 gap-0 items-center mb-12 w-auto">
            {/* {top} */}
        <div className="flex items-center justify-between gap-2">
          <div className="flex-shrink-1">
       <img
      src="https://img.freepik.com/premium-photo/focused-student-achieving-goals-modern-study-space_1388266-9808.jpg?w=550"
      alt="Our mission"
      className="rounded-md shadow-md w-25"
    />
        </div>
        <div className="flex-2">
  <h1 className="text-2xl font-semibold mb-2 pl-10 pb-6">Our Mission</h1>
  <h3 className="text-gray-600 pl-10 pb-12">
    Bridging the gap between readers and their next favorite book.
    At the heart of our platform is a passion for helping readers  discover books.
  </h3>
</div>
</div>
 {/* bottom */}
 <div className="flex items-center gap-2">
  
  <div className="flex-2">
  <h1 className="text-2xl font-semibold mb-2 pl-10 pb-6">Our Team</h1>
  <h3 className="text-gray-600 pl-10 pb-12">
      A dedicated group of book enthusiasts working to bring the best stories to you.
    </h3>
  </div>

  
  <div className="flex-shrink-1">
    <img
      src="https://img.freepik.com/free-photo/realistic-scene-with-books-neighborhood-yard-sale_23-2151238295.jpg?t=st=1734950499~exp=1734954099~hmac=9309ab2ba0ff69fddeb390e72ff1fada2e7fc3a690bf6a68ef66dde6f17ea8b6&w=600"
      alt="Our team"
      className="rounded-md shadow-md w-100"
    />
  </div>
</div>

        </section>

        {/* Values Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Innovation</h3>
              <p className="text-gray-600">
                Embracing technology to revolutionize the way you discover and purchase books.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Passion</h3>
              <p className="text-gray-600">
                Sharing the love of reading and literature with every customer.
              </p>
            </div>
            <div className="p-6 bg-white rounded-md shadow-md text-center">
              <h3 className="text-lg font-semibold text-purple-600 mb-2">Community</h3>
              <p className="text-gray-600">
                Building a vibrant community of readers and authors worldwide.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-purple-600 text-white py-4 text-center w-full">
        <p>&copy; 2024 Online Bookstore. All rights reserved.</p>
      </footer>
    </div>
    </>
  )
}

export default Aboutus
