function startQuiz() {
    var fullName = document.getElementById("fullname").value;
    var birthdate = document.getElementById("birthdate").value;
    var studentID = document.getElementById("student-id").value;
    var studentClass = document.getElementById("class").value;

    // Kiểm tra thông tin hợp lệ, nếu hợp lệ, chuyển đến trang thi
    if (fullName && birthdate && studentID && studentClass) {
        // Chuyển hướng đến trang thi
        window.location.href = "quiz.html";
    } else {
        alert("Vui lòng điền đầy đủ thông tin.");
    }
}
