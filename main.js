window.onload = () => {
    const tableBodyElement = document.getElementById("tableBody");
    for (const item of data) {
        tableBodyElement.innerHTML += `<tr><th>${item[0]}</th><td>${item[0].replace(/^&/, "&amp;")}</td><td>${item[1]}</td></tr>`;
    }
};