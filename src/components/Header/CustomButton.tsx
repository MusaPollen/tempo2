// src/components/CustomButton.tsx

import React from "react";
import {
    Button,
    ButtonGroup,
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/react";


export const ChevronDownIcon = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
            <path d="M3.204 5h9.592L8 10.481zm-.753.659 4.796 5.48a1 1 0 0 0 1.506 0l4.796-5.48c.566-.647.106-1.659-.753-1.659H3.204a1 1 0 0 0-.753 1.659" />
        </svg>
    );
};

const CustomButton = () => {

    return (
        <ButtonGroup color="primary" variant="ghost" size="lg">
            <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
            </Button>
            <Dropdown placement="bottom-end">
                <DropdownTrigger>
                    <Button isIconOnly>
                        <ChevronDownIcon />
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    disallowEmptySelection
                    aria-label="Merge options"
                    className="max-w-[300px]"
                    selectionMode="single"

                >
                    <DropdownItem key="login" description={"asdf"}>
                        LOG-IN
                    </DropdownItem>
                    <DropdownItem key="test1" description={"asdf"}>
                        TEST
                    </DropdownItem>
                    <DropdownItem key="test2" description={"asdf"}>
                        TEST
                    </DropdownItem>
                    <DropdownItem key="test3" description={"asdf"}>
                        TEST
                    </DropdownItem>


                </DropdownMenu>
            </Dropdown>
        </ButtonGroup>
    );
};

export default CustomButton;
