import React from 'react';
import { connect } from 'react-redux';
import { SIGN_IN_WITH_GOOGLE } from '../../store/actions/userAction';
import styles from './Login.module.css';

function Login({
    signInWithGoogle,
}) {
    return (
        <div className={styles.wrapper}>
            <button className={styles.btn} onClick={signInWithGoogle}>Login with Google</button>
        </div>
    );
}
const signInWithGoogle = () => ({ type: SIGN_IN_WITH_GOOGLE });

const mapDispatchToProps = dispatch => ({
    signInWithGoogle: () => dispatch(signInWithGoogle()),
});

export default connect(null, mapDispatchToProps)(Login);