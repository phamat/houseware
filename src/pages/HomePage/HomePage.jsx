import React from 'react'
import SliderComponent from '../../components/SliderComponent/SliderComponent'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperButtonMore, WrapperProducts, Container, WrapperTypeProduct } from './style'
import slider1 from '../../assets/images/slides/slide1.webp'
import slider2 from '../../assets/images/slides/slide2.webp'
import slider3 from '../../assets/images/slides/slide3.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import { useQuery } from '@tanstack/react-query'
import * as ProductService from '../../services/ProductService'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import Loading from '../../components/LoadingComponent/LoadingComponent'
import { useDebounce } from '../../hooks/useDebounce'
import { useEffect } from 'react'

const HomePage = () => {
    const searchProduct = useSelector((state) => state?.product?.search)
    const searchDebounce = useDebounce(searchProduct, 500)
    const [loading] = useState(false)
    const [limit, setLimit] = useState(10)
    const [typeProducts, setTypeProducts] = useState([])

    const fetchProductAll = async (context) => {
        const limit = context?.queryKey && context?.queryKey[1]
        const search = context?.queryKey && context?.queryKey[2]
        const res = await ProductService.getAllProduct(search, limit)

        return res
    }

    const fetchAllTypeProduct = async () => {
        const res = await ProductService.getAllTypeProduct()
        if (res?.status === 'OK') {
            setTypeProducts(res?.data)
        }
    }

    const { isLoading, data: products, isPreviousData } = useQuery({
        queryKey: ['products', limit, searchDebounce],
        queryFn: fetchProductAll,
        config: { retry: 3, retryDelay: 1000, keepPreviousData: true }
    });

    useEffect(() => {
        fetchAllTypeProduct()
    }, [])

    return (
        <Loading isLoading={isLoading || loading}>
            <div style={{ borderBottom: '1px solid #ebebeb' }}>
                <div style={{ width: '1170px', margin: '0 auto', fontSize: '13px' }}>
                    <WrapperTypeProduct>
                        {typeProducts.map((item) => {
                            return (
                                <TypeProduct name={item} key={item} />
                            )
                        })}
                    </WrapperTypeProduct>
                </div>
            </div>
            <div className='body' style={{ width: '100%', backgroundColor: '#efefef', marginBottom: '90px' }}>
                <div id="container" style={{ height: '1000px', margin: '0 auto' }}>
                    <SliderComponent arrImages={[slider1, slider2, slider3]} />
                    <Container>
                        <WrapperProducts>
                            {products?.data?.map((product) => {
                                return (
                                    <CardComponent
                                        key={product._id}
                                        countInStock={product.countInStock}
                                        description={product.description}
                                        image={product.image}
                                        name={product.name}
                                        price={product.price}
                                        rating={product.rating}
                                        type={product.type}
                                        selled={product.selled}
                                        discount={product.discount}
                                        id={product._id}
                                    />
                                )
                            })}
                        </WrapperProducts>
                    </Container>
                    <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
                        <WrapperButtonMore
                            textbutton={isPreviousData ? 'Load more' : "Xem thêm"} type="outline" styleButton={{
                                border: `1px solid ${products?.total === products?.data?.length ? '#f5f5f5' : '#e62e04'}`, color: `${products?.total === products?.data?.length ? '#f5f5f5' : '#e62e04'}`,
                                width: '240px', height: '38px', borderRadius: '4px'
                            }}
                            disabled={products?.total === products?.data?.length || products?.totalPage === 1}
                            styleTextButton={{ fontWeight: 500, color: products?.total === products?.data?.length && '#fff' }}
                            onClick={() => setLimit((prev) => prev + 5)}
                        />
                    </div>
                </div>
            </div>
        </Loading>
    )
}

export default HomePage 