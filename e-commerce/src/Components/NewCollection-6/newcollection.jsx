import React,{useEffect,useState} from 'react';
import './newcollection.css';
// import new_collection from "../Assets/new_collections"
import Item from '../Item3/item';
const Newcollection = () => {
const[new_collection,setNew_collection]=useState([]);
  useEffect(() => {
    fetch("http://localhost:4000/newcollection")
      .then((response) => response.json())
      .then((data) => 
       setNew_collection(data)
      );
  }, []);
    return (
        <div className='newcollection'>
         <h1>new collection</h1>
         <hr/>
        
         <div className="collection">
         {new_collection.map((item,i)=>{
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
}

export default Newcollection;
