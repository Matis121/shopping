import React, { useState, useEffect } from "react";
import styles from "./Basket.module.scss";

const Basket = (props) => {
  const openForm = () => {
    return true;
  };

  const [price, setPrice] = useState(0);

  const handleRemove = (id) => {
    const arr = props.word.filter((item) => item.id !== id);
    props.setWord(arr);
    handlePrice();
  };

  const handlePrice = () => {
    let ans = 0;

    props.word.map(
      (item) =>
        (ans +=
          item.amount * (item.sale ? item.price - item.saleAmount : item.price))
    );
    setPrice(ans.toFixed(2));
  };

  useEffect(() => {
    handlePrice();
  });

  console.log("Długośc w koszyku " + props.word.length);

  return (
    <div className={styles.basket}>
      <div className={styles.basket__form}>
        <div
          className={styles.basket__form__close}
          onClick={() => props.openForm(openForm)}
        >
          X
        </div>
        <article>
          {props.word.map((item) => (
            <div className={styles.basket__item} key={item.id}>
              <div className={styles.basket__item__img}>
                <img src={item.image} alt="" />
              </div>
              <div className={styles.basket__item__name}>
                <p>{item.name}</p>
              </div>
              <div className={styles.basket__item__buttons}>
                <button
                  className={styles.basket__item__buttons_button}
                  onClick={() => props.handleChange(item, -1)}
                >
                  -
                </button>
                <button className={styles.basket__item__buttons_button}>
                  {item.amount}
                </button>
                <button
                  className={styles.basket__item__buttons_button}
                  onClick={() => props.handleChange(item, 1)}
                >
                  +
                </button>
              </div>
              <div className={styles.basket__item__price}>
                <span>
                  {item.sale
                    ? (item.price - item.saleAmount).toFixed(2)
                    : item.price}{" "}
                  zł
                </span>
              </div>
              <div className={styles.basket__item__delete}>
                <button onClick={() => handleRemove(item.id)}>
                  usuń podukt
                </button>
              </div>
            </div>
          ))}
          {props.word.length > 0 ? (
            <div className={styles.basket__total}>
              <span>Łączna kwota: </span>
              <span className={styles.basket__total_price}>{price} zł</span>
            </div>
          ) : (
            <div className={styles.basket__form__empty}>
              Twój koszyk jest pusty
            </div>
          )}
        </article>
      </div>
    </div>
  );
};

export default Basket;
