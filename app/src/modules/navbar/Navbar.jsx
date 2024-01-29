import React from 'react';
import { Layout, Button } from 'antd';
import { SIGN_OUT } from '../../store/actions/userAction';
import { connect } from 'react-redux';
import styles from './Navbar.module.css';

const { Header } = Layout;

function Navbar({ user, signOut }) {

    return (
        <Header className={styles.header}>
            {user ?
                <Button className={styles.button} onClick={signOut}>LogOut</Button>
                :
                null
            }
        </Header>
    );
}

const signOut = () => ({ type: SIGN_OUT });

const getUserId = state => state.userState.userId;

const mapStateToProps = state => ({
    user: getUserId(state),
});

const mapDispatchToProps = dispatch => ({
    signOut: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);