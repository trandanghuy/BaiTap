function CheckDangNhapEmail(){
    var regExp = /^[A-Za-z][\w$.]+@[\w]+\.\w+$/;
    var email = document.getElementById("email").value;
    if (regExp.test(email)) 
        alert('Tên đăng nhập hợp lệ!'); 
      else 
          alert('Tên đăng nhập không hợp lệ!');
  }
    /*regex dưới đây sẽ check xem email có thỏa mãn các điều kiện:
    bắt đầu bằng chữ cái
    phần username của email phải dài hơn 1 ký tự và chỉ được có chữ cái, số, dấu chấm hoặc ký tự $, _
    email phải có @ và có kết thúc là đuôi tên miền (.com, .vn, …)
    Ở đây đuôi tên miền là bất kỳ được tạo thành từ \w+: a-z, A-Z, 0-9 và _
    */
  function CheckDangNhapPass(){
    var regExp = /^[A-Za-z] [0-9]/;
    var password = document.getElementById("password").value;
    if (regExp.test(password)) 
        alert('Mật khẩu hợp lệ!'); 
      else 
          alert('Mật khẩu nhập không hợp lệ!');
  }