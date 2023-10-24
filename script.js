const menuItems = document.querySelectorAll('.menu-item');

const messagesNotification = document.querySelectorAll('#messages-notifications');

const messages = document.querySelector('.messages');

const changeActiveItem = () =>{
    menuItems.forEach(item=>{
        item.classList.remove('active');
    })
}


menuItems.forEach(item =>{
    item.addEventListener('click', () =>{
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('notification-popup');
            style.display = 'none';
        } else{
            document.querySelector('notification-popup');
            style.display = 'block';
            document.querySelector('#notifications .notification-count').style.display = 'none'
        }
    })
})

messagesNotification.addEventListener('click',()=>{
    messages.style.boxShadow = '0 0 1rem var(--color-primary)';
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none'
    }, 2000);
})