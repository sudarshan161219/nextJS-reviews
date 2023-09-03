'use client';
import React, { useState } from 'react'
import { LinkIcon } from '@heroicons/react/20/solid'
const ShareLinkButton = () => {

    const [clicked, setClicked] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(window.location.href)
        setClicked(true)
        setTimeout(() => setClicked(false), 1500)
    }

    return (
        <button onClick={handleClick} className=' flex items-center gap-1 border px-2 py-1  rounded text-slate-100 text-sm bg-slate-900 hover:bg-gray-500'>
            <LinkIcon className=' h-4 w-4' />
            {clicked ? "Link Copied" : "Share Link"}
        </button>
    )
}

export default ShareLinkButton