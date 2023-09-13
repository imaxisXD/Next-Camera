"use client"
import Modal from '@/components/modal'
import Image from 'next/image'
import { useState } from 'react'

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const localStoragePhoto = localStorage.getItem('myPhoto');
  const profilePhotoSrc = localStoragePhoto || '/profile photo.png';
  const localStorageName = localStorage.getItem('name') || 'Name';



  const modalToggle = () => {
    setShowModal(prev => !prev);
  }
  return (
    <main className="flex relative min-h-screen flex-col items-center w-96 justify-between bg-[#FAEA18] mx-auto">
      {/* Header Nav */}
      <div className='flex items-center gap-20 mt-1'>
        <Image src="/milkybar-logo.svg" height={105} width={210} alt="milkybar logo" />
        <div className='flex h-[51px] w-[115px] '>
          <Image src="/home.svg" height={51} width={51} alt="home button" className='cursor-pointer hover:opacity-75' />
        </div>
      </div>
      {/* passport section */}
      <section className='bg-coconut relative z-50 w-[380px] h-[545px] flex flex-col items-center '>

        <div className='absolute w-fit top-8 left-3'>
          <Image src="/mypassport4x.png" height={245.677} width={172.5} alt="blue milkybar back cover passport" />
        </div>
        <div className='rotate-[13deg] absolute left-32 top-10'>
          <div className='relative'>
            <div className='w-[296.397px] h-[49px] bg-white rounded-t-3xl box-shadow mb-0 absolute top-12 -right-1/3'></div>
            <div className='passport relative mx-auto '>
              <div>
                <button>
                  <Image src='/edit-btn 1.png' height={22.48} width={22.48} alt='edit btn' className='rotate-90 absolute top-28 right-3 z-30' onClick={modalToggle} />
                </button>
                <Image src={profilePhotoSrc} alt="image for profile photo" height={108.61} width={95.83} className='rotate-90 absolute top-4 right-7 cursor-pointer' onClick={modalToggle} />
              </div>
              <div className='z-30 flex flex-col rotate-90 absolute bottom-6 right-2 text-black items-start'>
                <p className='text-base text-[#021689]'>Name</p>
                <h1 className='text-xl hover:text-clip truncate font-bold name w-36'>{localStorageName}</h1>
                <p className='text-discover mt-6'>
                  I’m ready to discover<br />the world !
                </p>
              </div>
            </div>
          </div>

          <div className='absolute -bottom-44'>
            <div className='relative rotate-180'>
              <div className='w-[296.397px] h-[49px] bg-white rounded-t-3xl box-shadow mb-0 absolute top-[3.3rem] -right-1/3'></div>
              <div className='passport relative mx-auto '>
              </div>
            </div>
          </div>
        </div>
        <button className='absolute bottom-2 left-3'>
          <Image
            src="/download-btn.png"
            width={137}
            height={36}
            alt="download the passport"
          />
        </button>
      </section>
      {showModal && <Modal showModal={modalToggle} />}

    </main >
  )
}
