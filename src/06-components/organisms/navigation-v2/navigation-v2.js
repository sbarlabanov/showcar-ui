export default () => {
    document.addEventListener('keydown', e => {
        const keyCode = e.which;
        const header = e.target.closest('header[role=navigation]');
        if (!header) {
            return;
        }
        if(keyCode === 27) {
            // ESCAPE
            e.target.closest('header[role=navigation] nav li.open').classList.remove('open');
        }
    });

    document.addEventListener('click', e => {
        const header = e.target.closest('header[role=navigation]');

        // 1. click outside header closes all the menus
        // 2. click hamburger button opens the main menu
        // 3. click on submenu opens/closes the submenu
        // 4. click on header outside submenus/hamburger button closes all the menus
        // 5. click on a link inside of submenu closes this submenu
        // 6*. click anywhere in the header not listed above -> no actions

        // 1
        if(!header) {
            closeAllOpenedSubmenus();
            return;
        }

        // 2
        const mobileButton = e.target.closest('header[role=navigation] .sc-btn-mobile-menu');
        if (mobileButton) {
            toggleMenu(header, mobileButton);
            return;
        }

        // 3
        const menuOpener = e.target.closest('header[role=navigation] nav li');
        const menuButton = e.target.closest('header[role=navigation] nav li button');
        if (menuOpener && menuButton) {
            toggleSubmenu(menuOpener, menuButton);
            return;
        }

        // 4
        const openedLi = e.target.closest('header[role=navigation] nav li.open');
        if (!openedLi) {
            closeAllOpenedSubmenus();
            return;
        }

        // 5
        const anyLink = e.target.closest('header[role=navigation] nav a');
        if (anyLink) {
            closeAllOpenedSubmenus();
            return;
        }

    });

    const toggleSubmenu = (opener, button) => {
        const isDesktop = window.innerWidth >= 923; // see breakpoint
        const menuItems = [...document.querySelectorAll('header[role=navigation] nav li')]; // return array, not NodeList

        if (isDesktop) {
            menuItems.forEach(item => {
                if (item !== opener) {
                    closeMenu(item);
                }
            });
        }

        button.setAttribute('aria-expanded', true);
        opener.classList.toggle('open');
    };

    const toggleMenu = (header, menuItemOpener) => {
        menuItemOpener.setAttribute('aria-expanded', header.classList.contains('open'));
        header.classList.toggle('open');
    };

    const closeMenu = (menu) => {
        const hasButton = menu.querySelector('button');
        if(hasButton) {
            menu.querySelector('button').setAttribute('aria-expanded', false);
        }
        menu.classList.remove('open');
    };

    const closeAllOpenedSubmenus = () => {
        [...document.querySelectorAll('header[role=navigation] nav li.open')].forEach(openedMenu => closeMenu(openedMenu));
    };
};
