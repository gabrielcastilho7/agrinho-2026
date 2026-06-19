// Espera todo o HTML carregar antes de rodar o script
document.addEventListener('DOMContentLoaded', () => {
    
    const curiosidades = [
        "Você sabia? Mais de 70% dos alimentos que chegam à mesa dos brasileiros vêm da agricultura familiar.",
        "A tecnologia 5G e os drones estão revolucionando o campo, permitindo colheitas mais precisas e com menos desperdício.",
        "Muitas cidades estão adotando hortas urbanas e telhados verdes, trazendo um pedacinho do campo para o meio do concreto.",
        "O lixo orgânico produzido na cidade pode ser transformado em adubo (compostagem) e voltar para o campo para fertilizar novas plantações.",
        "Aplicativos de celular criados na cidade ajudam pequenos agricultores a venderem seus produtos diretamente para os consumidores, eliminando intermediários."
    ];

    // Selecionando os elementos do HTML
    const botao = document.getElementById('btn-curiosidade');
    const textoCuriosidade = document.getElementById('texto-curiosidade');

    // Verificação extra de segurança para ver se os elementos existem
    if (botao && textoCuriosidade) {
        botao.addEventListener('click', () => {
            const numeroSorteado = Math.floor(Math.random() * curiosidades.length);
            textoCuriosidade.textContent = `💡 "${curiosidades[numeroSorteado]}"`;
        });
    } else {
        console.error("Erro: O botão ou o local do texto não foram encontrados no HTML.");
    }
});