import React, { useState, useEffect } from "react";
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Paginate from "./pagination";

const log = ({completions, imgs, data, dataLimit, currentPage, loading}) => {

    const [pages] = useState(Math.round(data.length / dataLimit));

    function getDataItems(){
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;
        return data.slice(startIndex, endIndex);
    }

    function body(){
        if (loading) {
            return ( <tbody><tr><th colSpan="6" className="text-gray-500 text-sm"><br/> Loading... <br/></th></tr></tbody> );
        }else if(data.length == 0 || data == ''){
            return ( <tbody><tr><th colSpan="6" className="text-gray-500 text-lg"><br/> No Data Found <br/></th></tr></tbody> );
        }else{
            return (
                <tbody>
                    {getDataItems().map((d, idx) => (<tr key={d.id}>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {d.id}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {d.project}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {d.budget}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                            {d.status}
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            <div className="flex">
                                {imgs.map((img) => (
                                    <div key={img.id} className="w-10 h-10 rounded-full border-2 border-white -ml-4"><Image src={img.image} rounded alt="..." /></div>
                                ))}
                            </div>
                        </th>
                        <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                            {completions.map((completion) => (
                                <Progress key={completion.id} color={completion.color} value={completion.percent} /> 
                            ))}
                        </th>
                    </tr>))}
                </tbody>
            );
        }
    }

    return (
        <>
            <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                    <tr>
                    <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            S/N
                        </th>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Project
                        </th>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Budget
                        </th>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Status
                        </th>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Users
                        </th>
                        <th className="px-2 text-purple-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-light text-left">
                            Completion
                        </th>
                    </tr>
                </thead>
                {body()}
            </table>
        </>
    );
};

export default log;