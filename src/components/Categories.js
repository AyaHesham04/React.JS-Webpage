import React from 'react';

const categories = [
  { name: 'Web & Software Dev', count: 122, imageUrl: 'Vector 1.png' },
  { name: 'Data Science & Analytics', count: 155, imageUrl: 'Vector 2.png' },
  { name: 'Accounting & Consulting', count: 300, imageUrl: 'Vector 3.png' },
  { name: 'Writing & Translation', count: 80, imageUrl: 'Vector 4.png' },
];

const JobCategories = () => {
  return (
    <section className="bg-gray-100 container mx-auto py-20 px-40">
      <div className="container mx-auto text-center montserrat">
        <h3 className="text-2xl mb-8 font-bold">Job Categories</h3>
        <p className="text-gray-600 montserrat text-center px-52">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div className="grid grid-cols-4 gap-4 px-24 py-10 montserrat font-medium text-center rounded  ">
          {categories.map((category, index) => (
            <div key={index} className="border p-4 rounded shadow-sm bg-white py-10 shadow-xl text-sm">
              <div className="flex justify-center items-center mb-4 ">
                <img src={category.imageUrl} alt={category.name} className="w-fit h-14 items-center bg-green-600 rounded-full px-4 py-4" />
              </div>
              <h4 className="text-sm mb-2">{category.name}</h4>
              <p className="text-gray-600"><span className="text-green-600 bg-green-200 bg-opacity-30 px-2 py-1">{category.count} Jobs</span> </p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="border rounded-s-full rounded-e-full p-1 bg-green-600 montserrat font-medium">
          <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">VIEW ALL CATEGORIES</button>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;
