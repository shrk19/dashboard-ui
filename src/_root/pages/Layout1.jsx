import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';

const Layout1 = () => {
    const recentTransactions = [
        {
            id: 1,
            date: '2020-08-07',
            bank: 'XXX11'
        },
        {
            id: 2,
            date: '2021-08-12',
            bank: 'XXX11'
        },
        {
            id: 3,
            date: '2022-02-17',
            bank: 'XXX12'
        }
    ]

  return (
    <div className='w-screen h-full md:w-1/4 bg-light-gray'>
                <div className='first p-6'>
                    <Link to="/profile" className="flex gap-3 items-center">
                        <img
                            src="https://i.pinimg.com/236x/c6/94/38/c69438c3234049d667a8c7f00c2aad3f.jpg"
                            className="h-14 w-14 rounded-full"
                        />
                        <div className="flex flex-col">
                            <h1 className="bitter-xl">{`Hi ${'Shreya'},`}</h1>
                            <p className="poppins-light">Welcome back.</p>
                        </div>
                    </Link>
                </div>

                <div className='second pl-10'>
                    <h2 className='bitter-lg'>Today</h2>
                    <div className='py-2'>
                        <h1 className='bitter-lg'>$19,456</h1>
                        <p className='poppins-light'>Account balance</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='bitter-lg'>$4000</h1>
                        <p className='poppins-light'>Year-to-date Contribution</p>
                    </div>
                    <div className='py-2'>
                        <h1 className='bitter-lg'>$1892</h1>
                        <p className='poppins-light'>Total Interest</p>
                    </div>
                    <div className="dropdown py-4 flex flex-row">
                        <button className="btn btn-primary dropdown-toggle bg-blue font-poppins text-xs" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                            I want to
                        </button>
                        <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>

                <div className='third px-10 my-4'>
                    <h2 className='bitter-md'>Recent Transactions</h2>
                    {recentTransactions.map((transaction) => {
                        return (

                            <div className='py-2' key={transaction.id}>
                                <p className='poppins-light'>{`${transaction.date}`}</p>
                                <p className='poppins-dark'>{`Withdrawal transfer to Bank ${transaction.bank}`}</p>
                                <hr></hr>
                            </div>

                        )
                    })}
                </div>
            </div>
  )
}

export default Layout1