import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://the-news-dragon-server-mdzisan.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  }, []);
//   console.log(categories);

  return (
    <div className="">
      <h4>All Categories</h4>
      <div className="ps-4">
        {categories.map((category) => (
          <p key={category.id}>
            <Link className="text-decoration-none text-black" to={`/category/${category.id}`}>{category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftNav;
