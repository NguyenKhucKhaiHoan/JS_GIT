// Toán tử
// Toán tử số học - Arithmetic Operators
let a=10
let b=10
let c=10
let d=10
console.log("\n1. ARITHEMATIC OPERATORS\n\n[a=" + a, "b=" + b, "c=" + c, "d=" + d + "]")

// Cộng
let addition=a+b
console.log("a+b= " + addition)

// Trừ
let subtraction=a-b
console.log("a-b=" + subtraction)

// Nhân
let nmultiplication=a*b
console.log("a*b=" + nmultiplication)

// Chia lấy phần nguyên
let divison=a/3
console.log("a/3=" + divison)

// Chia lấy phần dư
let modulo=a%3
console.log("a%3=" + modulo);

// Lũy thừa
let exponentiation=a**2;
console.log("a^2="+ exponentiation)

// Tăng 1 giá trị
console.log("a+1=" + a++)

// Giảm 1 giá trị
console.log("a-1=" + a--) 

// Toán tử so sánh - Comparison Operators
let e=100
let f="100"
let g=100
let h=200
console.log("\n2. COMPARISON OPERATORS\n\n[e=" + e, "f=" + f, "g=" + g, "h=" + h +"]" )


// So sánh bằng theo giá trị
console.log("e==f: " + Boolean(e==f)) 

// So sánh bằng theo cả kiểu dữ liệu và giá trị
console.log("e===f: " + Boolean(e===f)) 

// So sánh không bằng theo giá trị
console.log("e!=f: " + Boolean(e!=f)) 

// So sánh không bằng theo cả kiểu dữ liệu và giá trị
console.log("e!==f: " + Boolean(e!==f)) 

// So sánh lớn hơn
console.log("e>h: " + Boolean(e>h))

// So sánh bé hơn
console.log("e<h: " + Boolean(e<h))

// So sánh lớn hơn hoặc bằng
console.log("e>=h: " + Boolean(e>=h))

// So sánh bé hơn hoặc bằng
console.log("e<=h: " + Boolean(e<=h))

// Toán tử ba ngôi - Conditional Operator (Có thể hiển đây là bản rút gọn của hàm if-else kinh điển)
let cond = e>g?"e lớn hơn g":"e nhỏ hơn g"
console.log("\n3. CONDITIONAL OPERATOR\n\nNếu e>g thì in 'e lớn hơn g', Ngược lại thì in 'e nhỏ hơn g': " + cond)

// Toán tử logic - Logical Operators
let i= 5
let j= 10
console.log("\n4. LOGICAL OPERATORS\n\n[i=" + i, "j=" + j +  "]")

// Toán tử và (&&)
console.log("i!=j && i>j: " + Boolean(i!=j && i>j))
console.log("i!=j && i<j: " + Boolean(i!=j && i<j))

// Toán tử hoặc (||)
console.log("i==j || i>j: " + Boolean(i==j || i>j))
console.log("i==j || i<j: " + Boolean(i!=j || i<j))

// Toán tử phủ định (!)
console.log("!(i>j): " + Boolean(!(i>j)))
console.log("!(i<j): " + Boolean(!(i<j)))
console.log("!(i=j): " + Boolean(!(i==j)))

// Toán tử gán - Assignment Operators
let m= 20 
let n= 20
console.log("\n5. ASSIGNMENT OPERATORS\n\n[m=" + m, "n=" + n +  "]")

// Toán tử =
console.log("let 0=m > o= 20?: " + Boolean(o=m))

// Toán tử +=
console.log("[m+=n] = [m=m+n]?: " + Boolean(console.log(m+=n) == console.log(m=m+n)))

// Toán tử -=
console.log("[m-=n] = [m=m-n]?: " + Boolean(console.log(m-=n) == console.log(m=m-n)))

// Toán tử *=
console.log("[m*=n] = [m=m*n]?: " + Boolean(console.log(m*=n) == console.log(m=m*n)))

// Toán tử /=
console.log("[m/=n] = [m=m/n]?: " + Boolean(console.log(m/=n) == console.log(m=m/n)))

// Toán tử %=
console.log("[m%=n] = [m=m%n]?: " + Boolean(console.log(m%=n) == console.log(m=m%n)))

// Toán tử **=
console.log("[m**=n] = [m=m**n]?: " + Boolean(console.log(m**=n) == console.log(m=m**n)))
