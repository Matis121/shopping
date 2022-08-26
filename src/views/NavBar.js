import React from "react";
import styles from "./Navbar.module.scss";

const NavBar = (props) => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbar__title}>Kategorie</div>
      <div className={styles.navbar__list}>
        <ul className={styles.navbar__list__items}>
          <li
            className={styles.navbar__list__items_item}
            onClick={() => props.filterValue("")}
          >
            Wszystkie
          </li>
          <li
            className={styles.navbar__list__items_item}
            onClick={() => props.filterValue("Iphone")}
          >
            Iphone
          </li>
          <li
            className={styles.navbar__list__items_item}
            onClick={() => props.filterValue("Huawei")}
          >
            Huawei
          </li>
          <li
            className={styles.navbar__list__items_item}
            onClick={() => props.filterValue("Nokia")}
          >
            Nokia
          </li>
          <li
            className={styles.navbar__list__items_item}
            onClick={() => props.filterValue("Samsung")}
          >
            Samsung
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
