"use client";
import Modal from '@/components/modal'
import { useRef, useState, useCallback } from 'react'
import { toPng } from 'html-to-image';
import Header from '@/components/header';
import PassportSection from '@/components/passport';
import DownloadButton from '@/components/download';

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const localStoragePhoto = localStorage.getItem('myPhoto');
  const profilePhotoSrc = localStoragePhoto || '/profile photo.png';
  const localStorageName = localStorage.getItem('name') || 'Name';

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

  return (
    <main className="flex relative h[652px] min-h-screen flex-col items-center w-96 justify-between gap-4 bg-[#FAEA18] mx-auto">
      {/* Header Nav */}
      <Header />
      {/* passport section */}
      <PassportSection
        sectionRef={sectionRef}
        profilePhotoSrc={profilePhotoSrc}
        modalToggle={modalToggle}
        localStorageName={localStorageName}
      />
      <DownloadButton download={downloadPassport} />

      {showModal && <Modal showModal={modalToggle} />}
    </main >
  )
}
