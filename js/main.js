var aboutLink     = document.getElementById("aboutLink"),
    skillsLink     = document.getElementById("skillLink"),
    portfolioLink     = document.getElementById("portfolioLink"),
    experienceLink     = document.getElementById("experienceLink"),
    skillsBlock     = document.getElementById("skillsBlock"),
    portfolioBlock     = document.getElementById("portfolioBlock"),
    experienceBlock     = document.getElementById("experienceBlock"),
    aboutBlock    = document.getElementById("aboutBlock");

var blockItem = document.getElementsByClassName('blockItem');

aboutLink.onclick = function(){
    changing(aboutBlock,this)
}

skillsLink.onclick =  function(){
    changing(skillsBlock,this)
}
portfolioLink.onclick =  function(){
    changing(portfolioBlock,this)
}
experienceLink.onclick =  function(){
    changing(experienceBlock,this)
}

var linkItemClass = document.getElementsByClassName('linkItemClass');
var zIndex = 3;
function changing(blockItemName,linkItem) {
    zIndex++
    for (let index = 0; index < blockItem.length; index++) {
        blockItem[index].setAttribute("style","opacity:0;top:100px;z-index");
    }
    blockItemName.setAttribute("style",`opacity:1;top:0px;z-index:${zIndex}`);
    for (let i = 0; i < linkItemClass.length; i++) {
        linkItemClass[i].classList.remove('active')
    }
    linkItem.classList.add('active')
}
