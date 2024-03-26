import { Card } from "antd"
import styled from "styled-components"
import image from '../../assets/images/bg-l-sale.png'

export const WrapperCardStyle = styled(Card)`
    position: relative;
    width: 226px;
    & img {
        width: 100%;
        display: block;
    },
    & .ant-card {
        border-radius: 3px;
    }
    & .ant-card-body {
        min-height: 115px;
        overflow: hidden;
        padding: 20px 15px;
    }
    background-color: ${props => props.disabled ? '#ccc' : '#fff'};
    cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
    margin-top: 10px;
    transition: all 0.5s ease-in-out 0s;
`

export const StyleNameProduct = styled.div`
    font-weight: 400;
    font-size: 1.5rem;
    color: var(--text-color);
    font-weight: 400;
    line-height: 20px;
    margin-bottom: 9px;
    overflow: hidden;
    padding: 0;
    text-overflow: ellipsis;
    text-transform: capitalize;
    white-space: nowrap;
`

export const WrapperReportText = styled.div`
    font-size: 11px;
    color: rgb(128, 128, 137);
    display: flex;
    align-items: center;
    margin: 6px 0 0px;
`

export const WrapperPriceText = styled.span`
    color: #363636;
    font-size: 21px;
    font-weight: 700;
    line-height: 20px;
`

export const WrapperPrevPrice = styled.div`
    color: #666;
    display: block;
    font-size: 13px;
    font-weight: 400;
    line-height: 20px;
    text-decoration: line-through;
`

export const WrapperLableSale = styled.div`
    background: rgba(0, 0, 0, 0) url(${image}) no-repeat scroll right center;
    bottom: 20px;
    color: #e62e04;
    font-size: 20px;
    font-weight: 700;
    height: 22px;
    line-height: 1;
    padding-right: 17px;
    position: absolute;
    right: 15px;
    text-align: center;
    text-transform: uppercase;
    z-index: 1;
`

export const WrapperDiscountText = styled.div`
    color: rgb(255, 66, 78);
    font-size: 12px;
    font-weight: 500;
`

export const WrapperStyleTextSell = styled.span`
    font-size: 15px;
    line-height: 24px;
    color: rgb(120, 120, 120)
`