import { useState } from "react";
import styles from "./NoteAppHeader.module.css";
import { useRef } from "react";
import useOutsideClick from "../hook/useOutsideClick";

function NoteAppHeader() {
  const[isOpenSort,setIsOpenSort]=useState(false)
  const sortRef=useRef();
  useOutsideClick("sortItems-container",sortRef,()=>setIsOpenSort(false))
  return (
    <div className={styles.NoteAppHeader__container}>
      <div className={styles.NoteAppHeader__content}>
        <div className={styles.NoteAppHeader__date}>
          <span className={styles.dayOfWeek}>Wed</span>
          <span className={styles.dayOfMonth}>12</span>
          <span className={styles.month}>November</span>
        </div>
        <h1 className={styles.NoteAppHeader__time}>Good Afternoon</h1>
      </div>

      <div className={styles.NoteAppHeader__sort_container}>
      <button className={styles.NoteAppHeader__sort} onClick={()=>setIsOpenSort(isOpen=>!isOpen)}>
        <i className="fa-solid fa-arrow-up-short-wide"></i>
      </button>
        <ul  ref={sortRef}  id="sortItems-container" className={`${styles.NoteAppHeader__sortItems} ${isOpenSort&&styles.visible}`}>
          <li className={styles.NoteAppHeader__sortItem}>Earliest</li>
          <li className={styles.NoteAppHeader__sortItem}>Latest</li>
          <li className={styles.NoteAppHeader__sortItem}>Completed</li>
        </ul>
      </div>
    </div>
  );
}

export default NoteAppHeader;
