function LopNhanVien() {
    this.arrDSNV = [];

    this.ThemNhanVien = function (nv) {
        this.arrDSNV.push(nv);
    };

    this.TimViTri = function (vlTaiKhoanNV) {
        var index = -1;
        for (var i = 0; i < this.arrDSNV.length; i++) {
            var NV = this.arrDSNV[i];
            if (NV.TaiKhoan == vlTaiKhoanNV) {
                var index = i;
            }
        }
        return index;
    };
    this.XoaNhanVien = function (vlTaiKhoanNV) {
        var index = this.TimViTri(vlTaiKhoanNV);
        if (index !== -1) {
            this.arrDSNV.splice(index, 1);
        }
        return this.arrDSNV;
    }
    this.SuaNhanVien = function (vlTaiKhoan) {
        var index = this.TimViTri(vlTaiKhoan);
        if (index !== -1) {
            var NhanVien = this.arrDSNV[index];
        }
        return NhanVien;
    };
    this.CapNhatNhanVien = function (nhanVien) {
        for (var i = 0; i < this.arrDSNV.length; i++) {
            var NV = this.arrDSNV[i];
            if (nhanVien.TaiKhoan === NV.TaiKhoan) {
                this.arrDSNV[i] = nhanVien;
            }
        }
        return this.arrDSNV;
    };
    this.RemoveVietNamese = function (str) {
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
        str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
        str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
        str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
        str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
        str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
        str = str.replace(/Đ/g, "D");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        // Một vài bộ encode coi các dấu mũ, dấu chữ như một kí tự riêng biệt nên thêm hai dòng này
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // ̀ ́ ̃ ̉ ̣  huyền, sắc, ngã, hỏi, nặng
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // ˆ ̆ ̛  Â, Ê, Ă, Ơ, Ư
        // Remove extra spaces
        // Bỏ các khoảng trắng liền nhau
        str = str.replace(/\s/g, '');
        str = str.trim();
        // Remove punctuations
        // Bỏ dấu câu, kí tự đặc biệt
        str = str.replace(
            /!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'|\"|\&|\#|\[|\]|~|\$|_|`|-|{|}|\||\\/g,
            " "
        );
        return str.trim().toLowerCase();
    }
    this.TimKiemNhanVien = function (keyword) {
        var arrDSTK = [];
        for (var i = 0; i < this.arrDSNV.length; i++) {
            var NV = this.arrDSNV[i];
            var keyWordLocal = keyword.trim().toLowerCase();
            keyWordLocal = this.RemoveVietNamese(keyWordLocal);
            var LoaiNVLocal = NV.LoaiNV.trim().toLowerCase();
            LoaiNVLocal = this.RemoveVietNamese(LoaiNVLocal);
            if (LoaiNVLocal.indexOf(keyWordLocal) !== -1) {
                arrDSTK.push(NV);
            }
        }
        return arrDSTK;
    }

}