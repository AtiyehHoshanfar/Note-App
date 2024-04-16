import { useState } from "react";
import styles from "./NoteAppHeader.module.css";
import { useRef } from "react";
import useOutsideClick from "../hook/useOutsideClick";

function NoteAppHeader() {
  const [isOpenSort, setIsOpenSort] = useState(false);
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const date=new Date()
  const sortRef = useRef();
  useOutsideClick("sortItems-container", sortRef, () => setIsOpenSort(false));
  return (
    <div className={styles.NoteAppHeader__container}>
      <div className={styles.NoteAppHeader__content}>
        <div className={styles.NoteAppHeader__date}>
          <span className={styles.dayOfWeek}>
            {day[date.getDay() - 1]}
          </span>
          <span className={styles.dayOfMonth}>{date.getDate()}</span>
          <span className={styles.month}>{month[date.getMonth()]}</span>
        </div>
        <h1 className={styles.NoteAppHeader__time}>
          Good{" "}
          {0 <= date.getHours() + 1 < 6
            ? "Morning"
            : 6 <= date.getHours() + 1 < 12
            ? "Afternoon"
            : 12 <= date.getHours() + 1 < 18
            ? "Evening"
            : 18 <= date.getHours() + 1 < 24
            ? "Night"
            : ""}
        </h1>
      </div>

      <div className={styles.NoteAppHeader__sort_container}>
        <button
          className={styles.NoteAppHeader__sort}
          onClick={() => setIsOpenSort((isOpen) => !isOpen)}
        >
          <i className="fa-solid fa-arrow-up-short-wide"></i>
        </button>
        <ul
          ref={sortRef}
          id="sortItems-container"
          className={`${styles.NoteAppHeader__sortItems} ${
            isOpenSort && styles.visible
          }`}
        >
          <li className={styles.NoteAppHeader__sortItem}>Earliest</li>
          <li className={styles.NoteAppHeader__sortItem}>Latest</li>
          <li className={styles.NoteAppHeader__sortItem}>Completed</li>
        </ul>
      </div>
    </div>
  );
}

export default NoteAppHeader;
