//a, Khởi tạo 4 biến theo kiểu camel case
let yourName = prompt("Please enter your name:", "Điền tên bạn vào đây");
let yourHeight = Number(prompt("Please enter your height (m)", "chiều cao của bạn? (m)"));
let yourloveHeight = Number(prompt("Please enter Your lover's height (m)", "Chiều cao của người yêu bạn (m)"));
let yourWeight = Number(prompt("Please enter your weight"));



//b, Tính toán//
//Tính tổng chiều cao của bạn và người yêu
let totalHeight = yourHeight + yourloveHeight;
//Tính độ chênh lệch chiều cao của 2 người
let differrence = yourHeight - yourloveHeight;
//Tính BMI = cân nặng / (chiều cao *2)
let BMI = yourWeight / (yourHeight * 2);
//c, in ra màn hình console
if (isNaN(yourHeight)) {
    alert("You must enter number for your height, your weight, your's love height! press F5 to try again");
    console.log("You must enter number for your height, your weight, your's love height! press F5 to try again")
} else if (isNaN(yourWeight)) {

    alert("You must enter number for your height, your weight, your's love height! press F5 to try again");
    console.log("You must enter number for your height, your weight, your's love height! press F5 to try again")
} else if(isNaN(yourloveHeight)) {
    alert("You must enter number for your height, your weight, your's love height! press F5 to try again");
    console.log("You must enter number for your height, your weight, your's love height! press F5 to try again")
} else {
    console.log(`Chiều cao của bạn đã nhập là ${yourHeight} m, chiều cao của ny bạn đã nhập là ${yourloveHeight} m`);
    console.log(`Độ chênh lệch chiều cao của 2 người là ${differrence} m, tổng chiều cao 2 người là ${totalHeight} m`);
    console.log(`Giá trị BMI sau khi tính toán là: ${BMI}`);
}
//-Nếu độ chênh lệch chiều cao nam và chiều cao nữ >=10cm thì in ra màn hình console “Chiều cao hợp lí”
if (differrence >= 0.1) {
    console.log("Chiều cao hợp lý");
} else {
    console.log("Bạn bị lùn hơn người yêu bạn =))");
}
//-Kiểm tra giá trị BMI và in ra 1 loại cơ thể theo bảng:
if (BMI < 18.5) {
    console.log("Cơ thể bạn thuộc loại gầy");
} else if (BMI >= 18.5 && BMI <= 24.9) {
    console.log("Cơ thể bạn thuộc loại bình thường");
} else if (BMI >= 25 && BMI <= 29.9) {
    console.log("Cơ thể bạn thuộc loại tăng cân");
} else if (BMI >= 30 && BMI <= 34.9) {
    console.log("Cơ thể bạn thuộc loại béo phì loại 1");
} else if (BMI >= 35 && BMI <= 39.9) {
    console.log("Cơ thể bạn thuộc loại béo phì loại 2");
} else {
    console.log("Cơ thể bạn thuộc loại béo phì loại 3");
}
