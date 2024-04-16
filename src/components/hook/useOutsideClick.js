import { useEffect } from "react";

function useOutsideClick(id, ref, cb) {
  useEffect(() => {
    function handleOutsideClick(event) {
      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.id !== id
      ) {
        console.log("clicked");
        cb();
      }
    }
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [id, ref, cb]);
}
export default useOutsideClick;
