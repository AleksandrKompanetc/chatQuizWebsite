import React from 'react';
import UserScores from './components/userScores/UserScores';
import { connect } from 'react-redux';
import * as actions from '../../../../../../store/actions/quizAction';
import * as selectors from '../../../../Main';
import styles from './Results.module.css';

const Results = ({
    usersResultsList,
    setIsShowResults,
}) => {
    return (
        <div className={styles.wrapper}>
            {usersResultsList.length ?
                <div className={styles.scoresContainer}>
                    <div className={styles.scoresHeader}>
                        <span className={styles.user}>user</span>
                        <span className={styles.scores}>scores</span>
                    </div>
                    {usersResultsList.map(item =>
                        <UserScores
                            key={item.photoURL}
                            name={item.displayName}
                            image={item.photoURL}
                            scores={item.correctAnswersCount}
                        />
                    )}
                </div>
                : null
            }
            <div className={styles.buttonWrapper}>
                <button
                    onClick={() => setIsShowResults(false)}
                    className={styles.button}
                >
                    {'ok'}
                </button>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    usersResultsList: selectors.getUsersResultsList(state),
});

const mapDispatchToProps = dispatch => ({
    setIsShowResults: payload => dispatch(actions.setIsShowResults(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Results);