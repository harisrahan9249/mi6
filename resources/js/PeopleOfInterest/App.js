import React from 'react';
import { useEffect, useState } from 'react';
import StatusFilter from './StatusFilter';

export default function App() {

    const [data, setData] = useState([]);
    const [selected_status, setSelectedStatus] = useState('');

    const fetchData = async () => {
        const response = await fetch('api/people-of-interest');
        const parsedRespose = await response.json();
        console.log(parsedRespose);
        setData(parsedRespose);
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        data == null
            ? <h1>Loading</h1>
            : <div className="">
                <StatusFilter selected_status={selected_status} setSelectedStatus={setSelectedStatus} />
                {data.map((person, index) => (
                    <><p key={index}>{person.name} is {person.occupation}</p>
                        <p>Known Aliases: </p>
                        <ul>
                            {person.aliases.map((alias, i) => (
                                <li key={i}>{alias.alias}</li>))}
                        </ul>
                    </>
                ))}
            </div>
    )
}