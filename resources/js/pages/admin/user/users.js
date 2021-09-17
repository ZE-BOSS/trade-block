import React, { useState, useEffect } from "react";
import Card from '@material-tailwind/react/Card';
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import CardHeader from '@material-tailwind/react/CardHeader';
import InputIcon from "@material-tailwind/react/InputIcon";
import CardBody from '@material-tailwind/react/CardBody';
import axios from "axios";
import Logs from "./log";
import dataPerPage from "./num.json"
import Paginate from "./pagination";

const logs = [
    {id: 1, project: 'Argon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 2, project: 'Brgon Design System', budget: '$3,500 USD', status: 'pending'},
    {id: 3, project: 'Crgon Design System', budget: '$4,500 USD', status: 'pending'},
    {id: 4, project: 'Drgon Design System', budget: '$5,500 USD', status: 'pending'},
    {id: 5, project: 'Ergon Design System', budget: '$6,500 USD', status: 'pending'},
    {id: 6, project: 'Frgon Design System', budget: '$7,500 USD', status: 'pending'},
    {id: 7, project: 'Grgon Design System', budget: '$8,500 USD', status: 'pending'},
    {id: 8, project: 'Hrgon Design System', budget: '$9,500 USD', status: 'pending'},
    {id: 9, project: 'Irgon Design System', budget: '$1,500 USD', status: 'pending'},
    {id: 10, project: 'Jrgon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 11, project: 'Krgon Design System', budget: '$3,500 USD', status: 'pending'},
    {id: 12, project: 'Lrgon Design System', budget: '$4,500 USD', status: 'pending'},
    {id: 13, project: 'Mrgon Design System', budget: '$5,500 USD', status: 'pending'},
    {id: 14, project: 'Nrgon Design System', budget: '$6,500 USD', status: 'pending'},
    {id: 15, project: 'Orgon Design System', budget: '$7,500 USD', status: 'pending'},
    {id: 16, project: 'Prgon Design System', budget: '$8,500 USD', status: 'pending'},
    {id: 17, project: 'Qrgon Design System', budget: '$9,500 USD', status: 'pending'},
    {id: 18, project: 'Rrgon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 19, project: 'Srgon Design System', budget: '$1,500 USD', status: 'pending'},
    {id: 20, project: 'Trgon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 21, project: 'Urgon Design System', budget: '$3,500 USD', status: 'pending'},
    {id: 22, project: 'Vrgon Design System', budget: '$4,500 USD', status: 'pending'},
    {id: 23, project: 'Wrgon Design System', budget: '$5,500 USD', status: 'pending'},
    {id: 24, project: 'Xrgon Design System', budget: '$6,500 USD', status: 'pending'},
    {id: 25, project: 'Yrgon Design System', budget: '$7,500 USD', status: 'pending'},
    {id: 26, project: 'Zrgon Design System', budget: '$8,500 USD', status: 'pending'},
    {id: 27, project: 'Argon Design System', budget: '$9,500 USD', status: 'pending'},
    {id: 28, project: 'Brgon Design System', budget: '$1,500 USD', status: 'pending'},
    {id: 29, project: 'Crgon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 30, project: 'Drgon Design System', budget: '$3,500 USD', status: 'pending'},
    {id: 31, project: 'Ergon Design System', budget: '$4,500 USD', status: 'pending'},
    {id: 32, project: 'Frgon Design System', budget: '$5,500 USD', status: 'pending'},
    {id: 33, project: 'Grgon Design System', budget: '$6,500 USD', status: 'pending'},
    {id: 34, project: 'Hrgon Design System', budget: '$7,500 USD', status: 'pending'},
    {id: 35, project: 'Irgon Design System', budget: '$8,500 USD', status: 'pending'},
    {id: 36, project: 'Jrgon Design System', budget: '$9,500 USD', status: 'pending'},
    {id: 37, project: 'Krgon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 38, project: 'Lrgon Design System', budget: '$1,500 USD', status: 'pending'},
    {id: 39, project: 'Mrgon Design System', budget: '$2,500 USD', status: 'pending'},
    {id: 40, project: 'Nrgon Design System', budget: '$3,500 USD', status: 'pending'},
    {id: 41, project: 'Orgon Design System', budget: '$4,500 USD', status: 'pending'},
    {id: 42, project: 'Prgon Design System', budget: '$5,500 USD', status: 'pending'}
];

const completions = [
    {id: 1, color: 'red', percent: "60"}
];

const imgs = [
    {id: 1, image: "/assets/img/team-1-800x800.jpg"},
    {id: 2, image: "/assets/img/team-2-800x800.jpg"},
    {id: 3, image: "/assets/img/team-3-800x800.jpg"},
    {id: 4, image: "/assets/img/team-4-470x470.png"}
];

var searched = [];

export default function CardTable() {
    const [data, setData] = useState([]);
    const [img, setImg] = useState([]);
    const [completion, setCompletion] = useState([]);
    const [loading, setLoading] = useState(false);
    const [dataLimit] = useState(1);
    const [pageLimit] = useState(data.length / dataLimit);

    useEffect(() => {
        const fetchLogs = async () => {
            setLoading(true);
            //const res = await axios.get("/main_controller_panel/logs");
            setData(logs);
            setLoading(false);
        };

        const fetchImgs = async () => {
            //const res = await axios.get("/main_controller_panel/imgs");
            setImg(imgs);
        };

        const fetchCompletions = async () => {
            //const res = await axios.get("/main_controller_panel/completions");
            setCompletion(completions);
        };

        fetchImgs();
        fetchCompletions();
        fetchLogs();
    }, []);

    function search(e) {
        const value = e.target.value;
        if(value != ''){
            searched = [];
            logs.map((logz, index) => {
                if(logz.project.includes(value) || logz.status.includes(value) || logz.budget.includes(value) || logz.id.toString().includes(value)){
                    searched.push(logz);
                }
            });
            setData(searched);
            console.log(searched);
        }else{
            setData(logs);
        }
    }

    return (
        <Card>
            <br/><br/><br/>
            <div className="grid grid-cols-2">
                <Dropdown
                    color="lightBlue"
                    placement="bottom-start"
                    buttonText="Transfer"
                    buttonType="filled"
                    size="regular"
                    rounded={false}
                    block={false}
                    ripple="dark"
                >
                    <DropdownLink
                        href="/main_controller_panel/transfers"
                        color="lightBlue"
                        ripple="light"
                    >
                        Log
                    </DropdownLink>
                    <DropdownLink
                        href="/main_controller_panel/transferSingle"
                        color="lightBlue"
                        ripple="light"
                    >
                        Single
                    </DropdownLink>
                    <DropdownLink
                        href="/main_controller_panel/transferMultiple"
                        color="lightBlue"
                        ripple="light"
                    >
                        Multiple
                    </DropdownLink>
                </Dropdown>
                <InputIcon
                    type="text"
                    color="lightBlue"
                    size="regular"
                    outline={false}
                    placeholder="Search"
                    iconFamily="material-icons"
                    iconName="person"
                    onKeyUp={search}
                />
            </div><br/><br/><br/>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Transfer Log</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <Paginate
                        completions={completion}
                        imgs={img}
                        data={data}
                        loading={loading}
                        dataLimit={dataPerPage[0].data}
                    />
                </div>
            </CardBody>
        </Card>
    );
}
