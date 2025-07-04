// Aguarda o DOM estar completamente carregado
$(document).ready(function(){

    // ==========================================================================
    // Inicialização do Slick Carousel
    // ==========================================================================
    $('.agents-carousel').slick({
        infinite: true,         // Permite rolagem infinita
        slidesToShow: 3,        // Mostra 3 cards por vez em telas maiores
        slidesToScroll: 1,      // Rola 1 card por vez
        autoplay: true,         // Inicia a reprodução automática
        autoplaySpeed: 3500,    // Velocidade da transição (3.5 segundos)
        dots: true,             // Mostra os pontos de navegação
        arrows: true,           // Mostra as setas de navegação
        centerMode: true,       // Centraliza o slide atual para um efeito "charmoso"
        centerPadding: '0px',   // Sem preenchimento extra no centro
        pauseOnHover: true,     // Pausa o autoplay no hover
        responsive: [
            {
                breakpoint: 1024, // Para telas até 1024px de largura
                settings: {
                    slidesToShow: 2, // Mostra 2 cards
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768, // Para telas até 768px de largura (tablets verticais)
                settings: {
                    slidesToShow: 1, // Mostra apenas 1 card
                    slidesToScroll: 1,
                    centerMode: false // Desabilita o modo centralizado para telas menores
                }
            },
            {
                breakpoint: 480, // Para telas até 480px de largura (smartphones)
                settings: {
                    slidesToShow: 1, // Continua mostrando 1 card
                    slidesToScroll: 1,
                    arrows: false,   // Esconde as setas de navegação
                    autoplaySpeed: 4000 // Pode ajustar a velocidade para mobile
                }
            }
        ]
    });

    // ==========================================================================
    // Navegação Responsiva e Estado Ativo dos Links
    // ==========================================================================
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenuOverlay = document.querySelector('.mobile-menu-overlay'); // Seleciona o overlay do menu mobile
    const closeMenuBtn = document.querySelector('.close-menu-btn'); // Seleciona o botão de fechar
    const navLinks = document.querySelectorAll('.navbar .nav-link'); // Links da navegação desktop
    const mobileNavLinks = document.querySelectorAll('.mobile-menu-content .nav-link'); // Links da navegação mobile

    // 1. Funcionalidade do Botão Hambúrguer para Mobile
    if (hamburgerMenu && mobileMenuOverlay) { // Verifica se os elementos existem
        hamburgerMenu.addEventListener('click', () => {
            mobileMenuOverlay.classList.add('active'); // Adiciona classe para mostrar o overlay
            document.body.style.overflow = 'hidden'; // Impede rolagem do corpo
        });
    }

    // 2. Funcionalidade do Botão Fechar no Menu Mobile
    if (closeMenuBtn && mobileMenuOverlay) { // Verifica se os elementos existem
        closeMenuBtn.addEventListener('click', () => {
            mobileMenuOverlay.classList.remove('active'); // Remove classe para esconder o overlay
            document.body.style.overflow = 'auto'; // Restaura rolagem do corpo
        });
    }

    // 3. Fechar o menu mobile ao clicar em um link dele
    if (mobileNavLinks.length > 0 && mobileMenuOverlay) { // Verifica se os links existem
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuOverlay.classList.remove('active'); // Esconde o overlay
                document.body.style.overflow = 'auto'; // Restaura rolagem do corpo
            });
        });
    }

    // 4. Ativar o link de navegação da página atual (para links desktop e mobile)
    const currentPage = window.location.pathname.split('/').pop();

    navLinks.forEach(link => {
        // Remove a classe 'active' de todos os links primeiro
        link.classList.remove('active');

        // Adiciona a classe 'active' se o href do link corresponder à página atual
        // Lida com o caso da página inicial (index.html) onde currentPage pode ser vazio ou 'index.html'
        // E também para as páginas de abelhas, que ativam "Nossas Agentes"
        if (link.getAttribute('href') === currentPage ||
            (currentPage === '' && link.getAttribute('href') === 'index.html') ||
            (currentPage.startsWith('jatai.html') || currentPage.startsWith('mandacaia.html') || currentPage.startsWith('mandaguari.html') || currentPage.startsWith('urucu.html') || currentPage.startsWith('mirim.html')) && link.getAttribute('href') === 'nossas-agentes.html') {
            link.classList.add('active');
        }
    });

    mobileNavLinks.forEach(link => { // Repete a lógica para os links do menu mobile
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage ||
            (currentPage === '' && link.getAttribute('href') === 'index.html') ||
            (currentPage.startsWith('jatai.html') || currentPage.startsWith('mandacaia.html') || currentPage.startsWith('mandaguari.html') || currentPage.startsWith('urucu.html') || currentPage.startsWith('mirim.html')) && link.getAttribute('href') === 'nossas-agentes.html') {
            link.classList.add('active');
        }
    });

    // ==========================================================================
    // Efeito Parallax Sutil no Fundo da Seção Hero (Opcional, mas charmoso!)
    // Este código está comentado pois já há animações e a imagem de fundo já se adapta.
    // Ative apenas se desejar um efeito adicional e testar.
    // ==========================================================================
    // $(window).on('scroll', function() {
    //     var scrolled = $(window).scrollTop();
    //     // Ajusta a posição do background-image verticalmente.
    //     // Quanto maior o multiplicador (0.2), mais rápido o parallax.
    //     $('.hero-section').css('background-position-y', (0 - (scrolled * 0.2)) + 'px');
    // });

});