import React from 'react';
import classes from './Home.module.css';
import { Avatar } from "@material-ui/core";
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import Search from '../../components/Search';

function Home() {
    return (
        <div className={classes.home}>
            <div className={classes.home__header}>
                <div className={classes.home__headerLeft}>
                    <Link to="/about">About</Link>
                    <Link to="/store">Store</Link>
                </div>
                <div className={classes.home__headerRight}>
                    <Link to="/gmail"> Gmail</Link>
                    <Link to="/images">Images</Link>
                    <AppsIcon className={classes.home__headerIcon} />
                    <Avatar className={classes.home__headerIcon} />
                </div>
            </div>
            <div className={classes.home__body}>
                <img src="https://google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="Google logo" />
                <div className={classes.home__inputContainer}>
                    <Search />
                </div>
            </div>
            <div className={classes.home__footer}></div>
        </div>
    )
}

export default Home
