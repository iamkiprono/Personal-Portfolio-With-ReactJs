import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Footer = () => {

    const [copyRight, setCopyRight] = useState("2000")
    const update = () => {

        const dateNow = new Date().getFullYear()
        setCopyRight(dateNow)
    }
    useEffect(update)

  return (
    <div>
       
        {copyRight}

    </div>
  )
}

export default Footer