import styles from "./style.module.css";

const ListingCard = () => {
  return (
    <div className={styles.card}>
      <img className={styles.card_img} src="./assets/item2.jpg"/>
      <h2 className={styles.card_title}>Parrot</h2>
      <p className={styles.price}>$20</p>
      <a href="#" className={styles.card_button}>
      Title = "Claim Me"
      </a>
    </div>
  );
};

export default ListingCard;
