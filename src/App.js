import React, { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { FiSettings } from 'react-icons/fi'
import { TooltipComponent } from '@syncfusion/ej2-react-popups'

import { Navbar, Footer, Sidebar, ThemeSettings } from './components'
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Area, Bar, Pie, Line, Financial, ColorPicker, ColorMapping, Editor } from './pages'

import { useStateContext } from './contexts/ContextProvider'

import './App.css'

const App = () => {


  const { activeMenu } = useStateContext();
  return (
    <div>
      <Router>
        <div className='flex relative dark:bg-main-dark-bg'>

          {/* settings button div */}
          <div className='fixed right-10 bottom-10 z-[1000]'>
            <TooltipComponent content="Settings" position='Top'>
              <button type='button' className='text-3xl p-3 hover:drop-shadow-xl text-white'

                style={{
                  background: 'black',
                  borderRadius: '50%'
                }}> {/* we are writing some properties in sty le and not in className so that we can change them dynamically  */}
                <FiSettings />
              </button>

            </TooltipComponent>
          </div>

          {
            activeMenu ? (
              <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
                <Sidebar />
              </div>
            ) : (
              <div className='w-0 dark:bg-secondary-dark-bg'>
                <Sidebar />
              </div>
            )
          }

          <div className={

            `dark:bg-main-bg bg-main-bg min-h-screen w-full 
            ${activeMenu ? 'md:ml-72' : 'flex-2'}
            `

          }>

            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full">
              <Navbar />
            </div>


            <div>
              <Routes>
                {/* Dashboard Page */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* Pages */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/* Apps */}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* Charts */}
                <Route path="/line" element={<Line />} />
                <Route path="/area" element={<Area />} />
                <Route path="/bar" element={<Bar />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/color-mapping" element={<ColorMapping />} />
                <Route path="/pyramid" element={<Pyramid />} />
                <Route path="/stacked" element={<Stacked />} />
              </Routes>
            </div>
          </div>

        </div>
      </Router>
    </div>
  )
}

export default App
