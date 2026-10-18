// Captura o formulário
const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

// Evento de envio
formulario.addEventListener("submit", function (event) {
  // Impede o recarregamento da página
  event.preventDefault();

  // Captura os valores
  const nome = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;
  const idade = document.getElementById("idade").value;
  const curso = document.getElementById("curso").value;

  // Validação simples
  if (nome === "") {
    alert("Digite seu nome!");
    return;
  }

  if (email === "") {
    alert("Digite seu e-mail!");
    return;
  }

  if (senha.length < 6) {
    alert("A senha deve ter pelo menos 6 caracteres!");
    return;
  }

  if (curso === "") {
    alert("Selecione um curso!");
    return;
  }

  // Exibe os dados
  resultado.innerHTML = `
        <h3>Cadastro realizado!</h3>
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Idade:</strong> ${idade}</p>
        <p><strong>Curso:</strong> ${curso}</p>
    `;

  // Mensagem
  alert("Formulário enviado com sucesso!");
});

// Evento do botão LIMPAR
formulario.addEventListener("reset", function () {
  resultado.innerHTML = "";
  alert("Formulário limpo!");
});
