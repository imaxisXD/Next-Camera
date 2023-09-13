"use client";
import Modal from '@/components/modal'
import { useEffect, useRef, useState, useCallback } from 'react'
import { toPng } from 'html-to-image';
import Header from '@/components/header';
import PassportSection from '@/components/passport';
import DownloadButton from '@/components/download';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState('/profile photo.png');
  const [name, setName] = useState('Name');

  const sectionRef = useRef<HTMLDivElement>(null);

  const modalToggle = () => {
    setShowModal(prev => !prev);
  }
  const downloadPassport = useCallback(() => {
    if (sectionRef.current === null) {
      return
    }
    toPng(sectionRef.current, { cacheBust: true, })
      .then((dataUrl) => {
        const link = document.createElement('a')
        link.download = 'passport.png'
        link.href = dataUrl
        link.click()
      })
      .catch((err) => {
        console.log(err)
      })
  }, [sectionRef])

  useEffect(() => {
    console.log('herre');
    const storedPhoto = localStorage.getItem('myPhoto') || '/profile photo.png'; // Provide a default empty string
    const storedName = localStorage.getItem('name') || 'Name'; // Provide a default name
    setImage(storedPhoto);
    setName(storedName);
    console.log('done');

  }, [showModal])

  return (
    <main className="flex relative h[652px] min-h-screen flex-col items-center w-96 justify-between gap-4 bg-[#FAEA18] mx-auto">
      {/* Header Nav */}
      <Header />
      {/* passport section */}
      <PassportSection
        sectionRef={sectionRef}
        profilePhotoSrc={image}
        modalToggle={modalToggle}
        localStorageName={name}
      />
      <DownloadButton download={downloadPassport} />

      {showModal && <Modal showModal={modalToggle} />}
    </main >
  )
}
