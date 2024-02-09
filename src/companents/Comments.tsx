import { FC, useEffect, useState } from "react";
import { IComments } from "./Posts";

interface PropsComments {
    comments: IComments[];
}

interface ICoords {
    x: number;
    y: number;
}

const Comments: FC<PropsComments> = ({ comments }) => {
    const [coords, setCoords] = useState<ICoords>({ x: 0, y: 0 });

    useEffect(() => {
        const handleWindowMouseMove = (event: any) => {
            setCoords({
                x: event.clientX,
                y: event.clientY,
            });
        };
        window.addEventListener("mousemove", handleWindowMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleWindowMouseMove);
        };
    }, []);

    setTimeout(() => {
        console.log(coords, "yyyyyyyy");
    }, 7000);

    return (
        <div>
            <div className='flex flex-col w-32 h-32 absolute top-[200px] right-[100px] overflow-y-auto'>
                {comments.map((item, index) => (
                    <div>
                        <span className='text-[#166199] font-bold'>
                            {index + 1}
                        </span>
                        .{item.name}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Comments;
