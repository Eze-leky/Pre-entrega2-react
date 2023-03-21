import "./list.css";
import { useState, useEffect } from "react";
import { products } from "../../productsMock";
import ItemList from "../itemList/ItemList";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const productList = new Promise((resolve, reject) => {
      resolve(products);
    });

    productList
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  // console.log(items);

  return (
    <div className>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
