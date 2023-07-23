import React from 'react'
import Link from 'next/link'

const Home = () => {
  return (
    <>   <div>Home</div>
    <Link href="/filter"> filter </Link>
    <Link href="/expense">expense</Link>
    </>
 
  )
}

export default Home