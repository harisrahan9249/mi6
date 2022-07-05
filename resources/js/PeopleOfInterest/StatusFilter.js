import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function StatusFilter({ selected_status, setSelectedStatus }) {

    console.log(selected_status);

    const [statuses, setStatuses] = useState([]);

    const fetchData = async () => {
        try {
            const response = await axios.get('api/statuses');
            console.log(response.data);
            setStatuses(response.data);
        } catch (error) {
            console.log(error); // information about the error
            console.log(error.response); // the response object from the failed request
        }

    }

    useEffect(() => {
        fetchData();
    }, []);



    return (
        <div className='status-filter'>
            {
                statuses.map((status, i) => (
                    <>
                        <button onClick={() => setSelectedStatus(status.id)} key={i}> {status.name}</button>
                        {console.log(selected_status)}
                    </>

                ))
            }
        </div>
    )
}

export default StatusFilter;