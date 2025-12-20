// TopLoadingBar.js
import React from 'react';
import { useEffect, useState } from 'react';
import { Line } from 'rc-progress'; // Assuming you're using 'rc-progress' package

const TopLoadingBar = ({ percentage }) => {
  const [currentPercentage, setCurrentPercentage] = useState(0);

  useEffect(() => {
    setCurrentPercentage(percentage);
  }, [percentage]);

  return (
    <div className="fixed top-0 left-0 w-full bg-gray-800 text-white">
      <Line
        percent={currentPercentage}
        strokeWidth="4"
        strokeColor="#00bfae"
        trailWidth="1"
        trailColor="#444"
      />
    </div>
  );
};

export default TopLoadingBar;
