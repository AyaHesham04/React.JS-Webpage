import React from 'react';


const NewsletterSubscription = () => {
  return (
    <section className="bg-green-600 py-20">
      <div className="container mx-auto text-center text-white montserrat font-medium">
        <h3 className="text-2xl mb-2">Subscribe Our <br /> Newsletter!</h3>
        <p className="text-white montserrat text-center px-52 py-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="flex justify-center items-center mx-auto max-w-2xl py-2 mt-6 bg-white px-2 rounded border-8 border-green-100">
          <div className="flex items-center w-full border-0 border-gray-300 rounded">
            <i className="fas fa-envelope text-green-600 px-2 py-2 bg-green-200"></i>
            <input
              type="email"
              className="border-0 p-2 w-full"
              placeholder="Enter your Email..."
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 ml-2 rounded">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSubscription;
