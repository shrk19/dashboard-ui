import React from 'react'
import Card from '../../components/shared/Card';
import StackedBarChart from '../../components/shared/StackedBarChart';
import DoughnutChart from '../../components/shared/DoughnutChart';

const Layout2 = () => {
    return (
        <div className='layout-two w-screen md:w-2/4 py-10 px-4'>
            <h1 className='text-blue text-sm font-bitter font-bold'>Retirement Income</h1>
            <h1 className='bitter-lg'>Starting Year 2056</h1>
            <div className='flex flex-row'>
                <Card num={'$30,0000'} title={'My Goal'}/>
                <Card num={'59%'} title={'Goal Achieved'}/>
                <Card num={'$300'} title={'$Est. Monthly Income'}/>
            </div>

            <h2 className='bitter-md'>Contributions Overtime</h2>
            <div className='overflow-x-auto'>
            <StackedBarChart />
            </div>

            <h2 className='bitter-md'>How do I compare to my peers?</h2>
            <div className='overflow-x-auto pb-4 flex flex-row'>
                <div className='flex flex-col justify-center items-center'>
                <DoughnutChart /> <p className='poppins-dark'>Average</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <DoughnutChart /> <p className='poppins-dark'>Top</p>
                </div>
                <div className='flex flex-col justify-center items-center'>
                <DoughnutChart /> <p className='poppins-dark'>Me</p>
                </div>
            </div>

            <p className='poppins-light'>These numbers represent current goal achievement.</p>

            <div className='w-fit py-2 '>
                <div className='flex pb-2'>
                    <p className='poppins-light pr-2'>Age:</p>
                    <p className='poppins-dark'>Under 30K </p>
                </div>

                <div className='flex pb-2'>
                    <p className='poppins-light pr-2'>Salary:</p>
                    <p className='poppins-dark'>K20 - K30 </p>
                </div>

                <div className='flex pb-2'>
                    <p className='poppins-light pr-2'>Gender:</p>
                    <p className='poppins-dark'>Male </p>
                </div>
            </div>
        </div>
    )
}

export default Layout2