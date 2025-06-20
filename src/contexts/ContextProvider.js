import React, { createContext, useContext, useState } from 'react'

const StateContext = createContext();

const initialState = {
    cart: false,
    chat: false,
    notification: false,
    userProfile: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    
    const [isClicked, setIsClicked] = useState(initialState);

    // handle screen size
    const [screenSize, setScreenSize] = useState(undefined)

    const handleClick = (clicked) => {

        // isClicked is an object, so we need to open object and spread initialState
        // set everything false, and only change the value that has been clicked and set it to trues

         setIsClicked({...initialState, [clicked]:true})

    }


    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)