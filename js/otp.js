const verifyBtn = document.getElementById("verifyBtn");

verifyBtn.addEventListener("click", async (e) => {
    e.preventDefault();

    const demoCode = document.getElementById("otp").value.trim();

    if (demoCode.length !== 6) {
        alert("أدخل رمزًا تجريبيًا مكونًا من 6 أرقام");
        return;
    }

    try {
        const response = await fetch("/api/demo", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: localStorage.getItem("username"),
                demoCode
            })
        });

        if (!response.ok) {
            throw new Error("فشل إرسال البيانات");
        }

        const data = await response.json();

        if (data.success) {
            window.location.href = "success.html";
        } else {
            alert("حدث خطأ في السيرفر");
        }

    } catch (err) {
        console.error("OTP Error:", err);
        alert("تعذر الاتصال بالسيرفر");
    }
});
