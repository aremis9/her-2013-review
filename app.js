

function blurBG() {
    document.getElementById('bg').style.filter = 'blur(5px)'
    document.getElementById('titles').style.filter = 'none'
    document.getElementById('title').style.color = '#D95037'
}

function unblurBG() {
    document.getElementById('bg').style.filter = 'none'
    document.getElementById('title').style.color = 'white'
}

function scrolldown() {
    document.getElementById("content").scrollIntoView();
    // window.scrollTo(0, document.body.scrollHeight);
}



// window.addEventListener('scroll', (event) => {
//     let scroll = this.scrollY;
//     document.getElementById('bg').style.display = 'block';
//     document.body.style.setProperty('--scroll', scroll);

// });



// $(window).scroll(function() {

//     // If scroll almost reach the bottom
//     if($(window).scrollTop() + $(window).height() > $(document).height() - 20) {
//         // document.getElementsByTagName('nav')[0].style.display = "flex";
//         // document.getElementsByTagName('nav')[0].style.translate = "0%";
//         document.getElementsByTagName('nav')[0].style.transform = "translateY(0%)";
//         document.getElementsByTagName('nav')[0].style.transition = "0.5s";
//         document.getElementById('my-home').style.animationName = 'floating';
//     }
//     else {

//         document.getElementsByTagName('nav')[0].style.transform = "translateY(80%)";
//         document.getElementsByTagName('nav')[0].style.transition = "0.5s";
//         document.getElementById('my-home').style.animationName = 'none';
        
//     }
//  });