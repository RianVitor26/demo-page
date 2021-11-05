const buttonMobile = document.querySelector('.mobile-menu')
const menuList = document.querySelector('.nav-list')


function toggleMenuMobile() {
    menuList.classList.toggle('active')
}
buttonMobile.addEventListener('click', toggleMenuMobile)

