// JavaScript logic for Mobile version of Núi Rùa Bắc Hà Coffee website

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const menuCloseBtn = document.getElementById('menu-close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuLinks = document.querySelectorAll('.menu-link');
    const addToCartBtns = document.querySelectorAll('.add-to-cart');
    const cartCount = document.querySelector('.cart-count');
    const newsletterForm = document.getElementById('newsletter-form-mobile');

    // 1. Drawer Menu Controls
    if (menuBtn && mobileMenu) {
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('open');
        });
    }

    if (menuCloseBtn && mobileMenu) {
        menuCloseBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
        });
    }

    // Close menu when a link is clicked
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('open');
            
            // Set active state on drawer links
            menuLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // 2. Shopping Cart Demo Increment
    let cartItemCount = 0;
    addToCartBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const productName = btn.getAttribute('data-name');
            cartItemCount++;
            if (cartCount) {
                cartCount.textContent = cartItemCount;
                // Add a small scale animation to count badge
                cartCount.style.transform = 'scale(1.3)';
                setTimeout(() => {
                    cartCount.style.transform = 'scale(1)';
                }, 200);
            }
            alert(`Đã thêm "${productName}" vào giỏ hàng thành công!`);
        });
    });

    // 3. Newsletter Submission Mobile
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = newsletterForm.querySelector('input[type="email"]');
            alert(`Đăng ký nhận tin thành công! Chúng tôi sẽ gửi thông tin ưu đãi mới nhất đến: ${emailInput.value}`);
            emailInput.value = '';
        });
    }
});
