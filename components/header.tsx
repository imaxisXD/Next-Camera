import React from 'react';
import Image from 'next/image';

function Header() {
    return (
        <div className='flex items-center gap-20 mt-1'>
            <Image src="/milkybar-logo.svg" height={105} width={210} alt="milkybar logo" />
            <div className='flex h-[51px] w-[115px] '>
                <Image src="/home.svg" height={51} width={51} alt="home button" className='cursor-pointer hover:opacity-75' />
            </div>
        </div>
    );
}

export default Header;
