import Card from '@material-tailwind/react/Card';
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import CardHeader from '@material-tailwind/react/CardHeader';
import Paragraph from "@material-tailwind/react/Paragraph";
import InputIcon from "@material-tailwind/react/InputIcon";
import CardBody from '@material-tailwind/react/CardBody';
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import Team1 from '/assets/img/team-1-800x800.jpg';
import Team2 from '/assets/img/team-2-800x800.jpg';
import Team3 from '/assets/img/team-3-800x800.jpg';
import Team4 from '/assets/img/team-4-470x470.png';

export default function CardTable() {
    return (
        <Card>
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
                        href="/main_controller_panel/transferSingle"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => e.preventDefault()}
                    >
                        Single
                    </DropdownLink>
                    <DropdownLink
                        href="/main_controller_panel/transferMultiple"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => e.preventDefault()}
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
                />
            </div><br/><br/><br/>
            <CardHeader color="purple" contentPosition="left">
                <h2 className="text-white text-2xl">Card Table</h2>
            </CardHeader>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
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
                        <tbody>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Argon Design System
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $2,500 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500 mr-2"></i>{' '}
                                    pending
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Image
                                                src={Team1}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team2}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team3}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team4}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress color="red" value="60" />
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Black Dashboard Sketch
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $1,800 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
                                    completed
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Image
                                                src={Team1}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team2}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team3}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team4}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress color="green" value="100" />
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    React Material Dashboard
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $4,400 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-teal-500 mr-2"></i>{' '}
                                    on schedule
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Image
                                                src={Team1}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team2}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team3}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team4}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress color="teal" value="90" />
                                </th>
                            </tr>
                            <tr>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    React Material Dashboard
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    $2,200 USD
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-blue-gray-900 mr-2"></i>{' '}
                                    completed
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <div className="flex">
                                        <div className="w-10 h-10 rounded-full border-2 border-white">
                                            <Image
                                                src={Team1}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team2}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team3}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                        <div className="w-10 h-10 rounded-full border-2 border-white -ml-4">
                                            <Image
                                                src={Team4}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                    </div>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress color="green" value="100" />
                                </th>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </CardBody>
            <div className="grid grid-cols-3">
                <Dropdown
                    color="lightBlue"
                    placement="bottom-start"
                    buttonText="25"
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
                        onClick={(e) => e.preventDefault()}
                    >
                        25
                    </DropdownLink>
                    <DropdownLink
                        href="#50"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => e.preventDefault()}
                    >
                        50
                    </DropdownLink>
                    <DropdownLink
                        href="#100"
                        color="lightBlue"
                        ripple="light"
                        onClick={(e) => e.preventDefault()}
                    >
                        100
                    </DropdownLink>
                </Dropdown>
                <Paragraph color="lightBlue">
                   1 to 25 of 154
                </Paragraph>
                <Pagination>
                    <PaginationItem href="#last" ripple="dark">
                        <Icon name="keyboard_arrow_left" />
                    </PaginationItem>
                    <PaginationItem color="lightBlue" href="#1" ripple="light">1</PaginationItem>
                    <PaginationItem href="#2" ripple="dark">2</PaginationItem>
                    <PaginationItem href="#3" ripple="dark">3</PaginationItem>
                    <PaginationItem href="#4" ripple="dark">4</PaginationItem>
                    <PaginationItem href="#5" ripple="dark">5</PaginationItem>
                    <PaginationItem href="#last" ripple="dark">
                        <Icon name="keyboard_arrow_right" />
                    </PaginationItem>
                </Pagination>
            </div>
        </Card>
    );
}
