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

        setIsClicked({ ...initialState, [clicked]: true })

    }
   
    const handleClosed = (clicked) => {

        // isClicked is an object, so we need to open object and spread initialState
        // set everything false, and only change the value that has been clicked and set it to trues

        setIsClicked({ ...initialState, [clicked]: false })

    }
    



    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const setMode = (e) => {
        setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);
    };

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);
    };


    return (
        <StateContext.Provider
            value={{
                activeMenu,
                setActiveMenu,
                isClicked,
                setIsClicked,
                handleClick,
                screenSize,
                setScreenSize,
                handleClick,
                handleClosed,
                initialState, 
                currentColor, 
                currentMode,
                setCurrentColor, 
                setCurrentMode, 
                setMode, 
                setColor, 
                themeSettings, 
                setThemeSettings
            }}
        >
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)