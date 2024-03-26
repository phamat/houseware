import axios from "axios"

export const getConfig = async () => {
    const res = await axios.get(`/payment/config`)
    return res.data
}

export const createPaymentUrl = async (requestData) => {
    try {
        const res = await axios.post("/payment/create_payment_url", requestData);
        return res.data;
    } catch (error) {
        console.error("Lỗi khi tạo đường dẫn thanh toán:", error);
        throw error;
    }
};

export const handleVnpayIPN = async (requestData) => {
    try {
        const res = await axios.get("/payment/vnpay_ipn", { params: requestData });
        return res.data;
    } catch (error) {
        console.error("Error handling Vnpay IPN:", error);
        throw error;
    }
};

export const handleVnpayReturn = async (requestData) => {
    try {
        const res = await axios.get("/payment/vnpay_return", { params: requestData });
        return res.data;
    } catch (error) {
        console.error("Error handling Vnpay return:", error);
        throw error;
    }
};