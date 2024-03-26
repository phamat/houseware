import React, { useMemo } from 'react'
import { StyleNameProduct, WrapperCardStyle, WrapperDiscountText, WrapperPriceText, WrapperPrevPrice, WrapperReportText, WrapperStyleTextSell, WrapperLableSale } from './style'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'
import { convertPrice } from '../../utils'
import { useSelector } from 'react-redux'

const CardComponent = (props) => {
    const { image, name, price, discount, id } = props
    const order = useSelector((state) => state.order)
    const navigate = useNavigate()
    const handleDetailsProduct = (id) => {
        navigate(`/product-details/${id}`)
    }

    const totalPriceMemo = price - (price * (discount / 100))

    return (
        <WrapperCardStyle
            hoverable
            body={{ padding: '10px' }}
            cover={<img alt="example" src={image} style={{ borderRadius: '0px' }} />}
            onClick={() => handleDetailsProduct(id)}
        >
            <img
                src={logo}
                style={{
                    width: '68px',
                    height: '14px',
                    position: 'absolute',
                    top: -1,
                    left: -1,
                    borderTopLeftRadius: '3px'
                }}
                alt=''
            />
            <StyleNameProduct>{name}</StyleNameProduct>
            {/* <WrapperReportText>
                <span style={{ marginRight: '4px' }}>
                    <span>{rating} </span> <StarFilled style={{ fontSize: '12px', color: 'rgb(253, 216, 54)' }} />
                </span>
                <WrapperStyleTextSell> | Da ban {selled || 1000}+</WrapperStyleTextSell>
            </WrapperReportText> */}
            <p style={{ lineHeight: '24px' }}>
                {discount !== 0 ? (
                    <>
                        <WrapperPriceText>{convertPrice(totalPriceMemo)}</WrapperPriceText>
                        <WrapperPrevPrice>{convertPrice(price)}</WrapperPrevPrice>
                        <WrapperLableSale>{discount}%</WrapperLableSale>
                    </>
                ) : (
                    <WrapperPriceText>{convertPrice(price)}</WrapperPriceText>
                )}

                {/* <WrapperPriceText>
                    {convertPrice(price)}
                </WrapperPriceText>
                <WrapperPrevPrice>
                    {convertPrice(price)}
                </WrapperPrevPrice> */}

            </p>
            {/* <WrapperLableSale>
                {discount || 5}%
            </WrapperLableSale> */}
        </WrapperCardStyle>
    )
}

export default CardComponent