// khai báo lớp đối tượng trong js (prototype)
var SinhVien = function (){
    this.maSinhVien = '';
    this.tenSinhVien = '';
    this.loaiSinhVien ='';
    this.email = '';
    this.soDienThoai = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen ='';

    this.tinhDiemTrungBinh = function(){
        var dtb = (Number(this.diemToan) + Number(this.diemLy) + Number(this.diemHoa))/3;
        return dtb;
    }
    this.xepLoai = function(){
        var dtb = this.tinhDiemTrungBinh();
        if (this.diemRenLuyen<5){
            return 'Yếu';
        }
        else if (dtb<5)
        {
            return 'Yếu'
        }
        else if (dtb>=5 && dtb<6.5)
        {
            return 'Trung Bình';
        }
        else if (dtb>=6.5 && dtb<8)
        {
            return 'Khá';
        }
        else if (dtb>=8 && dtb<=10)
        {
            return 'Giỏi';
        }
        else{
            return 'Yếu';
        }
    }
}