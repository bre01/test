import { FaStar } from "react-icons/fa";
export function Star({ selected = false }) {
    return (
      <FaStar color={selected ? "red" : "grey"} id="star" />
    );
  }
  