import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Posts from "../companents/Posts";
import { createPortal } from "react-dom";
import ModalPage from "../companents/Modal";

interface ICompany {
    bs: string;
    catchPhrase: string;
    name: string;
}
interface IGeo {
    lat: string;
    lng: string;
}
interface IAddress {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: IGeo;
}

export interface IUser {
    email: string;
    id: number;
    name: string;
    phone: string;
    username: string;
    website: string;
    company: ICompany;
    address: IAddress;
}
const Root = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState<IUser>();

    const handlyInfo = (item: IUser) => {
        setOpen(true);
        setInfo(item);
    };

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json())
            .then((result) => setUsers(result));
    }, []);


    return (
        <div className='h-[90vh] border-4 border-[#166199] m-3'>
            <div className='flex'>
                <div className='h-[89vh] w-72 border-r-4 border-[#166199]'>
                    <h1 className='font-bold text-xl p-2'>Users list</h1>
                    <div className='flex flex-col gap-4 p-2'>
                        {users.map((item) => (
                            <div
                                key={item.id}
                                className='flex justify-between items-center'>
                                <Link to={`/${item.id}`}>
                                    {item.id}.{item.name}
                                </Link>
                                <button
                                    className='py-[4px] px-[8px] rounded bg-[#166199] text-white'
                                    onClick={() => handlyInfo(item)}>
                                    ◉Θ◉
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='h-[89vh] w-72 border-r-4 border-[#166199]'>
                    <Posts />
                </div>
               
            </div>
            {open &&
                createPortal(
                    <ModalPage info={info} setOpen={setOpen} />,
                    document.body
                )}
        </div>
    );
};
export default Root;
