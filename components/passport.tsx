import React, { RefObject } from 'react';
import Image from 'next/image';

interface PassportSectionProps {
    sectionRef: RefObject<HTMLDivElement>;
    profilePhotoSrc: string;
    modalToggle: () => void;
    localStorageName: string;
}

const PassportSection: React.FC<PassportSectionProps> = ({
    sectionRef,
    profilePhotoSrc,
    modalToggle,
    localStorageName,
}) => {
    return (
        <section className='bg-coconut relative z-50 w-[380px] h-[545px] flex flex-col items-center bg-[#FAEA18]' ref={sectionRef}>
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
                        <div className='passport relative mx-auto'>
                            <h2 className='-discover -rotate-90 absolute top-[8.5rem] -left-16 font-black'>Continents Explored</h2>

                            {/* Individual Continents arranged */}
                            <div className='-rotate-90 absolute top-[4.8rem] -left-9 w-[271.394px] h-[138px] bg-[#0394C3] border rounded-lg'>
                                <Image
                                    src='northamerica.svg'
                                    width={107.54} height={65.6} alt="North america continet"
                                />
                                <Image
                                    src='southamerica.svg' width={39.77} height={60.29}
                                    alt="South america continet" className='absolute bottom-[0.5rem] left-[2.2rem]'
                                />
                                <Image
                                    src='europe.svg' width={51.69} height={35.64}
                                    alt="europe continet" className='absolute top-[1.3rem] left-[6.2rem]'
                                />
                                <Image
                                    src='africa.svg' width={57.56} height={67.22}
                                    alt="Africa continet"
                                    className='absolute top-[2.9rem] left-[5.3rem]'
                                />
                                <Image
                                    src='asia.svg' width={102.39} height={61.25}
                                    alt="Asia continet" className='absolute top-[1.5rem] right-[2.6rem]' />
                                <Image
                                    src='australia.svg' width={33.52} height={25.92}
                                    alt="australia continet" className='absolute bottom-[1.2rem] right-[1.7rem]'
                                />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default PassportSection;
