let input = document.getElementById.Id('inputbox');
let button = document.querySelectorAll('button');

let string = "";  
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventlistener('click', (e) =>{
        if(e.terget.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        string += e.target.innerHTML;
        input.value = string;
    })
})