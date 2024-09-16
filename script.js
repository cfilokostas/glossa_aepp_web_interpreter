function updateLineNumbers() {
    const code = document.getElementById("code");
    const lineNumbers = document.getElementById("lineNumbers");

    // Υπολογίζουμε τον αριθμό των γραμμών
    const lines = code.value.split('\n').length;
    lineNumbers.innerHTML = Array(lines).fill(0).map((_, i) => i + 1).join('<br>');
}

function syncScroll() {
    const code = document.getElementById("code");
    const lineNumbers = document.getElementById("lineNumbers");
    lineNumbers.scrollTop = code.scrollTop;
}
