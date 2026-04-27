'use client'

import { useState } from 'react'

export default function Button({ text = "Kirim Pesan" }) {
  const [clicked, setClicked] = useState(false)

  const handleClick = () => {
    setClicked(true)

    setTimeout(() => {
      setClicked(false)
    }, 2000)
  }

  return (
    <button className="btn-primary" onClick={handleClick}>
      {clicked ? "Terkirim ✓" : text}
    </button>
  )
}