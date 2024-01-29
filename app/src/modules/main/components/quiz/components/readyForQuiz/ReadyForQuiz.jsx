import React from 'react';
import { useDispatch, useDispatch, useSelector } from 'react-redux';
import { fetchUserReadyToStartQuiz } from '../../../../../../store/actions/quizAction';

const ReadyForQuiz = () => {
    const dispatch = useDispatch();
    const isUserReadyToStartQuiz = useSelector(state => state.quizState.isUserReadyToStartQuiz);
    const toggleUserReady = () => {
        dispatch(fetchUserReadyToStartQuiz(!isUserReadyToStartQuiz));
    };

    return (
        <div>
            {isUserReadyToStartQuiz ? (
                <button onClick={toggleUserReady}>Cancel</button>
            ) : (
                <button onClick={toggleUserReady}>Start</button>
            )}
        </div>
    );
};

export defualt ReadyForQuiz;