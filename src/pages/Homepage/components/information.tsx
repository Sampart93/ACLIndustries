import React from 'react';

const Information: React.FC = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-16 min-h-[600px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Section */}
        <div className="flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold text-[rgb(34,50,109)] leading-tight">
            Specialist Resin Flooring Solutions
          </h1>
          <p className="text-lg text-gray-700">
            Operating from Chorley and serving Greater Manchester, Liverpool, Blackburn, Preston, and all other areas in North West England, we specialise in epoxy coatings, resin floors, and rapid-curing MMA finishes for industrial, commercial, and domestic markets.
          </p>
          <p className="text-lg text-gray-700">
            With a proven track record, we deliver quality installations, free site inspections, and expert advice—all at a fair price. Choose ACL Industrial Flooring for your next flooring project.
          </p>
          <button className="px-6 py-3 bg-[rgb(241,92,34)] text-white font-semibold rounded-md hover:bg-opacity-90 transition">
            Learn More
          </button>
        </div>

        {/* Right Section */}
        <div className="relative">
          <div className="w-full h-auto md:h-[400px] rounded-lg overflow-hidden shadow-lg">
            {/* Video Embed */}
            <iframe
              src="https://www.youtube.com/embed/tgi8WJVTeyA"
              title="Resin Flooring Solutions"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Information;

