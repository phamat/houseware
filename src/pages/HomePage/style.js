import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    justify-content: flex-start;
    width: auto;
    height: 40px;
    text-transform: capitalize;
`

export const WrapperButtonMore = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background: var(--primary-color);
        span {
            color: #fff;
        }
    }
    width: 100%;
    color: #e62e04;
    text-align: center;
    cursor: ${(props) => props.disabled ? 'not-allowed' : 'pointers'};
    margin-bottom: 20px;
`

export const Container = styled.div`
    backgroundColor: #EEEEEE;
    width: 1220px;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
`

export const WrapperProducts = styled.div`
    display: flex;
    gap: 14px;
    margin-top:20px;
    flex-wrap: wrap;
    transform: translate3d(0px, 0px, 0px);
    transition: all 0s ease 0s;
`