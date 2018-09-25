// 1. Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as one sorted array.
// Input:
// nums1 = [1,2,3,0,0,0], m = 3
// nums2 = [2,5,6],       n = 3

// Output: [1,2,2,3,5,6]

var num1 = [1,2,3,0,0,0,]
var num2= [2,5,6]
var tampung = [...num1,...num2]
    tampung.sort()
    tampung.splice(0,3)
    console.log(tampung)

    //with es6
test = (x,y)=>{
    isi = [...x,...y]
    isi.sort()
    isi.splice(0,3)
    console.log(isi)
}
test(num1,num2)

// 2. Given two arrays, write a function to compute their intersection.
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]

var num3=[4,9,5];
var num4=[9,4,9,8,4]

pair = ()=>{
    var simpan = []
    for (var i = 0; i < num3.length; i++) {
    if (num4.indexOf(num3[i]) !== -1) {
        simpan.push(num3[i]);
    }
}
console.log(simpan)
}
pair()


