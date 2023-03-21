import "./list.css";
import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  return (
    <div>
      <h1> hola</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
// useEffect(() => {
//   const productList = new Promise((resolve, reject) => {
//     resolve(products);
//     // reject("algo salio mal");
//   });

//   productList
//     .then((res) => {
//       setItems(res);
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }, []);
// console.log(items);
