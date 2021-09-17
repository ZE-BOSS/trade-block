import { useLocation } from 'react-router-dom';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';
import NavbarInput from '@material-tailwind/react/NavbarInput';
import Image from '@material-tailwind/react/Image';
import Dropdown from '@material-tailwind/react/Dropdown';
import DropdownItem from '@material-tailwind/react/DropdownItem';
import ProfilePicture from '/assets/img/team-1-800x800.jpg';

export default function AdminNavbar({ showSidebar, setShowSidebar }) {
    const location = useLocation().pathname.slice(23);

    return (
        <nav className="bg-light-blue-500 md:ml-64 py-6 px-3 mt-0">
            <div className="container max-w-full mx-auto flex items-center justify-between md:pr-8 md:pl-10">
                <div className="md:hidden">
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        iconOnly
                        rounded
                        ripple="light"
                        onClick={() => setShowSidebar('left-0')}
                    >
                        <Icon name="menu" size="2xl" color="white" />
                    </Button>
                    <div
                        className={`absolute top-2 md:hidden ${
                            showSidebar === 'left-0' ? 'left-64' : '-left-64'
                        } z-50 transition-all duration-300`}
                    >
                        <Button
                            color="transparent"
                            buttonType="link"
                            size="lg"
                            iconOnly
                            rounded
                            ripple="light"
                            onClick={() => setShowSidebar('-left-64')}
                        >
                            <Icon name="close" size="2xl" color="white" />
                        </Button>
                    </div>
                </div>

                <div className="flex justify-between items-center w-full">
                    <h4 className="uppercase text-white text-sm tracking-wider mt-1">
                        {location === '/'
                            ? 'DASHBOARD'
                            : location.toUpperCase().replace('/', '')}
                    </h4>

                    <div className="flex">
                        <NavbarInput placeholder="Search" />

                        <div className="-mr-4 ml-6">
                            <Dropdown
                                color="transparent"
                                buttonText={
                                    <div className="w-12">
                                        <Image src={ProfilePicture} rounded />
                                    </div>
                                }
                                rounded
                                style={{
                                    padding: 0,
                                    color: 'transparent',
                                }}
                            >
                                <DropdownItem color="lightBlue">
                                    <a
                                        href="/main_controller_panel/profile"
                                        className="flex items-center gap-2 text-sm font-light py-0"
                                    >
                                        <Icon name="account_circle" size="xl" />
                                        Account Information
                                    </a>
                                </DropdownItem>
                                <DropdownItem color="lightBlue">
                                    <a
                                        href="/main_controller_panel/settings"
                                        className="flex items-center gap-2 text-sm font-light py-0"
                                    >
                                        <Icon name="settings" size="xl" />
                                        Web Settings
                                    </a>
                                </DropdownItem>
                                <DropdownItem color="lightBlue">
                                    <a
                                        href="#"
                                        className="flex items-center gap-2 text-sm font-light py-0"
                                    >
                                        <Icon name="lock" size="xl" />
                                        Signout
                                    </a>
                                </DropdownItem>
                            </Dropdown>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
