let learnMore = document.querySelectorAll('.learn');
learnMore.forEach(element => {
    element.addEventListener('mouseover', eventArgs =>{
        let learnOvered = eventArgs.target;
        let underline = learnOvered.nextElementSibling;
        underline.style['opacity'] = 1;
    })
    element.addEventListener('mouseout', eventArgs =>{
        let learnOvered = eventArgs.target;
        let underline = learnOvered.nextElementSibling;
        underline.style['opacity'] = 0.3;
    })
})


let contacts = document.querySelectorAll('.contacts');
contacts.forEach(element => {
    element.addEventListener('mouseenter', eventArgs =>{
        let contactOvered = eventArgs.target;
        let whiteIcon = contactOvered.nextElementSibling;
        contactOvered.classList.add('hide');
        whiteIcon.classList.remove('hide');        
    })
})

let overedContact = document.querySelectorAll('.white-contact');
overedContact.forEach(element =>{
    element.addEventListener('mouseleave', eventArgs =>{
        let leavedContact = eventArgs.target;
        let darkIcon = leavedContact.previousElementSibling;
        leavedContact.classList.add('hide');
        darkIcon.classList.remove('hide');
    })
})
