"use client"
import Image from "next/image";
import { Camera } from "react-camera-pro";

const Modal = () => {
    return (
        <div className=" fixed flex flex-col z-50 rounded-[23px] bg-white w-[21.88rem] h-[36rem] mx-auto mt-10 my-auto text-[0.63rem] text-darkgray-100 shadow-xl font-hobeaux">
            <div className="absolute top-[0.94rem] left-[0.94rem] rounded-6xs bg-darkslategray box-border w-[20rem] h-[23.19rem] border-[3px] border-dashed border-darkgray-100" />
            <div className="absolute top-[25.56rem] left-[3.06rem] rounded-lg bg-lightgray shadow-[2px_2px_1px_rgba(0,_0,_0,_0.25)_inset] w-[15.81rem] h-[3rem]" >
                <p className="absolute top-[25%] left-[17.43%] text-[1rem] tracking-[0.05em] font-black text-darkgray-300 inline-block">
                    Enter your first name
                </p>
            </div>
            <div className="absolute top-[30.56rem] left-[calc(50%_-_83.5px)] rounded-xl bg-darkgray-200 shadow-[0px_4px_0px_rgba(0,_0,_0,_0.25)] box-border h-[4.56rem] flex flex-row py-[0.63rem] px-[2.5rem] items-center justify-center text-[2.25rem] text-white border-[5px] border-solid border-white">
                <div className="font-black">Save</div>
            </div>
            <Image
                className="absolute top-[1.5rem] left-[18.06rem] cursor-pointer"
                alt="close the camera button"
                src="/close-btn.svg"
                height={41}
                width={38}
                onClick={() => { }}

            />
            <Image
                className="absolute top-[18.5rem] left-[calc(50%_-_32px)] w-[3.5rem] h-[3.5rem] "
                alt="click the picture button"
                src="/shutter-button.svg"
                height={65}
                width={65}
            />
        </div>
    );
};

export default Modal;
