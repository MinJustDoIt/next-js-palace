import Link from 'next/link'
import React from 'react'

export default function InnerF2() {
  return (
    <>
        <h1>InnerF2</h1>
        <div>
            <Link href={"/f5"}>F5</Link>
        </div>
    </>
  )
}
