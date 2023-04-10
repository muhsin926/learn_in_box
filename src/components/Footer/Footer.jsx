import React from 'react'
import { email, facebook, icon_lock, instegram, linkedin, logo, phoneIcon, twitter } from '../../assets'
import { footer } from '../../constants'

const Footer = () => {
  return (
    <footer className='mx-10 mt-24 mb-10'>
        <hr />
        <div className='grid grid-cols-12 pt-10'>
            <div className='col-span-12  lg:col-span-4 mb-5'>
                <img src={logo} alt="Logo" />
                <p>LearnInbox platform doesn’t guarantee on your academic success. LearnInbox intended to start your own research and development.</p>
                <div className='flex gap-3'>
                    <img className='w-10' src={icon_lock} alt="Protected Icon" />
                    <p>Your Information is Protected By 256-Bit SSL Encryption</p>
                </div>
            </div>
            {footer?.map((data) => (
                <div className='sm:col-span-6 md:col-span-6 col-span-12 lg:col-span-2 mb-5'>
                    <h2 className='font-semibold text-lg mb-2'>{data?.title}</h2>
                    <ul>
                        {data?.points?.map((point) => (
                            <li className='list-disc'><a href={point?.href} target='blank'>{point?.text}</a></li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        <div className='grid grid-cols-12 mt-5'>
                            <div className='lg:col-span-4 md:col-span-6 col-span-12 flex gap-3 justify-center'>
                                <img className='w-8' src={phoneIcon} alt="Phone" />
                                <p>1800 833 21115</p>
                            </div>
                            <div className='lg:col-span-4 md:col-span-6 col-span-12 flex gap-3 order-2 sm:order-3 md:order-2 justify-center'> 
                                <img className='w-8' src={email} alt="email" />
                                <p>mailto:support@learninbox.com15</p>
                            </div>
                            <div className='lg:col-span-4 md:col-span-6 col-span-12 flex gap-2 justify-center'>
                                <img className='w-8' src={twitter} alt="" />
                                <img className='w-8' src={facebook} alt="" />
                                <img className='w-8' src={linkedin} alt="" />
                                <img className='w-8' src={instegram} alt="" />
                            </div>
        </div>
    </footer>
  )
}

export default Footer