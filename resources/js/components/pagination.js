import React, { useState, useEffect } from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import Paragraph from "@material-tailwind/react/Paragraph";
import Logs from "../pages/admin/transfer/log";
import dataPerPage from "../pages/admin/transfer/num.json"

export default function Paginate({completions, imgs, data, dataLimit, loading}) {

    var from = currentPage * dataLimit - dataLimit + 1;
    var to = (currentPage * dataLimit - dataLimit) + dataLimit;
    var total = data.length;

    const pageLimit = Math.round(data.length / dataLimit);
    const [currentPage, setCurrentPage] = useState(1);

    console.log(pageLimit);

    function goToPreviousPage() {
        if(setCurrentPage <= 0){

        }else{
            setCurrentPage((page) => page - 1);
        }
    }

    function goToNextPage() {
        if(setCurrentPage >= pageLimit){

        }else{
            setCurrentPage((page) => page + 1);
        }
    }
    
    
    function changePage(event) {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    function getPageLimit() {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    var from = currentPage * dataLimit - dataLimit + 1;
    var to = (currentPage * dataLimit - dataLimit) + dataLimit;
    var total = data.length;

    if(to >= total){
        to = total;
    }

    if(from <= 0){
        from = 1;
    }

    if(from >= total){
        from = 1;
    }

    if(to <= 0){
        to = total;
    }

    return (
        <>
            <Logs
                completions={completions}
                imgs={imgs}
                data={data}
                dataLimit={dataLimit}
                currentPage={currentPage}
                pageLimit={pageLimit}
                loading={loading}
            />
            <div className="grid grid-cols-3">
                <Dropdown
                    color="lightBlue"
                    placement="bottom-start"
                    buttonText={dataLimit}
                    buttonType="outline"
                    size="regular"
                    rounded={false}
                    block={false}
                    ripple="dark"
                >
                    <DropdownLink
                        href="#25"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => { 
                            dataPerPage[0].data = e.target.textContent
                        }}
                    >
                        25
                    </DropdownLink>
                    <DropdownLink
                        href="#50"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => { 
                            dataPerPage[0].data = e.target.textContent
                        }}
                    >
                        50
                    </DropdownLink>
                    <DropdownLink
                        href="#100"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => { 
                            dataPerPage[0].data = e.target.textContent
                        }} 
                    >
                        100
                    </DropdownLink>
                </Dropdown>
                <Paragraph color="lightBlue">
                    Showing {from} to {to} of {total} results
                </Paragraph>
                <Pagination>
                    <PaginationItem 
                        href="#last" 
                        ripple="dark" 
                        onClick={() => { goToPreviousPage }} 
                        className={`prev ${currentPage <= 1 ? 'hidden' : ''}`}
                    >
                        <Icon name="keyboard_arrow_left" />
                    </PaginationItem>
                    {getPageLimit().map((item, index) => (
                        <PaginationItem 
                            href="#2" 
                            ripple="dark"
                            key={index}
                            onClick={changePage}
                            className={`text-black ${currentPage === item ? 'text-blue-500' : null}`}
                        >
                            {item}
                        </PaginationItem>
                    ))}
                    <PaginationItem 
                        href="#last" 
                        ripple="dark" 
                        onClick={goToNextPage}
                        className={`next ${currentPage >= pageLimit ? 'hidden' : ''}`}
                    >
                        <Icon name="keyboard_arrow_right" />
                    </PaginationItem>
                </Pagination>
            </div>
        </>
    );
}