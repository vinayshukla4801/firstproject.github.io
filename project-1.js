
// scroll-Animation-Selection-start

ScrollReveal({
    reset:true,
    distance:'60px',
    duration:1500,
    delay:400
})
ScrollReveal().reveal('.mainlogo',
    {
    delay:400,origin:'right',reset:false
 });

ScrollReveal().reveal('.text,#row1,#rol-col1,.itm-1,.parent-child-h5',
{
delay:400,origin:'left'
});


ScrollReveal().reveal('.box,#rol-col3,.itm-2,.ab-btn',
{
delay:400,origin:'right'
});

ScrollReveal().reveal('#row2',
{
delay:400,origin:'bottom'
});


ScrollReveal().reveal('.puchna-h',
{
delay:200,
});
ScrollReveal().reveal('.cont-h4, .cont-h2,.footer-h5',
{
delay:200,origin:'top'
});

// scroll-animation-section-end

let togelbtn=document.querySelector('.togel')
let togel=document.querySelector('.show-togel')

togelbtn.onclick=function(){
    togel.style.display='flex'
}


