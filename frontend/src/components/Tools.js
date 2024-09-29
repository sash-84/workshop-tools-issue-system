import React, { useState, useEffect } from 'react';
import ToolCard from './ToolCard';
import axios from 'axios';

const Tools = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:5000/categories-with-tools')
      .then(response => {
        setCategories(response.data);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  return (
    <section className="text-gray-600 body-font relative bg-gray-100 ">
    <div class="container px-5 py-20 mx-auto md:flex">
      <div className="md:w-1/4 bg-gray-100 p-4">
        <h2 className="text-xl font-semibold mb-4 text-center md:text-left">Categories</h2>
        <ul className="flex flex-wrap gap-4 justify-center items-center md:flex-col md:justify-start md:items-start">
          {categories.map((category, index) => (
            <li
              key={category.id}
              className={`cursor-pointer p-2 mb-2 rounded-lg md:w-full
                          ${selectedCategory === index ? 'bg-gray-300 text-green-500' : 'bg-gray-200'}
                          hover:bg-gray-300`}
              onClick={() => setSelectedCategory(index)}
            >
              {category.name}
            </li>
          ))}
        </ul>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:w-3/4">
        {selectedCategory >= 0 && categories[selectedCategory]?.tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </div>
      </div>
    </section>
  );
};

export default Tools;
