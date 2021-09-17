import React, { useRef } from "react";
import Card from '@material-tailwind/react/Card';
import Dropdown from "@material-tailwind/react/Dropdown";
import Paragraph from "@material-tailwind/react/Paragraph";
import DropdownLink from "@material-tailwind/react/DropdownLink";
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import Icon from "@material-tailwind/react/Icon";
import Input from '@material-tailwind/react/Input';
import Textarea from '@material-tailwind/react/Textarea';
import { forEach } from "lodash";
import makeAnimated from 'react-select/animated';
import CreatableSelect from 'react-select/creatable';

function handleChange(newValue, actionMeta){
    console.group('Value Changed');
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
}
function handleInputChange(inputValue, actionMeta){
    console.group('Input Changed');
    console.log(inputValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
}

export default function SettingsForm() {
    const buttonRef = useRef();
    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ];

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
            </div>
            <br/><br/><br/>
            <CardHeader color="purple" contentPosition="none">
                <div className="w-full flex items-center justify-between">
                    <h2 className="text-white text-2xl">Transfer</h2>
                    <Button
                        color="transparent"
                        buttonType="link"
                        size="lg"
                        style={{ padding: 0 }}
                    >
                        Single
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <form>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        Transfer Single
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
                            <CreatableSelect
                                isClearable
                                onChange={handleChange}
                                onInputChange={handleInputChange}
                                options={options}
                            />
                        </div>
                        <div className="w-full lg:w-12/12 pl-4 mb-10 font-light">
                            <Input
                                type="number"
                                color="purple"
                                placeholder="Amount"
                            />
                        </div>
                    </div>
                    <div className="flex flex-wrap mt-10 font-light">
                        <Textarea color="purple" placeholder="Details About Transfer" />
                    </div>
                    <div className="mt-10 mb-10">
                        <Button className="float-right" color="lightBlue" ref={buttonRef} ripple="light">
                            <Icon name="send" size="xl" />
                            Send
                        </Button>
                    </div>
                </form>
            </CardBody>
        </Card>
    );
}
