import React from 'react'

import Link from 'next/link'
import router from 'next/router';

function ClientsPage() {
    const clients=[
        {id:"ak",name:"sh"},
        {id:"pk",name:"MJ"},

    ];

    const loadProjectHandler=()=>{
        router.push("/client/ak/projectA");
    }
  
    return (
        <div>
            <h1>ClientsPage</h1>
            <ul>
                {clients.map((client) =><li key={client.id}>
                    <Link href={{
                        pathname:"/client/[id]",
                        query:{id:client.id}
                    }}>{client.name}</Link>

                </li>)}
            </ul>

            <button onClick={loadProjectHandler}>Load Project A</button>
        </div>
    )
}

export default ClientsPage
