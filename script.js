// Controle do meu menu
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click',() => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('open');

    // bloquear o scroll quando o menu estiver aberto
    document.body.style.overflow = navList.classList.contains('open')?
    'hidden': 'auto';
});
//fechar menu ao clicar nos links
document.querySelectorALL('.navlist a').forEach(link => {
    link.addEventListener('clink', () => {
        menuIcon.classList.remove ('bx-x');
        vanList.classList.remove('open');
        document.body.style.overflow = 'auto';
    });
});

//fechar ao rolar a pagina
window.addEventListener('scroll', () => {
    if(navList.classList.contains('open')){
        menuIcon.classList.remove('bx-x');
        navList.classList.remove('open');
        document.body.style.overflow = 'auto';
    }
});
 // === navegação ativa ===
 // seleciona todos os links de navegação
 const vanLinks = document.querySelectorAll('.navlist a');

 //função para adcionar a classe 'active' no link clicado
 function activeLink(){
    navlinks.forEach(item => item.classList.remove('active'));
    this.classList.add('active');
 }

 //adiciona um evento de clique no link de navegação
 navlinks.forEach(item => item.addEventListener('click', activeLink));
 
 // função para alterar entre os temas
 function toggleMode (){
    const html = document.documentElement;
    html.classList.toggle('light');

    // salva o tema escolhido no LocalStorage
    const mode = html.classList.contains('light') ? 'light' : 'dark';
    localStorage.setItem('theme', mode);

    // Alterar aparencia do titulo
    updateTextColor();
 }
 //fuñção que altera a cor do texto de acordo com o tema
 function updateTextColor(){
    currentColor = document.documentElementClassList.contains('light')
    // 'black : #fff;
    titleElement.style.color = currentColor;
 }

 // carrega o tema salvo nolocal storage ao carregar a pagina
 const savedTheme = localStorage.getItem('theme');
if (savedTheme){
    document.documentElement.classList.toggle('light', savedTheme === ' light')
}

// selecions o elemento 'titulo' e define as variaveis para animação


// funçao para animar o titulo( digitando e apagando)
// funçao texto animado
// animação do título principal
const titleElement = document.querySelector('#name');
const text = "Danielli";  // Nome a ser animado
let index = 0;
let isTyping = true;

// Cor atual
let currentColor = document.documentElement.classList.contains('light') ? 'black' : '#fff';

// função para animar o título (digitando e apagando)
function animateText() {
    if (isTyping) {
        if (index < text.length) {  
            titleElement.textContent = text.slice(0, index + 1);
            index++;
        } else {
            isTyping = false;
        }
    } else {
        if (index > 0) {
            titleElement.textContent = text.slice(0, index - 1);
            index--;
        } else {
            isTyping = true;
            // Alterna a cor entre preto (ou branco) e laranja
            currentColor = (currentColor === (document.documentElement.classList.contains('light') ? 'black' : '#fff')) ? '#c94c16' : (document.documentElement.classList.contains('light') ? 'black' : '#fff');
            titleElement.style.color = currentColor;
        }
    }
    setTimeout(animateText, 300);  // Intervalo de animação
}

// inicia a animação quando carregar a página
document.addEventListener('DOMContentLoaded', animateText);
// inicia a animação quando carregar a página
document.addEventListener('DOMContentLoaded', animateText);
updateTextColor();

// ================= ANIMAÇÃO DA SEÇÃO HOME 
// Seleciona a seção home e aplica uma animação de fade-in
const homeSection = document.querySelector('#home');
homeSection.style.opacity = '0';
homeSection.style.transform = 'translateY(200px)';
homeSection.style.transition = 'opacity 1s ease, transform 1s ease';

setTimeout(() => {
  homeSection.style.opacity = '1';
  homeSection.style.transform = 'translateY(0)';
}, 100);


// ================= ANIMAÇÃO DAS SEÇÕES ======= 
// Seleciona todas as seções e aplica animações de entrada 
const sections = document.querySelectorAll('section'); 
sections.forEach((section, index) => { 
section.style.opacity= '0'; 
section.style.transition = 'opacity 1s, transform 1s'; 
// Aplica diferentes transformações com base no índice da seção 
if (index !== 0) { 
if (index === 1) section.style.transform = 'translateY(100px)'; 
else if (index === 2) section.style.transform = 'scale(0.8)'; 
else if (index === 3) section.style.transform = 'rotateY(90deg)'; 
} 
});

