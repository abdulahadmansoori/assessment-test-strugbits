import React, { useState } from 'react';

import personIcon from '../assets/person-icon.png';

export const Table = ({ data, editHandler, deleteCustomer }) => {
    const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

    const sortData = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const sortedData = () => {
        const sorted = [...data];
        if (sortConfig.key !== null) {
            sorted.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'ascending' ? 1 : -1;
                }
                return 0;
            });
        }
        return sorted;
    };

    return (
        
        <div className="table-responsive">
            <div className="table-scroll">
                <table className="table mt-5">
                    <thead>
                        <tr className='table-success '>
                            <th scope="col-1" className='t-left'></th>
                            <th scope="col" onClick={() => sortData('name')}><i className="bi bi-filter"></i> Username</th>
                            <th scope="col" onClick={() => sortData('username')}><i className="bi bi-filter"></i> Customer Name</th>
                            <th scope="col" onClick={() => sortData('email')}><i className="bi bi-filter"></i> Email</th>
                            <th scope="col" className='t-right'></th>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedData().map((obj, index) => {
                            return (
                                <tr className=' align-items-center' key={index}>
                                    <th scope="row">
                                        <img className='img-thumbnail myImg' src={obj.profilePicture == null ? personIcon : obj.profilePicture} alt="" />
                                    </th>
                                    <td className=''>{obj.name}</td>
                                    <td className='text-success text-decoration-underline'>{obj.username}</td>
                                    <td>{obj.email}</td>
                                    <td >
                                        <div className='d-flex align-items-center text-center text-white'>
                                            <div className='bg-success bg-opacity-75 w-100 py-1 mx-2 rounded' onClick={() => editHandler(obj)}>Edit</div>
                                            <div className='bg-danger bg-opacity-75 w-100 py-1 mx-2 rounded' onClick={() => deleteCustomer(obj._id)}>Delete</div>
                                        </div>
                                        {/* <button className='btn btn-success btn-sm w-auto px-4 mx-2' onClick={() => editHandler(obj)}>Edit</button>
                                <button className='btn btn-danger btn-sm w-auto px-4 mx-2' onClick={() => deleteCustomer(obj._id)}>Delete</button> */}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>

    );
};
