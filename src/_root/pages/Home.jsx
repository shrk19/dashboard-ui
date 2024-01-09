import React from 'react'
import Layout1 from './Layout1';
import Layout2 from './Layout2';
import Layout3 from './Layout3';


const Home = () => {
    return (
        <div className='flex flex-1 flex-col md:flex-row bg-scroll'>
            <Layout1/>
            <Layout2/>
            <Layout3/>
        </div>
    )
}

export default Home