document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.getElementById('form-contato');

    formulario.addEventListener('submit', (event) => {
        event.preventDefault();

        const nome = document.getElementById('nome').value;
        const botao = formulario.querySelector('.btn-enviar');
        const textoOriginal = botao.innerHTML;

        botao.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Enviando...';
        botao.style.opacity = '0.8';

        setTimeout(() => {
            alert(`Obrigado pelo contato, ${nome}! Sua mensagem foi enviada com sucesso.`);
            formulario.reset();
            botao.innerHTML = textoOriginal;
            botao.style.opacity = '1';
        }, 1000);
    });
});