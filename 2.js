/* ২. টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং তৈরি করো। সেটার মধ্যে উপরে ডিক্লেয়ার করা ভেরিয়েবল এর মান ডাইনামিক ভাবে বসাও। একইভাবে উপরে একটা অবজেক্ট ডিক্লেয়ার করো। এবং ডাইনামিকভাবে উপরের অবজেক্ট এর দুইটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। */

const tem=15;
const temString=`she is very good and her jersy number is ${tem}`;
//console.log(temString);

 const hall={name:'hamid Hall',officer:'Mr. X',floor:4,student:400,staff:15}
 const temString2=`nowadays i live in ${hall.name}.Which officer is ${hall.officer}`;
 console.log(temString2);