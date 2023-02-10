const workItems = document.querySelectorAll('.grid__item');
const workItemsCount = workItems.length;
let currentIndex = 0;
const closeButton = document.querySelector('#close-button');
const prevButton = document.querySelector('#prev-button');
const nextButton = document.querySelector('#next-button');
const openCloseButton = document.querySelector('#openClose-button');
const menuMobileItems = document.querySelector('#menu-mobile__list');

openCloseButton.addEventListener('click', e =>{menuMobileItems.classList.toggle('menu-mobile-closed')});

workItems.forEach(item => {
    item.addEventListener('click', e => {
        e.preventDefault();
        currentIndex = parseInt(item.getAttribute('data-id'));
        const contentArr= document.querySelectorAll('.item');

        contentArr.forEach(item => {item.classList.add('item--hide');});
        contentArr[currentIndex].classList.toggle('item--hide');
        document.querySelector('#screen').style['animation-name'] = 'fade';
        document.querySelector('body').style['overflow']='hidden';
      
       
      
        setTimeout(()=> {
            document.querySelector('.details-container').style['display'] = 'block';
        }, 1000);

        setTimeout(()=>{document.querySelector('#screen').style = "";},2000) 
        
    })
});

closeButton.addEventListener('click', e =>{
    document.querySelector('#screen').style['animation-name'] = 'fade';
    
    setTimeout(()=> {
        document.querySelector('.details-container').style['display'] = 'none';
        document.querySelector('body').style['overflow']='auto';
    }, 1000);
    setTimeout(()=>{document.querySelector('#screen').style = "";},2000);

});

nextButton.addEventListener('click', e =>{
    if (currentIndex == workItemsCount - 1)
    {
        currentIndex = 0;
    }
    else
    {
        currentIndex++
    }

    loadGalleryItem(currentIndex);
});

prevButton.addEventListener('click', e =>{
    if (currentIndex == 0)
    {
        currentIndex = workItemsCount - 1;
    }
    else
    {
        currentIndex--
    }

    loadGalleryItem(currentIndex);
});

function loadGalleryItem(index)
{
    const items = document.querySelectorAll('.item');

    items.forEach (item => 
        {
        item.classList.add('item--hide');
    });

    items[index].classList.toggle('item--hide');

}