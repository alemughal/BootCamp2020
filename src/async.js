import React, { useEffect, useState } from 'react';


function async() {
    const [repos, setRepos] = useState([])

    useEffect(() => {
        async function getRepos() {
            const response = await fetch('https://api.github.com/users/alemughal/repos')
            const data = await response.json()
            console.log(data)
            setRepos(data)
        }
        getRepos()

    })
    return (
        <div>
            <h1>All Repositories</h1>
            <ul>
                {repos.map((reposObj, ind) => {
                    return (<li key={ind}>{reposObj.name}</li>)
                })}
            </ul>
        </div>
    )
}


export default async;