import React from 'react';

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full bg-white text-black shadow-md">
      <div className="bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container py-2">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold">Ojek Map</h2>
            {/* Elemen lainnya, seperti Link atau NavLink */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
