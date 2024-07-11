import React from 'react';

const Header = () => {
  return (

    <header className="relative h-screen bg-cover" style={{ backgroundImage: 'url(Background.png)'}}>
     <div className="absolute inset-0 bg-gradient-left-to-right"></div>
      <div className="container mx-auto flex justify-between items-center px-6 relative z-10 py-4 ">
        <div className="flex items-center space-x-6 mx-auto">
          <img src="Logo.png" alt="GetPayin Logo" className="h-10 mt-2 mr-4" />
          <nav>
            <ul className="flex space-x-6 text-white text-xs montserrat font-medium">
              <li className="relative group">
                <a href="#" className="hover:text-green-600">Home</a>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-green-600">Employer
                <i className="fas fa-chevron-down ml-1 pl-2 align-middle" style={{ fontSize: '0.5rem'}}></i>
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                <a href="#" className="block px-4 py-2 text-gray-700">item</a>
                <a href="#" className="block px-4 py-2 text-gray-700">item</a>
                </div>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-green-600">Candidate
                <i className="fas fa-chevron-down ml-1 pl-2" style={{ fontSize: '0.5rem'}}></i>
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                  <a href="#" className="block px-4 py-2 text-gray-700">item</a>
                  <a href="#" className="block px-4 py-2 text-gray-700">item</a>
                </div>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-green-600">Pages
                <i className="fas fa-chevron-down ml-1 pl-2" style={{ fontSize: '0.5rem'}}></i>
                </a>
                <div className="absolute hidden group-hover:block bg-white shadow-md mt-2 rounded">
                <a href="#" className="block px-4 py-2 text-gray-700">item</a>
                <a href="#" className="block px-4 py-2 text-gray-700">item</a>
                </div>
              </li>
              <li className="relative group">
                <a href="#" className="hover:text-green-600">Contact</a>
              </li>
            </ul>
          </nav>
        </div>

        <div className="flex space-x-2 mx-auto montserrat">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-xs"><i className="fas fa-sign-in-alt mr-2 text-[0.75rem]"></i>Login</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 text-xs"><i className="fas fa-user-plus mr-2 text-[0.75rem]"></i>Register</button>
        </div>
      </div>
      
  <section className="absolute inset-x-0 top-[50%] transform -translate-y-1/2 bg-none py-52 px-52">
    <div className="container mx-auto text-left max-w-2xl text-white">
      <h2 className="text-5xl mb-4 font-bold montserrat">
        Search Between More Than <span className="text-green-600 bg-green-200 bg-opacity-30 ">50,000</span> Open Jobs.
      </h2>
      <h4>Trending Jobs Keywords: <span className="text-green-600 bg-green-200 bg-opacity-30 border-0 rounded">Web Designer</span><span className="text-green-600 bg-green-200 bg-opacity-30 border-0 rounded">Web Developer</span><span className="text-green-600 bg-green-200 bg-opacity-30 border-0 rounded">IOS Developer</span><span className="text-green-600 bg-green-200 bg-opacity-30 border-0 rounded">Android Developer</span> </h4>
      <div className="border-8 border-gray-300 rounded-s-full  rounded-e-full p-1 text-xs montserrat text-gray-600 mt-6">
        <div className="flex justify-center flex-wrap gap-2 ">
          <input type="text" className=" p-4 w-full md:w-1/4 border rounded-s-full" placeholder="Search Keywords..." />
          
          <div className="relative w-full md:w-1/4">
            <select className="p-4 w-full appearance-none pr-8 border" placeholder="Location">
              <option value="">Location</option>
            </select>
          </div>

          <div className="relative w-full md:w-1/4">
            <select className="p-4 w-full appearance-none pr-8  border" placeholder="Category">
              <option value="">Category</option>
            </select>
          </div>

          <button className="bg-green-600 text-white p-4 w-fit border rounded-e-full">SEARCH</button>
        </div>
      </div>
    </div>
  </section>

    </header>
  );
};

export default Header;
