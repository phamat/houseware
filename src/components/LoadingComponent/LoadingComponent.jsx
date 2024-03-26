import { Spin } from 'antd';
import React, { useState } from 'react';

const Loading = ({ children, isLoading = false, delay = 200 }) => {
    const [showLoading, setShowLoading] = useState(isLoading);

    // Sử dụng useEffect để cập nhật trạng thái hiển thị của loading
    React.useEffect(() => {
        const timer = setTimeout(() => {
            setShowLoading(isLoading);
        }, delay);

        return () => clearTimeout(timer);
    }, [isLoading, delay]);

    return <Spin spinning={showLoading}>{children}</Spin>;
};

export default Loading;
