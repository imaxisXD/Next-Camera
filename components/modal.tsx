"use client"
import Image from "next/image";
import { useRef, useState } from "react";
import { Camera, CameraType } from "react-camera-pro";

type ModalProps = {
    showModal: () => void;
};

const Modal: React.FC<ModalProps> = ({ showModal }) => {
    const [image, setImage] = useState<string | null>(null);
    const [inputValue, setInputValue] = useState('');
    const [buttonColor, setButtonColor] = useState('gray');
    const [isSaveDisabled, setIsSaveDisabled] = useState(true);
    const camera = useRef<CameraType>(null);

    const capture = () => {
        if (camera.current) {
            const imageSrc = camera.current?.takePhoto();
            setImage(imageSrc);
        };
    }
    const clear = () => {
        if (image) {
            setImage(null);
        }
    }
    const handleInputChange = (e: React.FormEvent) => {
        const input = e.target as HTMLInputElement;
        input.value = input.value.replace(/[^A-Za-z]/g, '').slice(0, 30);
        setInputValue(input.value);

        // Change the button color to blue if the input has text
        if (input.value.trim() !== '') {
            setButtonColor('#0394C3');
            setIsSaveDisabled(false);
        } else {
            setButtonColor('gray');
            setIsSaveDisabled(true);
        }
    };
    const handleSaveClick = (e: React.FormEvent) => {
        e.preventDefault();
        if (image) {
            localStorage.setItem('myPhoto', image);
            localStorage.setItem('name', inputValue)
            showModal()
        }
        else {
            alert('Take Photo First 🤗!');
        }

    };

    return (
        <div className=" fixed flex flex-col z-50 rounded-[23px] bg-white w-[21.88rem] h-[36rem] mx-auto mt-10 my-auto text-[0.63rem] text-darkgray-100 shadow-xl font-hobeaux">
            <div className="absolute top-[0.94rem] left-[0.94rem] rounded-6xs bg-darkslategray box-border w-[20rem] h-[23.19rem] border-[3px] border-dashed border-darkgray-100">
                {image ? <Image src={image} height={371} width={320} alt="Image that you clicked" /> : <Camera
                    ref={camera}
                    facingMode="user"
                    aspectRatio="cover"
                    errorMessages={{
                        noCameraAccessible: 'No camera device accessible. Please connect your camera or try a different browser.',
                        permissionDenied: 'Permission denied. Please refresh and give camera permission.',
                    }}
                />}
            </div>
            <form onSubmit={handleSaveClick}>
                <div className="absolute top-[25.56rem] left-[3.06rem] rounded-lg bg-lightgray shadow-[2px_2px_1px_rgba(0,_0,_0,_0.25)_inset] w-[15.81rem] h-[3rem]" >
                    <input
                        required
                        type='text'
                        placeholder='Enter your first name' className="text-center absolute top-[6%] focus:outline-0 appearance-none p-2 rounded-lg left-[2.5%] text-[1rem] tracking-[0.05em] font-black w-[15rem] h-[2.5rem] bg-transparent text-darkgray-300 inline-block"
                        pattern="[A-Za-z]+"
                        maxLength={30}
                        title="Please enter letters only and limit to 30 characters"
                        value={inputValue}
                        onInput={handleInputChange}
                    />
                </div>
                <div style={{ backgroundColor: buttonColor }} className="absolute top-[30.56rem] left-[calc(50%_-_83.5px)] rounded-xl shadow-[0px_4px_0px_rgba(0,_0,_0,_0.25)] box-border h-[4.56rem] flex flex-row py-[0.63rem] px-[2.5rem] items-center justify-center text-[2.25rem] text-white border-[5px] border-solid border-white">
                    <button
                        className="font-black"
                        disabled={isSaveDisabled}
                    >
                        Save
                    </button>
                </div>
            </form>
            <button onClick={showModal}>
                <Image
                    className="absolute top-[1.5rem] left-[18.06rem] cursor-pointer"
                    alt="close the camera button"
                    src="/close-btn.svg"
                    height={41}
                    width={38}
                />
            </button>
            <button onClick={image ? clear : capture}>
                <Image
                    className="absolute top-[18.5rem] left-[calc(50%_-_32px)] w-[3.5rem] h-[3.5rem] cursor-pointer"
                    alt="click the picture button"
                    src={image ? "/retake-button.png" : "/shutter-button.svg"}
                    height={65}
                    width={65}

                />
            </button>
        </div>
    );
};

export default Modal;
