const $ = (name) => {
    return document.getElementById(name);
}

function getOffset(el) {
    const rect = el.getBoundingClientRect();
    return {
      left: rect.left + window.scrollX,
      top: rect.top + window.scrollY
    };
  }

$('btn').addEventListener('click', ()=>{
    $('menu').classList.toggle('menu-active');
    if($('btn').classList.contains('btn-change'))
        $('btn').classList.toggle('btn-active-change');
    else
        $('btn').classList.toggle('btn-active');
    if($('link-fade').classList.contains('fade-in'))
        $('link-fade').classList.replace('fade-in','fade-out');
    else
        $('link-fade').classList.replace('fade-out','fade-in');
});

window.addEventListener('scroll', ()=>{
    let btn = $('button-place');
    let btnbound = getOffset(btn);
    let divAbout = $('text-holder')
    let AboutBound = getOffset(divAbout);
    if(btnbound.top > AboutBound.top){
        if(!$('btn').classList.contains('btn-change')){
            $('btn').classList.add('btn-change');
            $('menu').classList.add('menu-change');
        }
        if($('btn').classList.contains('btn-active')){
            $('btn').classList.replace('btn-active','btn-active-change')
        }
    }
    if(btnbound.top < AboutBound.top){
        if($('btn').classList.contains('btn-change')){
            $('btn').classList.remove('btn-change');
            $('menu').classList.remove('menu-change');
        }
        if($('btn').classList.contains('btn-active-change')){
            $('btn').classList.replace('btn-active-change', 'btn-active')
        }
    }
})
