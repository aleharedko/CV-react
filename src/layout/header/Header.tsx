import React from 'react';
import styled from "styled-components";
import {Logo} from "../../commponents/logo/Logo.tsx";
import {Menu} from "../../commponents/menu/Menu.tsx";

export const Header = () => {
    return (
        <div>
            <StuledHeader>
                <Logo/>
                <Menu/>
            </StuledHeader>
        </div>
    );
};

const StuledHeader = styled.header`
    background-color: cadetblue;
    display: flex;
    justify-content: space-between;
`
