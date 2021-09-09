import React, { useState } from 'react';
import classes from './Search.module.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom'
import { useGoogleData } from '../../context/state-context';
import { actionTypes } from '../../context/reducer';

function Search({ hideButtons = false }) {
    const history = useHistory()
    const [input, setInput] = useState("");

    const [dispatch] = useGoogleData();

    const search = (e) => {
        e.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search');

        setInput('');
    }
    return (
        <div className={classes.search}>
            <div className={classes.search__input}>
                <SearchIcon className={classes.search__inputIcon} />
                <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
                <MicIcon />
            </div>

            {!hideButtons ? (
                <div className={classes.search__buttons}>
                    <Button onClick={search} variant="outlined">Google Search</Button>
                    <Button variant="outlined">I'm Feeling Lucky</Button>
                </div>
            ) : (
                <div className={classes.search__buttons}>
                    <Button className={classes.search__buttonsHidden} onClick={search} variant="outlined">Google Search</Button>
                    <Button className={classes.search__buttonsHidden} variant="outlined">I'm Feeling Lucky</Button>
                </div>)
            }
        </div >
    )
}

export default Search
