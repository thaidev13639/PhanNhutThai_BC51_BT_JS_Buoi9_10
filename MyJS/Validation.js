function Validation() {
    this.CheckRong = function (value, errorID, mess) {
        if (value.trim().length > 0) {
            DomEle(errorID).style.display = "none";
            return true;
        };
        DomEle(errorID).innerHTML = mess;
        DomEle(errorID).style.display = "block";
        return false;
    };

    this.CheckDoDai = function (value, errorID, mess, min, max) {
        if (min <= value.trim().length && value.trim().length <= max) {
            document.getElementById(errorID).style.display = "none";
            return true;
        };
        document.getElementById(errorID).innerHTML = mess;
        document.getElementById(errorID).style.display = "block";
        return false;
    };
    this.CheckPattern = function (value, errorID, mess, letter) {
        if (value.match(letter)) {
            document.getElementById(errorID).style.display = "none";
            return true;
        };
        document.getElementById(errorID).innerHTML = mess;
        document.getElementById(errorID).style.display = "block";
        return false;
    }
    this.KiemTraChucVu = function (value, errorID, mess) {
        var KhoaHoc = document.getElementById(value) // phải đặt biến gọi ID ở đây thì mới hiểu?
        if (KhoaHoc.selectedIndex !== 0) {
            DomEle(errorID).style.display = "none";
            return true;
        };
        DomEle(errorID).innerHTML = mess;
        DomEle(errorID).style.display = "block";
        return false;
    }
    this.CheckTaiKhoanTonTai = function (value, errorID, mess, arr) {
        // tạo flag 
        var isValid = false;
        if (arr.length === 0) {
            isValid = true;
            return isValid;
        };
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            var NhanVien = arr[i];
            if (NhanVien.TaiKhoan === value) {
                // tìm thấy
                DomEle(errorID).innerHTML = mess;
                DomEle(errorID).style.display = "block";
                isValid = false;
                break;
            } else {
                // không tìm thấy
                DomEle(errorID).style.display = "none";
                isValid = true;
            };
        }
        return isValid;
    }
    this.CheckEmailTonTai = function (value, errorID, mess, arr) {
        // tạo flag 
        var isValid = false;
        if (arr.length === 0) {
            isValid = true;
             return isValid;
        };
        console.log(arr)
        for (var i = 0; i < arr.length; i++) {
            var NhanVien = arr[i];
            if (NhanVien.Email === value) {
                // tìm thấy
                DomEle(errorID).innerHTML = mess;
                DomEle(errorID).style.display = "block";
                isValid = false;
                break;
            } else {
                // không tìm thấy
                DomEle(errorID).style.display = "none";
                isValid = true;
            };
        }
        return isValid;
    }
    this.CheckGioLam = function (value, errorID, messMin, messMax) {
        var gioLam = Number(value)
        if (80 <= gioLam && gioLam <= 200) {
            DomEle(errorID).style.display = "none";
            return true;
        } else if (gioLam < 80) {
            DomEle(errorID).innerHTML = messMin;
            DomEle(errorID).style.display = "block";
            return false;
        } else if (gioLam > 200) {
            DomEle(errorID).innerHTML = messMax;
            DomEle(errorID).style.display = "block";
            return false;
        }
    }
    this.CheckMucLuong = function (value, errorID, min, messMin, max, messMax, messString) {
        var Luong = Number(value);
        if (min <= Luong && Luong <= max) {
            DomEle(errorID).style.display = "none";
            return true;
        } else if (Luong > max) {
            DomEle(errorID).innerHTML = messMax;
            DomEle(errorID).style.display = "block";
            return false;
        } else if (Luong < min) {
            DomEle(errorID).innerHTML = messMin;
            DomEle(errorID).style.display = "block";
            return false;
        }
        DomEle(errorID).innerHTML = messString;
        DomEle(errorID).style.display = "block";
        return false;
    }
    this.CheckTenNhanVien = function (keyword, errorID, mess, arr) {
        var isValid = true;
        for (var i = 0; i < arr.length; i++) {
            var nhanVien = arr[i];
            var keyWordLocal = keyword.toLowerCase();
            var nameLocal = nhanVien.HoTen.toLowerCase();
            var lengthName = nameLocal.indexOf(keyWordLocal);
            console.log(lengthName)
            if (nameLocal.indexOf(keyWordLocal) !== -1 ) {
                // tìm thấy
                DomEle(errorID).innerHTML = mess;
                DomEle(errorID).style.display = "block";
                isValid = false;
                break;
            } else {
                //không tìm thấy
                DomEle(errorID).style.display = "none";
                isValid = true;
            }
        }
        return isValid;
    }
}