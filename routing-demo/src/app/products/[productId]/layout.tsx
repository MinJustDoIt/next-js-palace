import React from 'react'

const ProdutDetailsLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <>
        {children}
        <h2>Featured products</h2>
    </>
  )
}

export default ProdutDetailsLayout