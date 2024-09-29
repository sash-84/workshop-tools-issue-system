import React from "react";

const ToolCard = ({ tool }) => {
    return (
        <div class="h-full border-2 bg-white border-gray-200 border-opacity-60 rounded-lg overflow-hidden p-3">
          <img class="lg:h-48 md:h-36 w-full object-cover object-center" src={tool.image_url} alt={tool.name} />
          <div class="p-3">
            <h2 class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2>
            <h1 class="title-font text-lg font-medium text-gray-900 mb-1">{tool.name}</h1>
            <p class="leading-relaxed mb-1">Price: ${tool.price}</p>
            <p class="leading-relaxed mb-1">Count: {tool.count}</p>
            <p class={`leading-relaxed mb-1 ${tool.available ? 'text-green-500' : 'text-red-500'}`}>
                {tool.available ? 'Available' : 'Unavailable'}
            </p>
            <div class="flex items-center flex-wrap ">
              <a  href="ww" class="text-green-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
    );
}

export default ToolCard;
