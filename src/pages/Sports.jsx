// eslint-disable-next-line no-unused-vars
import React from "react";
import { useParams } from "react-router-dom";

const Sports = () => {
  const { sport } = useParams(); // Get the sport name from the URL

  return (
    <div className="p-6">
      <h1 className="mb-4 text-3xl font-semibold">
        {sport ? `${sport.toUpperCase()} Stats` : "Select a Sport"}
      </h1>
      <p className="text-gray-600">
        {sport ? (
          `Displaying statistics for ${sport.toUpperCase()}.`
        ) : (
          "Please select a sport from the sidebar."
        )}
      </p>
    </div>
  );
};

export default Sports;