// Obsevar para ananimar as seções ao rolar a pagina
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting){
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'none';
        }
    });
});

// Observa cada seção para aplicar a animação 
sections.forEach((section) => observer.observe(section));

// BOTÃO DE VOLTAR AO TOPO
// Adiciona um evento de clique ao botão de voltar ao topo
document.querySelector('.top a').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' }); // rola suavemente para o topo da página 
});

// CARROSSEL DE PROJETOS
// Seleciona os elementos do carrossel
const carouselSlides = document.querySelector('.carousel-slides');
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.querySelector('.carousel-button.prev');
const nextButton = document.querySelector('.carousel-button.next');
let currentSlide = 0;
let autoSlideInterval;

//  Função de exibir o slide atual
function showSlide(slideIndex) {
    slides.forEach(slide => {
        slide.classList.remove('active');
        slide.style.display = 'none';
    });

    // Ajusta o índice do slide para garantir que ele esteja dentro dos limites
    if (slideIndex < 0) currentSlide = slide.length - 1;
    else if (slideIndex >= slides.length) currentSlide = 0;
    else currentSlide = slideIndex;
    
    // Exibe o slide atual
    slides[currentSlide].classList.add('active');
    slides[currentSlide].style.display = 'flex';
    updateSlidePosition();
}

// Função para atualizar a posição do carrossel
function updateSlidePosition(){
    const slideWidth = slides[0].offsetWidth;
    carouselSlides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

// Função para avançar para o próximo slide
function nextSlide(){
    showSlide(currentSlide + 1);
    resetAutoSlide(); // Reinicia o intervalo de transição automática
} 

// Função para voltar para o slide anterior
function prevSlide(){
    showSlide(currentSlide - 1);
    resetAutoSlide(); // Reinicia o intervalo de transição automática
} 

// Função para iniciar a transição automática dos slides
function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000); //avança o slide a cada 5 seg
}

// Função para reiniciar a transição automática
function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

// Adiciona eventos de clique aos botões de navegação do carrossel
nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

//  Inicializa o carrossel ao carregar a página 
window.addEventListener('load', () => {
    showSlide(currentSlide);
    startAutoSlide();

    // Atualiza a posição do carrossel ao redimensionar a janela
    window.addEventListener('resize', () => {
        updateSlidePosition();
    });
});

// Pausa a transição automática ao passar o mouse sobre o carrossel
carouselSlides.parentElement.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Retoma a transição automática ao remover o mouse do carrossel
carouselSlides.parentElement.addEventListener('mouseleave', startAutoSlide);

// FORMULÁRIO DE CONTATO
// Seleciona o formulário de contato e a mensagem de agradecimento 
const contactForm = document.getElementById('contactForm');
const thankYouMessage = document.getElementById('thankYouMessage');

// Adiciona um evento de envio ao formulário
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    thankYouMessage.style.display = 'block'; //Exibe a mensagem de agradecimento

    // Envia os dados do formulário usando Fetch API
    const formData = new FormData(contactForm);
    fetch(contactForm.ariaDescription, {
        method: 'POST',
        body: formData,
        headers: { 'Accept': 'application/json' }
    })
    .then(response => {
        if (response.ok){
            setTimeout(() => window.location.reload(), 2000); // Recarrega a página após 2 seg
        } else {
            alert('Erro ao enviar formulário. Tente novamente.');
        }
    })
    .catch(() => alert('Erro na conexão. Tente novamente'));
});


// ANIMAÇÃO DA SEÇÃO 'SOBRE MIM'
// Seleciona a seção 'Sobre mim'

const aboutSection = document.querySelector('.about');

// Função para verificar se a seção está visivel na tela
function checkAboutVisibility() {
    const rect = aboutSection.getBoundingClientRect();
    const windowHeight = window.innerHeight || document.documentElement.clientHeight;

    // Verifica se a seção está dentro da área visível da tela
    if (rect.top <= windowHeight * 0.75 && rect.bottom >= 0) {
        aboutSection.classList.add('visible'); // Adiciona a classe "visible"
        window,removeEventListener('scroll', checkAboutVisibility); // Remove o listener após a animação
    }
}

//  Adiciona um listener para o evento de scroll
window.addEventListener('scroll', checkAboutVisibility);

// Verifica a visibilidade ao carregar a página (caso a seção já esteja visível)
checkAboutVisibility(); 