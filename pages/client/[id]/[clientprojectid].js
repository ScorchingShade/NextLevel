import React from 'react'
import {useRouter} from 'next/router';


function SelectedClientProjectPage() {
    const router=useRouter();

    console.log(router.query);

    return (
        <div>
            <h1>The Project page for a specific Project for a selected Client</h1>
        </div>
    )
}

export default SelectedClientProjectPage
