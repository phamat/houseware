import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import ProductDetailsComponent from '../../components/ProductDetailsComponent/ProductDetailsComponent'

const ProductDetailsPage = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  return (
    <div style={{ width: '100%', background: '#efefef', height: '100%' }}>
      <div style={{ width: '1270px', height: '100%', margin: '0 auto', background: '#efefef' }} >
        <div style={{paddingTop: '10px'}}>
        <h5 style={{ margin: '0', height: '30px', fontSize: '13px' }}>
          <span style={{ cursor: 'pointer', fontWeight: 'bold' }} onClick={() => { navigate('/') }}>Trang chủ</span>
          - Chi tiết sản phẩm
        </h5>
        </div>
        <ProductDetailsComponent idProduct={id} />
      </div>
    </div>
  )
}

export default ProductDetailsPage