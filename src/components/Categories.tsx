import React from 'react';

const categories = [
  {
    name: "Women's Collection",
    image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Men's Collection",
    image: "https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Accessories",
    image: "https://images.unsplash.com/photo-1492707892479-7bc8d5a4ee93?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Categories() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl font-bold mb-8">Shop by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.name} className="relative group cursor-pointer">
            <div className="relative h-80 w-full overflow-hidden rounded-lg">
              <img
                src={category.image}
                alt={category.name}
                className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
            <h3 className="absolute bottom-4 left-4 text-xl font-semibold text-white">
              {category.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}