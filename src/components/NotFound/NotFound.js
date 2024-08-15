import { Link } from "react-router-dom";
import styles from "./NotFound.module.css";

const NotFound = () => {
  return (
    <div className={styles.notfound}>
      <h2>Page not found!</h2>
      <Link to="/" className="btn btnLink">
        Back to homepage
      </Link>
    </div>
  );
};

export default NotFound;
