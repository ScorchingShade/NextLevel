import React from 'react'
import {useRouter} from "next/router"

function BlogPostsPage() {
    const router= useRouter();

    console.log(router.query);
    return (
        <div>
            <h1>Blog</h1>
        </div>
    )
}

export default BlogPostsPage
