import React, { useState } from "react";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Header = (props) => {
  const openForm = () => {
    console.log("clicked");
    return false;
  };

  const [filter, setFilter] = useState("");

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        <span>NEO</span>
        <span>PL</span>
      </div>
      <div className={styles.header__searchBar}>
        <input
          className={styles.header__searchBar_input}
          type="text"
          placeholder="Szukaj produktu"
          onChange={handleFilter}
        ></input>
        <button
          className={styles.header__searchBar_button}
          onClick={() => props.searchInput(filter)}
        >
          SZUKAJ
        </button>
      </div>
      <div className={styles.header__basket}>
        <div
          className={styles.header__basket_text}
          onClick={() => props.openForm(openForm)}
        >
          Koszyk
        </div>
        <div className={styles.header__basket_img}>
          <FontAwesomeIcon
            icon={faCartShopping}
            onClick={() => props.openForm(openForm)}
          />
        </div>
        <div
          className={styles.header__basket_quantity}
          onClick={() => props.openForm(openForm)}
        >
          {props.basketLenght === 0 ? "" : props.basketLenght}
        </div>
      </div>
    </div>
  );
};

export default Header;
