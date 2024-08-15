import { NavLink } from "react-router-dom";
import Container from "../UI/Container/Container";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <Container>
        <div className={styles.title}>
          <h2>
            <span>Movies</span>App
          </h2>
        </div>
        <div className={styles.menu}>
          <div className={styles.items}>
            <NavLink to="/">All movies</NavLink>
            <NavLink to="/favorites">Favorites</NavLink>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
