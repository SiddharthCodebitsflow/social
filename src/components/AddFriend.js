import React, { useEffect, useState } from 'react';
import './css/addFriend.css';
import image from '../image/user.png'

export default function AddFriend() {

    const [allUser, SetAllUser] = useState();
    const auth_id = sessionStorage.getItem('user_id');
    useEffect(() => {
        async function fetchData() {
            let url = process.env.REACT_APP_API_URL + 'get-friend'
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ user_id: auth_id })
            });
            const parsedData = await response.json();
            // console.log(parsedData.data);
            SetAllUser(parsedData.data);
        }
        fetchData();
    }, [auth_id]);

    return (
        < div className='page' >
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Add Friend</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        allUser && allUser.map((item, index) => {
                            return (<tr>
                                <td><img height='50px' width='50px' src={image} /></td>
                                <td key={item.name}>{item.name}</td>
                                <td><button>Request</button></td>
                            </tr>);
                        })
                    }

                </tbody>
            </table>
        </div >
    )
}
