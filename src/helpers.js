export const innerText = (id, value) => {
    document.getElementById(id).innerHTML = value
}

export const answerResult = (question,num) => {
    const section = document.createElement('section');
    section.innerHTML = `
    <h3> 
         ${question[0]} 
    </h3>
    <p>
         chisht patasxanne e ${question[5]}
    </p>
    <b> 
         duq yntrel eq ${question[num]}
    </b>
    <hr>
`
document.querySelector('#test').appendChild(section)
}