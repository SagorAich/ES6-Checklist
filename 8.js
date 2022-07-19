/* ৮. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো।  */
const mobile={ name: 'phone1', price: 500, color: 'black', cover: 'white' };
const {name,price,color,cover}=mobile;
console.log(name,cover);