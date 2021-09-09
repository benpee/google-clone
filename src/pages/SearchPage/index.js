import React from 'react';
import { useGoogleData } from '../../context/state-context';
import useGoogleSearch from '../../hooks/useGoogleSearch';
import classes from './SearchPage.module.css';
import { Link } from 'react-router-dom';
import Search from '../../components/Search';
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import RoomIcon from '@material-ui/icons/Room';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';

// https://developers.google.com/custom-search/v1/using_rest
// custom key from the page and use it
// https://cse.google.com/cse/create/new


function SearchPage() {
    const [{ term }, dispatch] = useGoogleData();

    const { data } = useGoogleSearch(term);
    return (
        <div className={classes.searchPage}>
            <div className={classes.searchPage__header}>
                <Link to="/">
                    <img
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                        alt="Google logo"
                        className={classes.searchPage__logo}
                    />
                </Link>
                <div className={classes.searchPage__headerBody}>
                    <Search hideButtons />
                    <div className={classes.searchpage__options}>
                        <div className={classes.searchPage__optionsLeft}>
                            <div className={classes.searchPage__option}>
                                <SearchIcon />
                                <Link to="/all">All</Link>
                            </div>
                            <div className={classes.searchPage__option}>
                                <DescriptionIcon />
                                <Link to="/news">News</Link>
                            </div>
                            <div className={classes.searchPage__option}>
                                <ImageIcon />
                                <Link to="/images">Images</Link>
                            </div>
                            <div className={classes.searchPage__option}>
                                <LocalOfferIcon />
                                <Link to="/shopping">Shopping</Link>
                            </div>
                            <div className={classes.searchPage__option}>
                                <RoomIcon />
                                <Link to="/maps">Maps</Link>
                            </div>
                            <div className={classes.searchPage__option}>
                                <MoreVertIcon />
                                <Link to="/more">More</Link>
                            </div>
                        </div>
                        <div className={classes.searchPage__optionsRight}>
                            <div className={classes.searchPage__option}>
                                <Link to="/setting">Settings</Link>
                            </div>
                            <div className={classes.searchPage__option}>
                                <Link to="/tools">Tools</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {term && <div className={classes.searchPage__results}>
                <p classNmae={classes.searchPage__resultCount}>About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds)</p>
                {data?.items.map((item) => (
                    <div className={classes.searchPage__result}>
                        <a href={item.link}>
                            {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                <img src={item.pagemap?.cse_image[0]?.src} alt={item.title} />
                            )}
                            {item.displayLink} ⬇
                        </a>
                        <a href={item.link} className={classes.searchPage__resultTitle}>
                            <h2>{item.title}</h2>
                        </a>
                        <p className={classes.searchpage__resultSnippet}>{item.snippet}</p>
                    </div>
                ))}
            </div>}
        </div>
    )
}

export default SearchPage
