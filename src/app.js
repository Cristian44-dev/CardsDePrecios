const d = document;
const $dataOfert = d.querySelectorAll('[data-ofert]');
const $dataPopular = d.querySelectorAll('[data-popular]');

d.addEventListener('DOMContentLoaded', e => {
    ofert();
    popular();
    click();
})

function ofert(){
    $dataOfert.forEach(item=> {
        const $span = d.createElement('span');
        const $price = item.querySelector('.card__price');
        $span.textContent = 'Oferta';
        $span.classList.add('special');
        $price.appendChild($span)
    })
}

function popular(){
    $dataPopular.forEach(item=> {
        const $span = d.createElement('span');
        const $price = item.querySelector('.card__price');
        $span.textContent = 'Más popular';
        $span.classList.add('special');
        $price.appendChild($span)
    })
}

function click(){
    d.addEventListener('click', e=> {
        if(e.target.matches('.card__button')){
            const $cardActive = d.querySelector('.card.selec');
            if($cardActive!=null){
                $cardActive.classList.remove('selec')
                $cardActive.querySelectorAll('li img').forEach(item =>{
                    item.src = './assets/logo.svg';
                })
            }
            e.target.parentNode.classList.add('selec');
            e.target.parentNode.querySelectorAll('li img').forEach(item =>{
                item.src = './assets/logo_hover.svg';
            })
        }else{
            const $cardActive = d.querySelector('.card.selec');
            $cardActive!=null ? $cardActive.classList.remove('selec') : "";
            $cardActive.querySelectorAll('li img').forEach(item =>{
                item.src = './assets/logo.svg';
            })
        }
    })
}

