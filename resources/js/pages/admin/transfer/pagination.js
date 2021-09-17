import React, { useState, useEffect } from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import Paragraph from "@material-tailwind/react/Paragraph";
import Logs from "./log";
import dataPerPage from "./num.json"

export default function Paginate({completions, imgs, data, dataLimit, loading}) {

    var from = currentPage * dataLimit - dataLimit + 1;
    var to = (currentPage * dataLimit - dataLimit) + dataLimit;
    var total = data.length;
    let pageLimit = 0;

    if(Math.round(data.length / dataLimit) >= data.length / dataLimit){
        pageLimit = Math.round(data.length / dataLimit);
    }else{
        pageLimit = Math.round(data.length / dataLimit) + 1;
    } 

    const [currentPage, setCurrentPage] = useState(1);

    //console.log(pageLimit);

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
            <br/>
            <div className="grid grid-cols-3 justify-items-center">
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
                        href="#10"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => { 
                            dataPerPage[0].data = e.target.textContent
                        }}
                    >
                        10
                    </DropdownLink>
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
                        href={`#${currentPage}`}
                        ripple="dark" 
                        onClick={goToPreviousPage} 
                        className={`prev ${currentPage <= 1 ? 'hidden' : ''}`}
                    >
                        <Icon name="keyboard_arrow_left" />
                    </PaginationItem>
                    <PaginationItem 
                        href={`#${currentPage}`}
                        className={`text-gray-300 prev ${currentPage <= 1 ? '' : 'hidden'}`}
                    ><Icon name="keyboard_arrow_left" /></PaginationItem>
                    {getPageLimit().map((item, index) => (
                        <PaginationItem 
                        href={`#${currentPage}`} 
                            ripple={`${currentPage === item ? 'light' : 'dark'}`}
                            color={`${currentPage === item ? 'lightBlue' : ''}`}
                            key={index}
                            onClick={changePage}
                            className={`${currentPage === item ? '' : null}`}
                        >
                            {item}
                        </PaginationItem>
                    ))}
                    <PaginationItem 
                        href={`#${currentPage}`}
                        ripple="dark" 
                        onClick={goToNextPage}
                        className={`next ${currentPage >= pageLimit ? 'hidden' : ''}`}
                    >
                        <Icon name="keyboard_arrow_right" />
                    </PaginationItem>
                    <PaginationItem 
                        href={`#${currentPage}`}
                        className={`text-gray-300 next ${currentPage >= pageLimit ? '' : 'hidden'}`}
                    > <Icon name="keyboard_arrow_right" /></PaginationItem>
                </Pagination>
            </div>
        </>
    );
}