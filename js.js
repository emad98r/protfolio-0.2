let navArrowIn=document.querySelector('#navArrowIn'),
navArrowOut=document.querySelector('#navArrowOut'),
sideNav=document.querySelector('#sideNav'),
sM=document.querySelector('.s-m'),
sMa=document.querySelectorAll('.s-m a'),
ul=document.querySelector('#sideNav nav ul')
navList=document.querySelector(':root');


// navArrowIn.addEventListener('click',()=>{
//   navArrowIn.style.display='none'
//   navArrowOut.style.display='block'
//   sideNav.style.width='7%'
//   navList.style.setProperty('--pseudo-display', 'none')
//   sM.style.cssText='flex-direction: column;';
//   sMa.forEach((e)=>{
//     e.style.cssText='margin: .5em 0 0 0;font-size:1.5em;'
//   })
// })
// navArrowOut.addEventListener('click',()=>{
//   navArrowOut.style.display='none'
//   navArrowIn.style.display='block'
//   sideNav.style.width='15%'
//   navList.style.setProperty('--pseudo-display', 'inline-block')
//   sM.style.cssText='flex-direction: row;';
//   sMa.forEach((e)=>{
//     e.style.cssText='margin-left:0.3em; font-size:1.9em;'
//   })
// })

// side nav for small screen ------------------------
let x = window.matchMedia("(max-width: 767px)")
if(x.matches){
  navArrowIn.addEventListener('click',()=>{
    navArrowOut.style.cssText ='display:block; top:0; bottom: auto;'
    navArrowIn.style.cssText='display:none;'
    sideNav.style.cssText="width:100%; height:54%; align-items:flex-start; justify-content: flex-start; flex-direction: column; "
    navList.style.setProperty('--pseudo-display','inline-block')
    ul.style.cssText='display:block;'
  })
  navArrowOut.addEventListener('click',()=>{
    navArrowOut.style.cssText ='display:none;'
    navArrowIn.style.cssText='display:block; '
    sideNav.style.cssText="width:100%; height:10vh; flex-direction: row; "
    navList.style.setProperty('--pseudo-display', 'none')
    ul.style.cssText='display:flex;'
  })
}else{
  navArrowIn.addEventListener('click',()=>{
    navArrowIn.style.display='none'
    navArrowOut.style.display='block'
    sideNav.style.width='7%'
    navList.style.setProperty('--pseudo-display', 'none')
    sM.style.cssText='flex-direction: column;';
    sMa.forEach((e)=>{
      e.style.cssText='margin: .5em 0 0 0;font-size:1.5em;'
    })
  })
  navArrowOut.addEventListener('click',()=>{
    navArrowOut.style.display='none'
    navArrowIn.style.display='block'
    sideNav.style.width='15%'
    navList.style.setProperty('--pseudo-display', 'inline-block')
    sM.style.cssText='flex-direction: row;';
    sMa.forEach((e)=>{
      e.style.cssText='margin-left:0.3em; font-size:1.9em;'
    })
  })
}




// start navside actions -----
let homeBut = document.querySelector('#home'),
aboutMeBut = document.querySelector('#aboutMe'),
skillsBut = document.querySelector('#skills'),
educationBut = document.querySelector('#education'),
tCoureseBut = document.querySelector('#tCourese'),
servicesBut = document.querySelector('#services'),
lastProjectsBut = document.querySelector('#lastProjects'),
contactMeBut = document.querySelector('#contactMe');

let homeSection=document.querySelector('#homeSection'),
aboutMeSection=document.querySelector('#aboutMeSection'),contactSection=document.querySelector('#contactSection'),
skillsSection=document.querySelector('#skillsSection'),
edSection=document.querySelector('#edSection'),
tCoursesSection=document.querySelector('#tCoursesSection'),
servicesSection=document.querySelector('#servicesSection'),porjectsSection=document.querySelector('#porjectsSection');

homeBut.addEventListener('click',()=>{
  homeBut.classList.add('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.remove('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:flex;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:none;'

})
aboutMeBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.add('active')
  skillsBut.classList.remove('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:grid;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:none;'
})
skillsBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.add('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:grid;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:none;'
})

educationBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.remove('active')
  educationBut.classList.add('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:grid;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:none;'
})
tCoureseBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.remove('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.add('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:grid;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:none;'
})
servicesBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.remove('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.add('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:grid;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:none;'
})
lastProjectsBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.remove('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.add('active')
  contactMeBut.classList.remove('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:grid;'
  contactSection.style.cssText='display:none;'
})
contactMeBut.addEventListener('click',()=>{
  homeBut.classList.remove('active')
  aboutMeBut.classList.remove('active')
  skillsBut.classList.remove('active')
  educationBut.classList.remove('active')
  tCoureseBut.classList.remove('active')
  servicesBut.classList.remove('active')
  lastProjectsBut.classList.remove('active')
  contactMeBut.classList.add('active')

  homeSection.style.cssText='display:none;'
  aboutMeSection.style.cssText='display:none;'
  skillsSection.style.cssText='display:none;'
  edSection.style.cssText='display:none;'
  tCoursesSection.style.cssText='display:none;'
  servicesSection.style.cssText='display:none;'
  porjectsSection.style.cssText='display:none;'
  contactSection.style.cssText='display:grid;'
})


// start anime ---------------------------------
anime({
  targets:'div#sideNav',
  translateX: [
    {value:"-200"},
    {value:"0"}
  ],
  duration:500,
  easing:'easeInQuad',
});

// -------------------
anime({
  targets:'div#homeSection h2',
  opacity:[
    {value:'1',delay:'100' }
  ],
  translateY:[
    {value:'400'},
    {value:'0'}
  ],
  duration:800,
  easing:'easeInQuad',
})
anime({
  targets:'div#homeSection b',
  translateY:[
    {value:'-400'},
    {value:'0'}
  ],
  opacity:[
    {value:'1',delay:'100' }
  ],
  duration:800,
  easing:'easeInQuad',
})
anime({
  targets:'div#homeSection h1',
  translateY:[
    {value:'-400'},
    {value:'0'}
  ],
  opacity:[
    {value:'1',delay:'100' }
  ],
  duration:800,
  easing:'easeInQuad',
})

// -----------------
anime({
targets:'video',
translateX:[
  {value:'1500'},
  {value:'0'}
],
duration:1000,
easing:'easeInQuad',
});