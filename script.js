// Definindo credenciais com URLs de redirecionamento específicas
const validCredentials = [
    { name: "Natalia", contact: "863913234", redirectUrl: "principal2.html" },
    { name: "Jalane", contact: "852574127", redirectUrl: "principal2.html" },
    { name: "Cacilda", contact: "879841434", redirectUrl: "principal2.html" },
    { name: "Genesis", contact: "823741592", redirectUrl: "principal2.html" }
];

// Função de login
document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário

    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value;

    // Verificar se as credenciais são válidas
    const user = validCredentials.find(u => u.name === name && u.contact === contact);

    if (user) {
        // Redirecionar para a página específica do usuário
        window.location.href = user.redirectUrl;
    } else {
        // Exibir mensagem de erro se as credenciais forem inválidas
        document.getElementById("errorMsg").innerText = "Credenciais inválidas!";
    }
});
;
