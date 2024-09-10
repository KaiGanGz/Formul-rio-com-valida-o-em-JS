document.querySelector('.questionnaire').addEventListener('submit', function (event) {
    event.preventDefault(); // Previne o envio do formulário

    // Seleciona todos os inputs e os elementos de aviso de campo obrigatório
    const inputs = document.querySelectorAll('.input');
    const obrigatorioMsgs = document.querySelectorAll('.campo-obrigatorio');

    let formValido = true;

    // Itera sobre os inputs e valida cada um
    inputs.forEach((input, index) => {
        const valor = input.value.trim(); // Remove espaços em branco no início e no fim
        const msgObrigatorio = obrigatorioMsgs[index];

        if (valor === "") {
            // Se o campo estiver vazio, exibe a mensagem de erro e muda a borda para vermelho
            msgObrigatorio.classList.remove('hidden');
            input.classList.add('preencher');
            input.classList.remove('preenchido');
            formValido = false; // Marca o formulário como inválido
        } else {
            // Se o campo estiver preenchido, esconde a mensagem e muda a borda para verde
            msgObrigatorio.classList.add('hidden');
            input.classList.remove('preencher');
            input.classList.add('preenchido');
        }
    });

    // Se todos os campos estiverem válidos, o formulário pode ser enviado
    if (formValido) {
        // Aqui você pode prosseguir com o envio do formulário, por exemplo:
        // this.submit(); // Caso queira permitir o envio ao servidor
        alert("Formulário enviado com sucesso!"); // Simulação de sucesso
    }
});