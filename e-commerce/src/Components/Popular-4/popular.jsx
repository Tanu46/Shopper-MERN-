import React,{useState,useEffect} from "react";
import "./popular.css";
// import data_product from "../Assets/data";
import Item from "../Item3/item";
const Popular = () => {
  const[popularproducts,setPopularProducts]=useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => 
      setPopularProducts (data)
      );
  }, []);
  return (
    <div className="popular">
      <h1>Popular in women</h1>
      <hr />
      <div className="popular-item">
        {popularproducts.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Popular;
