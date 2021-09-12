import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

const GifExpertApp = ({defaultCategories=[]}) => {
    const [categories, setCategories] = useState(defaultCategories)

const handleAdd = (category) => {
    setCategories([category, ...categories])
}
  return (
    <>
      <h2>GifExpertApp</h2>
      <AddCategory setCategories={handleAdd}/>
      <hr />
      <ol>
        {categories.map((item) => (
          <GifGrid key={item} category={item} />
        ))}
      </ol>
    </>
  );
};
export default GifExpertApp;
