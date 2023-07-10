/**
 * +Tài khoản
 +Họ tên
 +Email
 +Mật khẩu
 +Ngày làm
 +Lương cơ bản
 +Chức vụ gồm: Giám đốc, Trưởng Phòng, Nhân Viên
 +Giờ làm trong tháng
 +Tổng lương
 +Loại nhân viên
 */

function NhanVien(
    vlTaiKhoan, vlHoTen, vlEmail, vlMKhau, vlNgayLam, vlLuongCB, vlChucVu, vlGioLam
) {

    this.TaiKhoan = vlTaiKhoan;
    this.HoTen = vlHoTen;
    this.Email = vlEmail;
    this.MatKhau = vlMKhau;
    this.NgayLam = vlNgayLam;
    this.LuongCB = Number(vlLuongCB);
    this.ChucVu = vlChucVu;
    this.GioLam = vlGioLam;
    this.TongLuong = 0;
    this.LoaiNV = "";

    /**
     * 5. Xây dựng phương thức tính tổng lương cho đối tượng nhân viên
        +nếu chức vụ là giám đốc: tổng lương = lương cơ bản * 3
        +nếu chức vụ là trưởng phòng: tổng lương = lương cơ bản * 2
        +nếu chức vụ là nhân viên: tổng lương = lương cơ bản *
     */
    this.TinhLuongNV = function (id) {
        var numFormat = new Intl.NumberFormat("VN-vn");
        var slcChucVu = document.getElementById(id);
        if (slcChucVu.selectedIndex === 1) {
            // giám đốc 
            this.TongLuong = this.LuongCB * 3;
        } else if (slcChucVu.selectedIndex === 2) {
            // Trưởng phòng
            this.TongLuong = this.LuongCB * 2;
        } else if (slcChucVu.selectedIndex === 3) {
            // Nhân Viên
            this.TongLuong = this.LuongCB;
        }
        this.TongLuong = numFormat.format(this.TongLuong);
        return this.TongLuong;
    }

    /**
     * 6. Xây dựng phương thức xếp loại cho đối tượng nhân viên:
        +nếu nhân viên có giờ làm trên 192h (>=192): nhân viên xuất sắc
        +nếu nhân viên có giờ làm trên 176h (>=176): nhân viên giỏi
        +nếu nhân viên có giờ làm trên 160h (>=160): nhân viên khá
        +nếu nhân viên có giờ làm dưới 160h: nhân viên trung bình
    */

    this.LoaiNhanVien = function () {
        if (Number(this.GioLam) >= 192) {
            this.LoaiNV = "Nhân Viên Xuất Sắc";
        } else if (Number(this.GioLam) >= 176) {
            this.LoaiNV = "Nhân Viên Giỏi";
        } else if (Number(this.GioLam) >= 160) {
            this.LoaiNV = "Nhân Viên Khá";
        } else if (Number(this.GioLam) < 160) {
            this.LoaiNV = "Nhân Viên Trung Bình";
        }
        return this.LoaiNV;
    }

};