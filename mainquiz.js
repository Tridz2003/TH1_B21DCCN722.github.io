var questions1 = [
    {
        question: "Câu hỏi 1:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 2:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 3:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 4:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 5:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 6:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 7:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 8:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 9:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 10:",
        type: "radio",
        answers: ["Đúng", "Sai"],
        correctAnswer: "Đúng"
    },
    {
        question: "Câu hỏi 11:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 12:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 13:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 14:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 15:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 16:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 17:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 18:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 19:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 20:",
        type: "radio",
        answers: ["A", "B", "C", "D"],
        correctAnswer: "C"
    },
    {
        question: "Câu hỏi 21:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 22:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 23:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 24:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 25:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 26:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 27:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 28:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 29:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 30:",
        type: "checkbox",
        answers: ["A", "B", "C", "D"],
        correctAnswer: ["A", "C"]
    },
    {
        question: "Câu hỏi 31 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 32 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 33 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 34 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 35 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 36 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 37 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 38 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 39 (nhập từ bàn phím):",
        type : "text"
    },
    {
        question: "Câu hỏi 40 (nhập từ bàn phím):",
        type : "text"
    },
];

function addQuestionsToForm() {
    var quizForm = document.getElementById("quiz-form");

    questions1.forEach(function(question, index) {
        var questionElement = document.createElement("div");
        questionElement.innerHTML = `
            <h2>${question.question}</h2>
            ${question.type === "radio" || question.type === "checkbox" ? `
            <ul>
                ${question.answers.map(function(answer, ansIndex) {
                    return `
                        <li>
                            <input type="${question.type}" name="question${index + 1}" value="${answer}" id="question${index + 1}_${ansIndex + 1}">
                            <label for="question${index + 1}_${ansIndex + 1}">${answer}</label>
                        </li>
                    `;
                }).join("")}
            </ul>` : `
            <input type="${question.type}" name="question${index + 1}" placeholder="Nhập câu trả lời...">`
            }
        `;
        quizForm.appendChild(questionElement);
    });
}


// Gọi hàm để thêm câu hỏi vào form khi trang được tải
window.onload = addQuestionsToForm;

// Hàm xử lý việc nộp bài
function submitQuiz() {
    var score = 0;
    var userAnswers = [];

    // Lấy câu trả lời của người dùng từ form
    for (var i = 0; i < 30; i++) { // Chỉ kiểm tra đáp án 30 câu đầu
        var questionId = "question" + (i + 1);
        var selectedAnswers = document.querySelectorAll('input[name="' + questionId + '"]:checked');
        if (selectedAnswers.length > 0) {
            var selectedValues = Array.from(selectedAnswers).map(function(answer) {
                return answer.value;
            });
            userAnswers.push(selectedValues);

            // Kiểm tra câu trả lời
            if (arraysEqual(selectedValues, questions[i].correctAnswer)) {
                score++;
            }
        } else {
            userAnswers.push(null);
        }
    }

    // Hiển thị điểm số
    alert("Bạn đã trả lời đúng " + score + " câu trong tổng số 30 câu.");
    console.log("Câu trả lời của bạn:", userAnswers);
}

// Hàm kiểm tra hai mảng có bằng nhau không
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (var i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}