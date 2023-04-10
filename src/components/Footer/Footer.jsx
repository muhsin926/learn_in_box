import React from 'react'
import { icon_lock, logo } from '../../assets'
import { footer } from '../../constants'

const Footer = () => {
  return (
    <footer className='mx-10 mt-24 mb-10'>
        <div className='grid grid-cols-12'>
            <div className='col-span-4'>
                <img src={logo} alt="Logo" />
                <p>LearnInbox platform doesn’t guarantee on your academic success. LearnInbox intended to start your own research and development.</p>
                <div className='flex gap-3'>
                    <img src={icon_lock} alt="Protected Icon" />
                    <p>Your Information is Protected By 256-Bit SSL Encryption</p>
                </div>
            </div>
            {footer?.map((data) => (
                <div className='col-span-2'>
                    <h2 className='font-semibold text-lg mb-2'>{data?.title}</h2>
                    <ul>
                        {data?.points?.map((point) => (
                            <li className='list-disc'><a href={point?.href} target='blank'>{point?.text}</a></li>
                        ))}
                    </ul>
                </div>

            ))}
        </div>
    </footer>
  )
}

export default Footer