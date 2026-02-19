
    const img = document.querySelector('.tyler2-img');

    window.addEventListener('load', () => {
      setTimeout(() => {
        img.classList.add('hidden');
      }, 300);
    });

    function showImage() {
      img.classList.remove('hidden');
      img.classList.add('visible');

      setTimeout(() => {
        img.classList.remove('visible');
        img.classList.add('hidden');
      }, 300);
    }

    function startLoop() {
      const delay = Math.random() * (60000 - 10000) + 20000;

      setTimeout(() => {
        showImage();
        startLoop();
      }, delay);
    }

    startLoop();

    const burger = document.querySelector('.burger');
    const menu = document.querySelector('#menu');
    const body = document.body;

    function toggleMenu() {
      burger.classList.toggle('active');
      menu.classList.toggle('active');
      body.classList.toggle('menu-open');
    }

    burger.addEventListener('click', toggleMenu);

    document.querySelectorAll('.header_menu a').forEach(link => {
      link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
          toggleMenu();
        }
      });
    });

    document.addEventListener('click', e => {
      if (menu.classList.contains('active') &&
        !menu.contains(e.target) &&
        !burger.contains(e.target)) {
        toggleMenu();
      }
    });