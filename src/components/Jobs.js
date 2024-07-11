import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const jobs = [
  { type: 'PART TIME', title: 'Product Redesign', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_1.png.png' },
  { type: 'FULL TIME', title: 'New Product Mockup', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_2.png.png' },
  { type: 'PART TIME', title: 'Custom PHP Developer', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_3.png.png' },
  { type: 'PART TIME', title: 'WordPress Developer', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_4.png.png' },
  { type: 'INTERNSHIP', title: 'Web Maintenance', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_5.png.png' },
  { type: 'PART TIME', title: 'Photoshop Designer', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_6.png.png' },
  { type: 'FULL TIME', title: 'HTML5 & CSS3 Coder', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_7.png.png' },
  { type: 'PART TIME', title: '.Net Developer', location: '2796 Scenic Way, IL 62373', applyLink: '#', imageUrl: 'company_logo_8.png.png' },
];

const JobListings = () => {
  const [activeTab, setActiveTab] = useState('Latest Jobs');
  const [clickedStates, setClickedStates] = useState(new Array(jobs.length).fill(false));
  const toggleHeart = (index) => {
    const newClickedStates = [...clickedStates];
    newClickedStates[index] = !newClickedStates[index];
    setClickedStates(newClickedStates);
  };
  return (
    <section className="container mx-auto py-20 px-40">
      <div className="flex justify-center items-center">
        <div className="border-8 border-green-600 rounded p-1 bg-green-600 montserrat font-medium">
          <button
            onClick={() => setActiveTab('Latest Jobs')}
            className={`px-4 py-2 ${activeTab === 'Latest Jobs' ? 'bg-white text-green-600' : 'bg-green-600 text-white'}`}
          >
            Latest Jobs
          </button>
          <button
            onClick={() => setActiveTab('Recent Jobs')}
            className={`px-4 py-2 ${activeTab === 'Recent Jobs' ? 'bg-white text-green-600' : 'bg-green-600 text-white'}`}
          >
            Recent Jobs
          </button></div>
      </div>

      <div className="grid grid-cols-4 gap-4 px-24 py-10 montserrat font-medium text-center ">
        {jobs.map((job, index) => (
          <div key={index} className="border p-4 rounded shadow-xl">
            <div className="flex justify-between items-center ">
              <span className={`badge ${job.type === 'FULL TIME' ? 'bg-green-200 text-green-600 border border-green-800' : job.type === 'PART TIME' ? 'bg-amber-200 text-amber-600 border border-amber-800' : 'bg-red-200 text-red-600 border border-red-800'} p-4 rounded capitalize font-medium`}>
                {job.type}
              </span>
              <button
                onClick={() => toggleHeart(index)}
                className={`rounded-full px-2 py-1 bg-green-600 rounded-full px-2 py-1 ${clickedStates[index] ? 'text-red-600' : 'text-white'}`}
              >
                <FontAwesomeIcon icon={faHeart} />
              </button>
            </div>
            <div className="flex justify-center items-center my-4">
              <img src={job.imageUrl} alt={job.title} className="w-fit h-20 mt-4 items-center" />
            </div>
            <h4 className="text-xl my-4 ">{job.title}</h4>
            <p className="text-gray-600">{job.location}</p>
            <button className="bg-white text-green-600 px-4 py-2 mt-4 block mx-auto text-sm capitalize border border-green-600 hover:bg-green-700 hover:text-white">
              APPLY NOW
            </button>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center">
        <div className="border rounded-s-full rounded-e-full p-1 bg-green-600 montserrat font-medium">
          <button className="bg-green-600 text-white px-4 py-2 hover:bg-green-700">BROWSE ALL JOBS</button>
        </div>
      </div>

    </section>
  );
};

export default JobListings;
