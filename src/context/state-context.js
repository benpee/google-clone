import { createContext, useReducer, useContext } from 'react';

const GoogleContext = createContext();

export const GoogleContextProvider = ({ children, initialState, reducer }) => {
    return <GoogleContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </GoogleContext.Provider>
}

export const useGoogleData = () => useContext(GoogleContext);