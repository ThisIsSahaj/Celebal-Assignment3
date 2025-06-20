import React, { useEffect } from 'react'
import { PanelLeft, ShoppingCart, MessageSquare, Bell, ChevronDown } from 'lucide-react'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import avatar from '../data/avatar.jpg'

import { Cart, Chat, Notification, UserProfile } from '.'

import { useStateContext } from '../contexts/ContextProvider'

const NavButton = ({ title, customFunc, icon, color, dotColor }) => (
  <TooltipComponent content={title} position='BottomCenter'>
    <button
      type='button'
      onClick={() => customFunc()} style={{ color }}
      className='relative text-xl rounded-full p-3 hover:bg-light-gray'
    >
      <span
        style={{ background: dotColor }}
        className="absolute inline-flex rounded-full h-2 w-2 right-2 top-2"
      />
      {icon}
    </button>
  </TooltipComponent>

); 

const Navbar = () => {

  const { activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize } = useStateContext();

  useEffect(()=> {
    // get screen size when app loads
    const handleResize = () => setScreenSize(window.innerWidth)

    window.addEventListener('resize', handleResize);

    // to figureout width initially
    handleResize();

    // always remove the event listener
    return () => window.removeEventListener('resize', handleResize)

  }, []);

  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false);
    }
    else {setActiveMenu(true)}
    
  }, [screenSize])
  

  return (
    <div className='flex justify-between p-2 md:mx-6 relative'>

      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color="black"
        icon={<PanelLeft />}
      />

      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick('cart')}
          color="black"
          icon={<ShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor="#03C9D7"
          customFunc={() => handleClick('chat')}
          color="black"
          icon={<MessageSquare />}
        />
        <NavButton
          title="Notifications"
          dotColor="#03C9D7"
          customFunc={() => handleClick('notification')}
          color="black"
          icon={<Bell />}
        />

        <TooltipComponent
          content='Profile'
          position='BottomCenter'
        >
          <div className='flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg'
            onClick={() => handleClick('userProfile')}
          >

            <img src={avatar} alt="userProfileImg"
              className='rounded-full w-8 h-8'
            />
            <p>
              <span className='text-gray-400 text-14'>Hi, </span> {' '}
              <span className='text-gray-400 font-bold ml-1 text-14'>John</span>
            </p>
            <ChevronDown className='text-gray-400 text-14' />

          </div>


        </TooltipComponent>

        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}



      </div>
    </div>
  )
}

export default Navbar