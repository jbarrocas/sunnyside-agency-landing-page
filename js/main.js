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
    element.addEventListener('mouseover', eventArgs =>{
        let contactOvered = eventArgs.target;
        let whiteIcon = contactOvered.nextElementSibling;
        contactOvered.classList.add('hide');
        whiteIcon.classList.remove('hide');        
    })
})

let whiteIconContacts = document.querySelectorAll('.white-contact');
whiteIconContacts.forEach(element =>{
    element.addEventListener('mouseout', eventArgs =>{
        let contactOvered = eventArgs.target;
        let darkIcon = contactOvered.previousElementSibling;
        contactOvered.classList.add('hide');
        darkIcon.classList.remove('hide');
    })
})
