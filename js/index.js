document.getElementById("tinhLuong").addEventListener("click", tinhLuong );

function tinhLuong(){
	const tongLuong = +document.getElementById("tongLuong").value;
	const soNgayLam = +document.getElementById("soNgayLam").value;
	const soGioLam = +document.getElementById("soGioLam").value;

	let luongTongTrong1Thang = 0;
	let luongTrong1Gio = 0;
	let luongTrong1Ngay = 0;
	if(tongLuong == "" || soNgayLam == "" || soGioLam == ""){
		alert("Vui Lòng Nhập Thông Tin Hợp Lệ");
	}else{
		luongTrong1Ngay = tongLuong/soNgayLam;
		luongTrong1Gio = luongTrong1Ngay/8;
		luongTongTrong1Thang = luongTrong1Gio * soGioLam * soNgayLam;
		
	}
	var formatter = new Intl.NumberFormat('vi', {
		style: 'currency',
		currency: 'VND',
	  
		// These options are needed to round to whole numbers if that's what you want.
		//minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
		//maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
	  });
	  
	  document.getElementById("ketQuaLuongThang").innerHTML = formatter.format(luongTongTrong1Thang); /* $2,500.00 */
}
let visibleDiTre = document.getElementById("visibleDiTre");
let visibleVeSom = document.getElementById("visibleVeSom");
let visibleTangCa = document.getElementById("visibleTangCa");

	visibleDiTre.style.display="none";
	visibleVeSom.style.display="none";
	visibleTangCa.style.display="none";
// for(let i = 0; i< visibleVeSom.length; i++){
// 	visibleVeSom[i].style.display="none";
// }
// for(let i = 0; i< visibleTangCa.length; i++){
// 	visibleTangCa[i].style.display="none";
// }

let diTre = document.getElementById("diTre").addEventListener("click", showTextBoxDiTre) ;
let veSom = document.getElementById("veSom").addEventListener("click", showTextBoxVeSom) ;
let tangCa = document.getElementById("tangCa").addEventListener("click", showTextBoxTangCa);
function showTextBoxDiTre(){
		visibleDiTre.style.display="block";
}
function showTextBoxVeSom(){
	visibleVeSom.style.display="block";
}
function showTextBoxTangCa(){
	visibleTangCa.style.display="block";
}