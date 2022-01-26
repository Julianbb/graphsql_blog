import { useState, useEffect } from "react";
import React from "react";
import { getCategories } from "../services";
import Link from "next/link";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => setCategories(newCategories));
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-8 mb-8 pb-12">
      <h3 className="text-xl mb-8 font-semibold border-b pb-4 ">Categories</h3>
      {categories.map((categorie) => (
        <Link key={categorie.slug} href={`/category/${categorie.slug}`}>
          <span className="cursor-pointer block pb-3 mb-3">
            {categorie.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
