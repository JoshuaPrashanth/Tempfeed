function showForm(formType) {
    document.getElementById("generalForm").style.display = formType === "general" ? "block" : "none";
    document.getElementById("productForm").style.display = formType === "product" ? "block" : "none";
}

function validateForm(formType) {
    let name = formType === "general" ? document.getElementById("nameGeneral").value : document.getElementById("productName").value;
    let email = formType === "general" ? document.getElementById("emailGeneral").value : document.getElementById("emailProduct").value;
    let message = formType === "general" ? document.getElementById("messageGeneral").value : document.getElementById("messageProduct").value;

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
        alert("Please fill out all fields.");
        return false;
    }

    document.getElementById("successMessage").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("successMessage").classList.add("hidden");
    }, 3000);
    
    return false; // Prevent actual form submission for demo purposes
}
