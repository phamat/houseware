import React from 'react'
import { SearchOutlined } from '@ant-design/icons'
import InputComponent from '../InputComponent/InputComponent'
import ButtonComponent from '../ButtonComponent/ButtonComponent'

const ButttonInputSearch = (props) => {
  const {
    size, placeholder, textbutton,
    bordered, backgroundColorInput = '#fff',
    backgroundcolorbutton = 'rgb(13, 92, 182)',
    colorButton = '#fff'
  } = props

  return (
    <div style={{ display: 'flex'}}>
      <InputComponent
        size={size}
        placeholder={placeholder}
        style={{ backgroundColor: backgroundColorInput, borderRadius: '5px 0px 0px 5px'}}
        {...props}
      />
      <ButtonComponent
        size={size}
        styleButton={{ background: backgroundcolorbutton, border: !bordered && 'none', borderRadius: '0px 5px 5px 0px' }}
        icon={<SearchOutlined color={colorButton} style={{ color: '#fff' }} />}
        textbutton={textbutton}
        styleTextButton={{ color: colorButton}}
      />
    </div>
  )
}

export default ButttonInputSearch