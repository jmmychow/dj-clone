import React from 'react'
import { createRoot } from 'react-dom/client'
import './base.css'

function App() {
    const bgimage = "bg-[url('https://images.dowjones.com/wp-content/uploads/sites/43/2018/01/16204441/careers-footer-2_16c6234a226dcd19d8f67472e4d6053b.png')]"

    return (
        <>
        <div class="hero">
            <h1>Cute kittehs everywhere!</h1>
        </div>
        {/*<div className="relative flex w-1/2 h-1/2 justify-center items-center before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-cover before:bg-opacity-50 before:bg-[url('https://images.dowjones.com/wp-content/uploads/sites/43/2018/01/16204441/careers-footer-2_16c6234a226dcd19d8f67472e4d6053b.png')]" >*/}
        <div className="relative flex w-1/2 h-1/2 justify-center items-center before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-cover dimmed_background" >
            <h1>Cute kittehs everywhere!</h1>
        </div>
        </>
    )
}

const container = document.getElementById('root')
const root = createRoot(container)
root.render(<App tab="home" />);

