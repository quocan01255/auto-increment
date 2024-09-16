const axios = require('axios');

// Địa chỉ API mà bạn muốn gọi
const apiUrl = 'https://www.kucoin.com/_api/xkucoin/platform-telebot/game/gold/increase?lang=en_US';

// Thông tin header
const headers = {
    'Cookie': 'WEBGRAY=stable; X-GRAY=xgray-2024-0915&xgray-coinlabel; X_GRAY_TEMP_UUID=8ddc9d3c-6a24-4cb7-9aae-876f79536bdb; cf_clearance=UjRVWk28qTFac0G207e5ieBEp0PQeVROy4XeMR0uwJQ-1726484208-1.2.1.1-ueLORa__5OzBwEAIDeXn0BSgXTKV5iycc8X.xp_wlItoB_zSezMERJJNlCgzovgFdywOas_KMothx9wJslMUg9M2JvB6JMzmtQRSqKhBUa9R5.uz9As1I0ax1eMnZEkxGrK7I8Q7zUPElB.XJ.bC7IeUNPXejqloNYfzlObrucQAMG6xo5wTUEAtuHjaLJp_6ZMdXwhRZMorUrk9sbNuiyGbIfFVxc5Lnob132m8Vfor.uS0x9XX1APCh_kjIMO74MiTe24bvzU3ELQSf8r4ibHg_597uAA8OBVsYRUe3SjLr0F0o2Qo9G4p4ek2bCnBwMpCwhLPlbS0AD7JmubLWvqH.PD6Ud7OzwwESFZyVDKOW4fTJRbrPnisnArF299YDmDkqw7JrjW.7r_hHAFUtA; __cf_bm=zpgLcWNEdPMPFSRNhWerWSjm7xz0pG6j6EfBPkwdSxQ-1726485615-1.0.1.1-G03fFSyEPhJp8m19awa78PoSb7WsBEi3flNdZhm3lOA1QzcBxya4dtPVGX6Nlz_aLU5hjFoMNskF9StTB0sRMA; _cfuvid=1Xmsvqa_JufNTSClzAC2p4qkwJ1UUipnWOKIzh22u9E-1726485615699-0.0.1.1-604800000; x_g_t_k=E6F8864D5C5894AF2E5EDE87B93BDFDD1E94DB6BF0A952ED4A62F0E4CAFE2067832CC70C5AE1EE7C4575B4E8D926EB0FED8179D90CCA4B387840530F483FD3371F0738701AA84457D12A6451A2F5DEB9ADA8558EF2134A805CDCFA31D46ED298; X_GRAY_TMP=1726485171216; AWSALBCORS=KR36ondf6YomymcDnOnaOzRvAnZtQqFPiNKWjGdyHbppe+fsYy8lvVhYUwza8urgjAZI9BW3S7XkNLPTKwfMz2esvHUst/5fJsc7ZsDv7p2lwqx1HLXTyTZ8JPnP',
    'Content-Type': 'multipart/form-data; boundary=----WebKitFormBoundarynbxmvVfRfoV4kz4l',
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



// Hàm để gọi API và xử lý phản hồi
async function callApi() {
    // Tạo body với tham số ngẫu nhiên
    const requestBody = {
        molecule: 2983, 
        increment: getRandomInt(40, 60) 
    };

    try {
        const response = await axios.post(apiUrl, requestBody, { headers });
        console.log('Dữ liệu nhận được:', response.data);
    } catch (error) {
        console.error('Lỗi khi gọi API:', error);
    }
}

const interval = 3000; 
setInterval(callApi, interval);
