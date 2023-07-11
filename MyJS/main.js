var danhsachNV = new LopNhanVien();
var Valida = new Validation();

getLocalStore();

function DomEle(id) {
    return document.getElementById(id);
};
function rsThongBao() {
    DomEle("tbTKNV").style.display = "none";
    DomEle("tbTen").style.display = "none";
    DomEle("tbEmail").style.display = "none";
    DomEle("tbMatKhau").style.display = "none";
    DomEle("tbNgay").style.display = "none";
    DomEle("tbLuongCB").style.display = "none";
    DomEle("tbChucVu").style.display = "none";
    DomEle("tbGiolam").style.display = "none";
};
document.getElementById("btnThem").onclick = function moBangThem() {
    DomEle("btnThemNV").style.display = "block";
    DomEle("btnCapNhat").style.display = "none";
    DomEle("tknv").disabled = false;
    rsThongBao();
}

function layThongTinNV(isAddTaiKhoan, isAddEmail) {

    var taiKhoanNV = DomEle("tknv").value;
    var hoTenNV = DomEle("name").value;
    var emailNV = DomEle("email").value;
    var matKhauNV = DomEle("password").value;
    var ngayLam = DomEle("datepicker").value;
    var luongCB = DomEle("luongCB").value;
    var chucVuNV = DomEle("chucvu").value;
    var gioLam = DomEle("gioLam").value;

    var isValid = true;
    // Tài Khoản
    if (isAddTaiKhoan) {
        isValid &= Valida.CheckRong(taiKhoanNV, "tbTKNV", "(*) vui lòng không bỏ trống") && Valida.CheckDoDai(taiKhoanNV, "tbTKNV", "(*) vui lòng nhập từ 4-6 chữ số", 4, 6) && Valida.CheckTaiKhoanTonTai(taiKhoanNV, "tbTKNV", "(*) tài khoản đã tồn tại", danhsachNV.arrDSNV);
        // isValid &= Valida.CheckEmailTonTai(emailNV, "tbEmail", "(*) Email đã tồn tại", danhsachNV.arrDSNV);
    }
    //Họ Và Tên
    isValid &= Valida.CheckRong(hoTenNV, "tbTen", "(*) vui lòng không bỏ trống") && Valida.CheckPattern(hoTenNV, "tbTen", "(*) vui lòng nhập họ tên đúng dạng ký tự", "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" + "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" + "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$") && Valida.CheckDoDai(hoTenNV, "tbTen", "(*)vui lòng điền đầy đủ họ và tên", 6, 40);

    // Email
    if (isAddEmail) {
        isValid &= Valida.CheckRong(emailNV, "tbEmail", "(*) vui lòng không bỏ trống") && Valida.CheckPattern(emailNV, "tbEmail", "(*) vui lòng nhập chữ, sô, có @gmail.com, không ký tự đặc biệt", /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && Valida.CheckEmailTonTai(emailNV, "tbEmail", "(*) Email đã tồn tại", danhsachNV.arrDSNV);
    }

    // Mật Khẩu
    isValid &= Valida.CheckRong(matKhauNV, "tbMatKhau", "(*) vui lòng không bỏ trống") && Valida.CheckDoDai(matKhauNV, "tbMatKhau", "(*) Vui lòng nhập từ 6-10 ký tự", 6, 10) && Valida.CheckPattern(matKhauNV, "tbMatKhau", "(*) In hoa , Thường , số và kí tự đặc biệt", /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{0,}$/);

    //  Ngày Vào Làm ****
    isValid &= Valida.CheckRong(ngayLam, "tbNgay", "(*) vui lòng không bỏ trống") && Valida.CheckPattern(ngayLam, "tbNgay", "(*) định dạng mm/dd/yyyy", /^(0[1-9]|1[0-2])\/(0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/);

    // Lương Căn Bản
    isValid &= Valida.CheckRong(luongCB, "tbLuongCB", "(*) vui lòng không bỏ trống") && Valida.CheckMucLuong(luongCB, "tbLuongCB", 1000000, "(*) mức lương không thấp hơn 1 triệu.", 20000000, "(*) mức lương không cao hơn 20 triệu", "(*) vui lòng nhập số và không có khoảng trắng");

    // Chức Vụ
    isValid &= Valida.KiemTraChucVu("chucvu", "tbChucVu", "(*) vui lòng chọn chức vụ");

    // Giờ Làm
    isValid &= Valida.CheckRong(gioLam, "tbGiolam", "(*) vui lòng không bỏ trống") && Valida.CheckGioLam(gioLam, "tbGiolam", "(*) bạn chưa đủ giờ làm", "(*) quá giờ cho phép, bạn nên nghĩ ngơi ^.^");

    if (isValid) {
        var nhanVien = new NhanVien(taiKhoanNV, hoTenNV, emailNV, matKhauNV, ngayLam, luongCB, chucVuNV, gioLam);
        nhanVien.TinhLuongNV("chucvu");
        nhanVien.LoaiNhanVien();

        return nhanVien;
    }
};
function renderTable(arrValue) {
    var content = "";
    for (var i = 0; i < arrValue.length; i++) {
        var NHANVIEN = arrValue[i]
        if (NHANVIEN) {
            content +=
                `
            <tr>
                <td>${NHANVIEN.TaiKhoan}</td>
                <td>${NHANVIEN.HoTen}</td>
                <td>${NHANVIEN.Email}</td>
                <td>${NHANVIEN.NgayLam}</td>
                <td>${NHANVIEN.ChucVu}</td>
                <td>${NHANVIEN.TongLuong} vnđ </td>
                <td>${NHANVIEN.LoaiNV}</td>
                <td><button class="btn btn-warning" onclick="suaNhanVien(${NHANVIEN.TaiKhoan})">Sửa</button></td>
                <td><button class="btn btn-danger" onclick="xoaNhanVien(${NHANVIEN.TaiKhoan})">Xóa</button></td>
            </tr>
            `;
        }
    }

    DomEle("tableDanhSach").innerHTML = content;
}
function setLocalStore(arrValue) {
    if (arrValue) {
        // convert string
        var datastring = JSON.stringify(arrValue);
        localStorage.setItem("Danh Sách Nhân Viên", datastring);
    }
}
function getLocalStore() {
    if (localStorage.getItem("Danh Sách Nhân Viên")) {
        var dataString = localStorage.getItem("Danh Sách Nhân Viên");
        var dataJson = JSON.parse(dataString);
        danhsachNV.arrDSNV = dataJson;
        renderTable(danhsachNV.arrDSNV);
    }
}
function themNhanVien() {
    var nhanVien = layThongTinNV(true, true);
    // console.log(nhanVien);
    if (nhanVien) {
        danhsachNV.ThemNhanVien(nhanVien);
        renderTable(danhsachNV.arrDSNV);
        setLocalStore(danhsachNV.arrDSNV);
        // dongBangKhiSua();
        // document.getElementsByClassName(".modal-backdrop").style.display.opacity = "none";
    }
}
function xoaNhanVien(TaiKhoan) {
    // console.log(TaiKhoan);
    var dsXoa = danhsachNV.XoaNhanVien(TaiKhoan);
    if (dsXoa.length >= 0) {
        renderTable(dsXoa);
        setLocalStore(dsXoa);
    }
}

function suaNhanVien(TaiKhoan) {
    // console.log(123)
    var nhanVien = danhsachNV.SuaNhanVien(TaiKhoan);
    if (nhanVien) {
        var bangThongBao = DomEle("myModal");
        bangThongBao.classList.add("show");
        bangThongBao.style.display = "block";
        bangThongBao.style.paddingRight = "17px";
        document.body.classList.add("modal-open");
        DomEle("background_show").classList.add("modal-backdrop");
        DomEle("btnThemNV").style.display = "none";
        DomEle("btnCapNhat").style.display = "block";

        DomEle("tknv").value = nhanVien.TaiKhoan;
        DomEle("tknv").disabled = true;
        DomEle("name").value = nhanVien.HoTen;
        DomEle("email").value = nhanVien.Email;
        DomEle("password").value = nhanVien.MatKhau;
        DomEle("datepicker").value = nhanVien.NgayLam;
        DomEle("luongCB").value = nhanVien.LuongCB;
        DomEle("chucvu").value = nhanVien.ChucVu;
        DomEle("gioLam").value = nhanVien.GioLam;
        rsThongBao();
    }
}
//btnCapNhat
function getEmailNV(taiKhoan) {
    for (var i = 0; i < danhsachNV.arrDSNV.length; i++) {
        var nhanVien = danhsachNV.arrDSNV[i];
        if(taiKhoan === nhanVien.TaiKhoan){
            var emailNV = nhanVien.Email;
        }
    }
    return emailNV;
}
function capNhatNhanVien() {
    var taiKhoanNV = DomEle("tknv").value;
    var EmailNV = getEmailNV(taiKhoanNV);
    var inputEmail = DomEle("email").value;
    if (EmailNV === inputEmail) {
        DomEle("tbEmail").style.display = "none"
        var nhanVien = layThongTinNV(false, false);
    } else {
        var nhanVien = layThongTinNV(false, true);
    };

    if (nhanVien) {
        danhsachNV.CapNhatNhanVien(nhanVien);
        renderTable(danhsachNV.arrDSNV);
        setLocalStore(danhsachNV.arrDSNV);
        dongBangKhiSua();
    }
}

function dongBangKhiSua() {
    var bangThongBao = DomEle("myModal");
    bangThongBao.style.display = "none";
    bangThongBao.style.paddingRight = "0";
    document.body.style.overflow = "none";
    document.body.classList.remove("modal-open");
    bangThongBao.classList.remove("show");
    DomEle("background_show").classList.remove("modal-backdrop");

    DomEle("tknv").value = "";
    DomEle("name").value = "";
    DomEle("email").value = "";
    DomEle("password").value = "";
    DomEle("datepicker").value = "";
    DomEle("luongCB").value = "";
    DomEle("chucvu").selectedIndex = 0;
    DomEle("gioLam").value = "";
}
function searchNhanVien() {
    var keyWord = DomEle("searchLoaiNV").value;
    if (keyWord !== "") {
        var DSTK = danhsachNV.TimKiemNhanVien(keyWord);
        renderTable(DSTK);
    } else {
        renderTable(danhsachNV.arrDSNV);
    }
}
DomEle("searchLoaiNV").addEventListener("keyup", searchNhanVien);

var x = true;
function showPassWord() {
    if (x) {
        DomEle("password").type = "text";
        x = false;
    } else {
        DomEle("password").type = "password";
        x = true;
    }
}
{/* <i class="fab fa-ello"></i> */ }