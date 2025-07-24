document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".item");
  const nextBtn = document.getElementById("next");
  const prevBtn = document.getElementById("prev");
  const body = document.body;

  let current = 0;
  let isAnimating = false;

  // Resetar elementos para estado inicial
  function resetElements(item) {
    gsap.set(item.querySelectorAll(".title, .fruit, .refri"), {
      opacity: 0,
      y: 50,
      scale: 0.8
    });
  }

  // Animação de entrada
  function animateIn(item) {
    const tl = gsap.timeline({
      defaults: { duration: 0.8, ease: "power2.out" }
    });

    tl.to(item.querySelector(".title"), {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: 0.1
    })
    .to(item.querySelector(".fruit"), {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.7,
      ease: "back.out(1.4)"
    }, "-=0.3")
    .to(item.querySelector(".refri"), {
      opacity: 1,
      y: 0,
      scale: 1,
      duration: 0.8,
      ease: "elastic.out(1, 0.3)"
    }, "-=0.4");

    return tl;
  }

  // Função principal para trocar os slides
  function showItem(index) {
    if (isAnimating || index === current) return;

    isAnimating = true;
    const previousIndex = current;
    current = index;

    const currentItem = items[previousIndex];
    const nextItem = items[index];

    // Animar saída do item atual
    gsap.to(currentItem, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        currentItem.classList.remove("active");
      }
    });

    // Preparar próximo item
    nextItem.classList.add("active");
    gsap.set(nextItem, { opacity: 0 });
    resetElements(nextItem);

    // Mudar background
    const newBackground = getComputedStyle(nextItem).getPropertyValue("--background");
    gsap.to(body, {
      backgroundColor: newBackground,
      duration: 0.4,
      ease: "power1.out"
    });

    // Animar entrada do próximo item
    gsap.to(nextItem, {
      opacity: 1,
      duration: 0.3,
      delay: 0.2,
      onComplete: () => {
        animateIn(nextItem);
        isAnimating = false;
      }
    });
  }

  // Event Listeners para os botões
  nextBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const nextIndex = (current + 1) % items.length;
    showItem(nextIndex);
  });

  prevBtn.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopPropagation();
    const prevIndex = (current - 1 + items.length) % items.length;
    showItem(prevIndex);
  });

  // Event Listener para teclas de seta
  document.addEventListener("keydown", (e) => {
    if (isAnimating) return;

    if (e.key === "ArrowRight") {
      const nextIndex = (current + 1) % items.length;
      showItem(nextIndex);
    } else if (e.key === "ArrowLeft") {
      const prevIndex = (current - 1 + items.length) % items.length;
      showItem(prevIndex);
    }
  });

  // Event Listener para a roda do mouse
  let wheelTimeout;
  let isScrolling = false;

  window.addEventListener("wheel", (e) => {
    if (isAnimating || isScrolling) return;

    isScrolling = true;
    setTimeout(() => {
      isScrolling = false;
    }, 150);

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = (current + direction + items.length) % items.length;
    showItem(nextIndex);
  });

  // Inicialização
  function init() {
    const initialBackground = getComputedStyle(items[current]).getPropertyValue("--background");
    body.style.backgroundColor = initialBackground;
    items[current].classList.add("active");
    gsap.set(items[current], { opacity: 1 });
    resetElements(items[current]);

    // Animação inicial com pequeno delay
    setTimeout(() => {
      animateIn(items[current]);
    }, 100);
  }

  init();
});
