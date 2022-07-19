/* ৭. একটা array এর মধ্যে অনেকগুলা অবজেক্ট আছে। সেখানে যেই অবজেক্ট এর price আছে ৫০০০ টেক্কা সেই অবজেক্টকে find দিয়ে বের করো। */
const mobile = [
    { name: 'phone1', price: 500, color: 'black', cover: 'white' },
    { name: 'phone2', price: 100, color: 'black', cover: 'white' },
    { name: 'phone5', price: 200, color: 'black', cover: 'white' },
    { name: 'phone8', price: 5000, color: 'black', cover: 'white' },
    { name: 'phone6', price: 2000, color: 'black', cover: 'white' },
    { name: 'phone3', price: 1000, color: 'black', cover: 'white' }
]

const search = mobile.find(mob => mob.price == 5000);
console.log(search);