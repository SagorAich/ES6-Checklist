/* ১১. একটা nested অবজেক্ট ডিক্লেয়ার করো (অর্থাৎ একটা অবজেক্ট এর প্রপার্টি এর মধ্যেও যে অবজেক্ট থাকতে পারে। আবার সেই অবজেক্ট এর প্রপার্টি এর মধ্যেও সে অবজেক্ট থাকতে পারে। সেই রকম একটা অবজেক্ট ডিক্লেয়ার করো। এবং যেকোন একটা প্রপার্টি এর মান একটা array হবে। জাস্ট এমন একটা অবজেক্ট )

১২. উপরের অবজেক্ট এ ডট এর আগে যে প্রশ্নবোধক চিহ্ন দিয়ে যে অপশনাল চেইনিং করা যায়। সেটা একটু প্রাকটিস করো।  */

const nestedObject = {
    company: 'samsung',
    employee: 5000,
    avgSalary: 20000,
    emojiMade: {
        released: 200,
        number: 200,
    },
    firstEmployee: {
        name: 'sagor',
        home: 'Rajshahi',
        income: '2tk o na',
        study: {
            status: 'depressed', varsity: 'omuk', year: '3rd'
        },
    },
};
//console.log(nestedObject.firstEmployee.study.year);
console.log(nestedObject.firstEmployee.emojiMade?.year);