import React from 'react'
import RangeSlider from '../../components/shared/RangeSlider';

const Layout3 = () => {
    return (
        <div className='w-screen md:w-1/4'>
            <div className='bg-light-gray m-3 p-3'>
                <h2 className='bitter-md py-2'>Retirement Statergy</h2>
                <div className='py-2'>
                    <p className='poppins-dark'>Employee Contribution</p>
                    <RangeSlider />
                </div>
                <div className='py-2'>
                    <p className='poppins-dark'>Retirement Age</p>
                    <RangeSlider />
                </div>
                <hr></hr>
                <div className='flex justify-between py-2'>
                    <p className='poppins-dark'>Employee Contribution</p>
                    <p className='poppins-dark'>12%</p>
                </div>
                <div className='flex justify-between py-2'>
                    <p className='poppins-dark'>Interest Rate</p>
                    <p className='poppins-dark'>5%</p>
                </div>
                <button type="button" className="btn btn-primary bg-blue w-full text-sm font-poppins">Update</button>
                <p className='text-blue text-xs font-bold py-2 flex justify-center'>View Help Docs</p>
            </div>
        </div>
    )
}

export default Layout3