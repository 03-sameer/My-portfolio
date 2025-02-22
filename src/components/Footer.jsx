import React from 'react'
import { FaDiscord, FaGithub, FaTwitch, FaTwitter } from 'react-icons/fa'

const links = [
  {href: 'https://discord.com', icon: <FaDiscord/>},
  {href: 'https://twitter.com', icon: <FaTwitter/>},
  {href: 'https://github.com', icon: <FaGithub/>},
  {href: 'https://twitch.com', icon: <FaTwitch/>},
]

const Footer = () => {
  return (
    <footer className='w-screen  bg-white-200 py-4 text-black'>
      <div className='container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row'>
          <p className='text-center text-sm md:text-left'>
            &copy; CHAMP 2025 ,
          </p>

        
      </div>
    </footer>
  )
}

export default Footer