// Función para personalizar el nombre
function setUserName() {
    const userName = prompt("Ingresa tu nombre para personalizar tu PSP:");
    if (userName && userName.trim() !== "") {
        document.getElementById('custom-name').textContent = userName;
        
        // Guardar en localStorage para recordarlo
        localStorage.setItem('pspUserName', userName);
    } else if (!localStorage.getItem('pspUserName')) {
        document.getElementById('custom-name').textContent = "Usuario";
    }
}

// Actualizar hora actual
function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    document.getElementById('current-time').textContent = timeString;
}

// Cargar nombre guardado si existe
window.onload = function() {
    const savedName = localStorage.getItem('pspUserName');
    if (savedName) {
        document.getElementById('custom-name').textContent = savedName;
    } else {
        setUserName();
    }
    
    // Actualizar hora cada minuto
    updateTime();
    setInterval(updateTime, 60000);
    
    // Efecto de partículas para el fondo
    createParticles();
    
    // Navegación entre menús
    setupMenuNavigation();
};

// Crear efecto de partículas
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = `${Math.random() * 5 + 2}px`;
        particle.style.height = particle.style.width;
        particle.style.backgroundColor = '#0072ce';
        particle.style.borderRadius = '50%';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animation = `float ${Math.random() * 20 + 10}s infinite linear`;
        
        particlesContainer.appendChild(particle);
    }
}

// Configurar navegación del menú
function setupMenuNavigation() {
    const menuItems = document.querySelectorAll('.menu-item');
    const backBtn = document.getElementById('back-btn');
    const selectBtn = document.getElementById('select-btn');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // Remover selección actual
            document.querySelector('.menu-item.selected').classList.remove('selected', 'glow-effect');
            
            // Seleccionar nuevo ítem
            this.classList.add('selected', 'glow-effect');
        });
    });
    
    // Botón de selección
    selectBtn.addEventListener('click', function() {
        const selectedItem = document.querySelector('.menu-item.selected');
        alert(`Has seleccionado: ${selectedItem.querySelector('.menu-label').textContent}`);
    });
    
    // Botón de volver
    backBtn.addEventListener('click', function() {
        alert("Volviendo al menú anterior...");
    });
}

// Permitir cambiar el nombre haciendo clic en él
document.querySelector('.user-name').addEventListener('click', setUserName);