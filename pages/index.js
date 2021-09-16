import React from 'react'
import Link from 'next/link'

function IndexPage() {
  return (
    <div>
      Hello
      <ul>
        <li>
          <Link replace href="/about">About</Link>
        </li>

        <li>
          <Link replace href="/client">Clients</Link>
        </li>
      </ul>
    </div>
  )
}

export default IndexPage
