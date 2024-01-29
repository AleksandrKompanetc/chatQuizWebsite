import React from 'react';
import styles from './UserScores.module.css';

const UserScores = ({
    name,
    image,
    scores,
}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.imageWrapper}>
                <img
                    src={image}
                    className={styles.userImage}
                />
            </div>

            <span className={styles.userName}>{name}</span>
            <span className={styles.scores}>{scores}</span>
        </div>
    );
};

export default UserScores;