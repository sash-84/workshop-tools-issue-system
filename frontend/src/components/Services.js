import React from 'react';

const Services = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-20 mx-auto bg-gray-100">
        <h1 className="text-2xl font-medium title-font text-gray-900 text-center mb-8">Welcome to Workshop Department</h1>
        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
          <p className="text-lg mb-8 text-center">This department conducts mechanical workshop practices such as Machining, Welding,  Black Smithy, Plastic Injection Molding, Carpentry, Fitting, Pattern Making, Foundry, Tin Smithy, etc. for the students of various disciplines. In addition to academic work, the workshop facilitates students to carry out various work related to model preparation, machine attachments, supporting devices for different technical and cultural events and project work, etc.</p>
          <h2 className="text-gray-900 font-medium title-font text-xl tracking-wider">Workshop Sections</h2>
          <span className="inline-block h-1 w-10 rounded bg-green-500 mt-1 mb-5"></span>
          <ul  classNameName='text-4sm'>
            <li>Machine Shop & Lathe Section</li>
            <li>Carpentry Section</li>
            <li>Fitting Section</li>
            <li>Welding Section</li>
            <li>Smithy Section</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Services;
