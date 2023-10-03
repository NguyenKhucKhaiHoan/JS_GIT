var number = 11
var Number = 9
var name = "Nguyễn Khúc Khải Hoàn"
// var @name = "Nguyễn Khúc Khải Hoàn"
const id = 1811063616;
const birthday= "20/07/2000"

console.log("[var] number: " + number)
console.log("[var] name: " + name)
console.log("[const] id: " + id)
console.log("const birthday: " + birthday)

// Hàm và biến trong JS phân biệt chữ hoa và chữ thường
console.log("Number=11? " + Boolean(number == Number))

// Gán dữ liệu mới cho id
// id = 800278119
// Hiển thị lại id mới (Lỗi)
// console.log("const id: " + id) 
// Gán dữ liệu mới cho number
number = 13
// Hiển thị lại number mới
console.log("[var] number mới: " + number)
// Biến có thể thay đổi, còn hằng thì không

// var vs let
// Phạm vi của biến sử dụng var là phạm vi hàm hoặc bên ngoài hàm, toàn cục.
// Phạm vi của biến sử dụng let là phạm vi một khối (block), xác định bởi cặp {}.
function useLet() {
    console.log(j); // ReferenceError: j is not defined
    for (let j = 0; j < 3; j++) {
      console.log("j inside ", j); // 0, 1, 2
    }
    console.log("j outside ", j); // ReferenceError: j is not defined
}
useLet();

function useVar() {
    console.log(i); // undefined
    for (var i = 0; i < 3; i++) {
      console.log("i inside", i); // 0, 1, 2
    }
    console.log("i outside", i); // 3
    }
useVar();