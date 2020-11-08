// Định nghĩa sự kiện click khi người dùng bấm nút xác nhận
var mangSinhVien = [];
document.querySelector('#btnXacNhan').onclick = function () {
    // tạo ra đối tượng sinh viên chứa thông tin người dùng nhập vào
    var sv = new SinhVien();
    sv.maSinhVien = document.querySelector('#maSinhVien').value;
    sv.tenSinhVien = document.querySelector('#tenSinhVien').value;
    sv.loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    sv.email = document.querySelector('#email').value;
    sv.soDienThoai = document.querySelector('#soDienThoai').value;
    sv.diemToan = document.querySelector('#diemToan').value;
    sv.diemLy = document.querySelector('#diemLy').value;
    sv.diemHoa = document.querySelector('#diemHoa').value;
    sv.diemRenLuyen = document.querySelector('#diemRenLuyen').value;



    // console.log(sv);

    //Thêm 1 sinh viên vào mảng
    mangSinhVien.push(sv);

    
    renderTable(mangSinhVien);
}

var renderTable = function (arrSV) {
    // Từ mảng sv tạo ra 1 chuỗi html nhiều thẻ tr dựa vào vòng lặp
    var noiDungTable = '';
    for (var index = 0; index < arrSV.length; index++) {
        var sv = arrSV[index];
        //Tạo ra 1 chuỗi tr cộng dồn vào nd
        noiDungTable += `
            <tr>
                <td>${sv.maSinhVien}</td>
                <td>${sv.tenSinhVien}</td>
                <td>${sv.loaiSinhVien}</td>
                <td>${sv.email}</td>
                <td>${sv.soDienThoai}</td>
                <td>${sv.tinhDiemTrungBinh()}</td>
                <td>${sv.xepLoai()}</td>
                <td><button class="btn btn-danger">Xóa</button></td>
            </tr>   `
            
    }
    console.log(noiDungTable);
    document.querySelector('#tableSinhVien').innerHTML = noiDungTable;
}
