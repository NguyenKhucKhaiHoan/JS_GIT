let num = 12345678910
// toString() để ép chuỗi
let text = num.toString();
console.log("\n[Text: " +  text + "]")


// indexOf() tìm kiếm chuỗi trong chuỗi (trả về vị trí đầu tiên tìm được)
let indexOf = text.indexOf("1234")
console.log("indexOf: " + indexOf)
// lastIndexOf() tìm kiếm chuỗi trong chuỗi (trả về vị trí sau cùng tìm được)
let lastIndexOf = text.lastIndexOf("1234")
console.log("lastIndexOf: " + lastIndexOf)
 

// .length - Hàm đếm độ dài chuỗi
let length = text.length;
console.log("length: " + length)


// .slice() - Hàm cắt chuỗi
// Hàm cắt chuỗi thành chuỗi con nhỏ hơn, nhập vị trí bắt đầu và vị trí kết thúc (Vị trí bắt đầu là 0)
let slice1 = text.slice(5,7) 
console.log("slice(5,7): " + slice1)
// Hàm cắt chuỗi chỉ nhập 1 vị trí, sẽ cắt từ vị trí được chọn cho đến hết chuỗi
let slice2 = text.slice(6)
console.log("slice(6): " + slice2)
// Hàm cắt chuỗi có vị trí nhập là số âm, sẽ đếm từ cuối chuỗi về trước để cắt chuỗi
let slice3 = text.slice(-3)
console.log("slice(-3): " + slice3)
// Hàm cắt chuỗi có 2 vị trí bắt đầu và kết thúc là âm, sẽ đếm từ cuối chuỗi đến đầu chuỗi để xác định khoảng cần cắt
let slice4 = text.slice(-6, -3)
console.log("slice(-6, -3): " + slice4)


// .subString - Hàm cắt chuỗi
// Tương tự với .slice() nhưng không nhận giá trị âm
let subString1 = text.substring(6)
console.log("substring(6): " + subString1)
let subString2 = text.substring(5,7) 
console.log("subString(5,7): " + subString2)
let subString3 = text.substring(-6)
console.log("substring(-6): " + subString3 + " - WRONG")


// .substr - Hàm cắt chuỗi
// Giống như .slice(), nhưng chỉ số thứ 2 quy định độ dài chuỗi cần cắt, chứ không phải vị trí kết thúc
let subStr1 = text.substr(7,2)
console.log("subStr(7,2): " + subStr1)
// Nếu không có giá trị thứ 2 quy định độ dài chuỗi cần cắt, sẽ tiến hành cắt đến hết chuỗi
let subStr2 = text.substr(7)
console.log("subStr(7): " + subStr2)
// Nếu giá trị là âm sẽ cắt từ cuối chuỗi quay về trước
let subStr3 = text.substr(-7,2)
console.log("subStr(-7,2): " + subStr3)
// Nếu giá trị âm và không có giá trị thứ 2 quy định độ dài chuỗi cần cắt, sẽ tiến hành cắt đến hết chuỗi
let subStr4 = text.substr(-7)
console.log("subStr(-7): " + subStr4)


//charAt() để lấy ký tự ở vị trí chỉ định
let charAt = text.charAt(4)
console.log("charAt(4): " + charAt)


// .replace() - Hàm thay thế chuỗi
let replaceText1 = text.replace("0123", "ABCD")
console.log("replaceText1: " + replaceText1) 
// Có phân biệt chữ hoa và chữ thường
let replaceText2 = replaceText1.replace("abcd", "0123")
console.log("replaceText2: " +  replaceText2)
let text2 = "abcd_ABCD_abcd_ABCD"
console.log("\n[text2: " + text2 + "]")
// Dùng /i để replace không phân biệt chữ in và chữ thường
let replaceText3 = text2.replace(/ABC/i, "123")
console.log("replaceText3: " + replaceText3);
// Dùng /g để replace toàn bộ, nếu không dùng /g sẽ chỉ replace chuỗi đầu tiên được phát hiện
let replaceText4 = text2.replace(/ABC/g, "123")
console.log("replaceText4: " + replaceText4);
// Dùng cả /i và /g để replace toàn bộ chữ in lẫn chữ thường
let replaceText5 = text2.replace(/ABC/ig, "123")
console.log("replaceText5: " + replaceText5);
// .replaceAll() có chức năng tương tự như dùng /g
let replaceText6 = text2.replaceAll("ABC", "123")
console.log("replaceText6: " + replaceText6);
// let replaceText7 = text2.replaceAll(/ABC/i, "123") - ERROR
// let replaceText8 = text2.replaceAll(/ABC/g, "123") - ERROR


// toUpperCase() và toLowerCase() để chuyển đổi chuỗi từ chữ thường sang chữ in và ngược lại
let upper = text2.toUpperCase(text2)
console.log("upper: " + upper)
let lower = text2.toLowerCase(text2)
console.log("lower: " + lower)

// concat() để nối chuỗi, có thể dùng thay cho toán từ cộng khi biến khai báo là dạng chuỗi
let text3 = text.concat(" ", text2)
console.log("\n[Text3: " + text3 + "]" )
let text4 = text + " " + text2
console.log("[Text4: " + text4 + "]" )


// trim() dùng để loại bỏ khoảng trắng đầu và cuối
let text5 = "    ABCD    "
console.log("\n[Text5: " + text5 + "]" )
let trim1 = text5.trim()
console.log("trim1: " + trim1)
// trimStart() để loại bỏ khoảng trắng ở đầu
let trim2 = text5.trimStart()
console.log("trim2: " + trim2)
// trimEnd() để loại bỏ khoảng trắng ở cuối
let trim3 = text5.trimEnd()
console.log("trim3: " + trim3)


//split() để chuyển chuỗi thành mảng
let text6 = "Huy/ Quỳnh/ Trân/ Hoàn"
let array = text6.split("/");
console.log(array)