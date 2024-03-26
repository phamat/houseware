import { Row } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderMain = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    background: #fff;
    justify-content: center;
    border-bottom: 1px solid #dbdbdb;
`

export const WrapperHeader = styled(Row)`
    background-color: var(--white);
    align-items: center;
    flex-wrap: nowrap;
    width: 1170px;
    padding: 10px 0;
`

export const WrapperTextHeader = styled(Link)`
    font-size: 18px;
    color: #000;
    font-weight: bold;
    text-align: left;
    // &:hover {
    //     font-size: 18px;
    //     color: var(--primary-color);
    // }
`

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: var(--text-color);
    gap: 10px;
    max-width: 200px;
`

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: var(--text-color);
    white-space: nowrap;
`

export const WrapperContentPopup = styled.p`
    cursor: pointer;
    &:hover {
        color: rgb(26, 148, 255);
    }
`