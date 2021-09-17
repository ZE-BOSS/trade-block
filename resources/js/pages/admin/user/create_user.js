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
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function planUser(){
    var target = document.querySelector('#trans_head');
    var selectComponent = document.querySelector('#select_component');
    var planComponent = document.querySelector('#plan_component');
    selectComponent.className = 'hidden';
    planComponent.className = 'inline';
    target.innerHTML = 'Plan';
}
function selectUser(){
    var target = document.querySelector('#trans_head');
    var selectComponent = document.querySelector('#select_component');
    var planComponent = document.querySelector('#plan_component');
    selectComponent.className = 'inline';
    planComponent.className = 'hidden';
    target.innerHTML = 'Selection';
}

export default function SettingsForm() {
    const buttonRef = useRef();
    const animatedComponents = makeAnimated();
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
                <Dropdown
                    color="lightBlue"
                    placement="bottom-start"
                    buttonText="Transfer By"
                    buttonType="outline"
                    size="regular"
                    rounded={false}
                    block={false}
                    ripple="dark"
                    className="float-right"
                >
                    <DropdownLink
                        href="#plan"
                        color="lightBlue"
                        ripple="light"
                        onClick={planUser}
                    >
                        Plan
                    </DropdownLink>
                    <DropdownLink
                        href="#selection"
                        color="lightBlue"
                        ripple="light"
                        onClick={selectUser}
                    >
                        Selection
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
                        Multiple::<span id="trans_head">Selection</span>
                    </Button>
                </div>
            </CardHeader>
            <CardBody>
                <form>
                    <h6 className="text-purple-500 text-sm mt-3 mb-6 font-light uppercase">
                        Transfer Multiple
                    </h6>
                    <div className="flex flex-wrap mt-10">
                        <div className="w-full lg:w-12/12 pr-4 mb-10 font-light">
                            <span id="select_component" className="visible">
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={[options[1], options[2]]}
                                    isMulti
                                    options={options}
                                />
                            </span>
                            <span id="plan_component" className="invisible">
                                <Select
                                    closeMenuOnSelect={false}
                                    components={animatedComponents}
                                    defaultValue={options}
                                    isMulti
                                    options={options}
                                />
                                {/* use for single */}
                                {/* <CreatableSelect
                                    isClearable
                                    onChange={handleChange}
                                    onInputChange={handleInputChange}
                                    options={options}
                                /> */}
                            </span>
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
