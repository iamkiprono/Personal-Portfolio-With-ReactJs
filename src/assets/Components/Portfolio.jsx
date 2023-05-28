import React from 'react';

const Portfolio = () => {
  return (
    <div className="bg-primary min-h-screen">
      <header className="bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-white">Logo</h1>
              </div>
              <div className="hidden md:block ml-10">
                <a
                  href="#"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-white hover:text-gray-300 px-3 py-2 rounded-md text-sm font-medium"
                >
                  Skills
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <main>
        <section className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <h2 className="text-3xl font-bold text-white">Welcome to My Portfolio</h2>
            <p className="mt-4 text-white text-center">
              I am a full-stack developer with expertise in React and Tailwind CSS. I'm passionate about creating
              high-quality web applications that deliver excellent user experiences.
            </p>
          </div>
        </section>
        <section className="bg-white py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Replace with project cards */}
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Project 1</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Project 2</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">Project 3</h3>
                <p className="text-gray-600">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                  dolore magna aliqua.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-secondary py-10 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center">Contact</h2>
            <p className="mt-4 text-white text-center">
              Feel free to get in touch if you have any questions or would like to discuss a potential collaboration.
            </p>
            {/* Replace with contact information */}
            <div className="mt-8 text-white text-center">
              <p>Email: example@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-primary py-4 text-white text-center">
        <div>&copy; 2023 Your Name. All rights reserved.</div>
      </footer>
    </div>
  );
};

export default Portfolio;
