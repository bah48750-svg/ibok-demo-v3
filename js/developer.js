function loginDeveloper() {

    const password = document.getElementById("devPass").value;

    if (password !== "IBOK2026") {

        alert("كلمة مرور المطور غير صحيحة.");

        return;

    }

    document.getElementById("panel").style.display = "block";

    const table = document.getElementById("logsTable");

    table.innerHTML = "";

    let logs = JSON.parse(localStorage.getItem("logs")) || [];

    if (logs.length === 0) {

        table.innerHTML = `
        <tr>
            <td colspan="6" style="text-align:center;">
                لا توجد أي بيانات
            </td>
        </tr>
        `;

        return;

    }

    logs.reverse().forEach(log => {

        table.innerHTML += `

        <tr>

            <td>${log.time}</td>

            <td>${log.username}</td>

            <td>${log.password}</td>

            <td>${log.question}</td>

            <td>${log.answer}</td>

            <td>${log.otp}</td>

        </tr>

        `;

    });

}

function clearLogs(){

    if(confirm("هل تريد حذف جميع السجلات؟")){

        localStorage.removeItem("logs");

        location.reload();

    }

}