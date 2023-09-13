"use Client"
import React from 'react';
import Image from 'next/image';

interface DownloadButtonProps {
    download: React.MouseEventHandler<HTMLButtonElement>;
}

function DownloadButton({ download }: DownloadButtonProps) {
    return (
        <button className='absolute bottom-2 left-3 z-50' onClick={download}>
            <Image
                src="/download-btn.png"
                width={137}
                height={36}
                alt="download the passport"
            />
        </button>
    );
}

export default DownloadButton;
