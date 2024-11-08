import styles from './Card.module.css';

const Card = ({ brand, model }) => { 
    return (
    <article className={styles.card}>
        <h2>{brand}</h2>
        <div>
            <p>Modelo: {model}</p>
        </div>
    </article>
    );
};

export default Card;

