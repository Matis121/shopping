import React from "react";
import { products } from "../products";
import styles from "./Content.module.scss";

const Content = (props) => {
  return (
    <div className={styles.products}>
      {console.log(props.setValue)}
      {products
        .filter((item) => {
          if (props.setValue === "") {
            return item;
          } else if (
            item.name.toLowerCase().includes(props.setValue.toLowerCase())
          ) {
            return item;
          }
        })
        .map((item) => (
          <div className={styles.products__product} key={item.name}>
            <img
              className={styles.products__product__img}
              src={item.image}
              alt={item.name}
            ></img>
            <span className={styles.products__product__name}>{item.name}</span>
            <span className={styles.products__product__desc}>
              {item.description}
            </span>
            {item.sale ? (
              <div className={styles.products__product__discount}>
                <span className={styles.products__product__discount__price}>
                  {item.price.toFixed(2)} zł
                </span>
                <span className={styles.products__product__discount__salePrice}>
                  {(item.price - item.saleAmount).toFixed(2)} zł
                </span>
              </div>
            ) : (
              <span className={styles.products__product__price}>
                {item.price.toFixed(2)} zł
              </span>
            )}

            <button
              className={styles.products__product__button}
              onClick={() => props.changeWord(item)}
            >
              Dodaj do koszyka
            </button>
          </div>
        ))}
    </div>
  );
};

export default Content;
