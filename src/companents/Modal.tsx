import { FC } from "react";
import { IUser } from "../App/Root";

interface PropsModalPage {
    setOpen: (item: boolean) => void;
    info: IUser | undefined;
}
const ModalPage: FC<PropsModalPage> = ({ setOpen, info }) => {
    const handlyClose = () => {
        setOpen(false);
    };

    return (
        <div
            className='absolute w-full h-screen top-0 left-0 bg-[#0009]'
            onClick={handlyClose}>
            <div
                className='absolute w-2/3 bg-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-xl p-3'
                onClick={(e) => e.stopPropagation()}>
                <div className='flex justify-between border-b-4 pb-4'>
                    <h2>Users info</h2>
                    <button onClick={() => setOpen(false)}>❌</button>
                </div>
                <div className='flex justify-between pt-4'>
                    <div>
                        <p>
                            Username:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.username}
                            </span>
                        </p>
                        <p>
                            E-mail:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.email}
                            </span>
                        </p>
                        <p>
                            Phone:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.phone}
                            </span>
                        </p>
                        <p>
                            Website:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.website}
                            </span>
                        </p>
                    </div>
                    <div>
                        <h2>Address:</h2>
                        <p>
                            -City:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.address.city}
                            </span>
                        </p>
                        <p>
                            -Street:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.address.street}
                            </span>
                        </p>
                        <p>
                            -Suite:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.address.suite}
                            </span>
                        </p>
                        <p>
                            -Zipcode:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.address.zipcode}
                            </span>
                        </p>

                        <h2>Company:</h2>
                        <p>
                            -Name:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.company.name}
                            </span>
                        </p>
                        <p>
                            -catchPhrase:{" "}
                            <span className='text-[#166199] font-bold'>
                                {info?.company.catchPhrase}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalPage;
