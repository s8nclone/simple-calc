window.addEventListener('DOMContentLoaded', init);

    // all primary keys
const priKeys = ['+', '-', '/', '*', '.',
    '9', '8', '7', '6', '5', '4', '3', '2', '1', '0',];

    // secondary keys
const secKeys = ['+', '-', '/', '*',];


function init() {
    document.title = "javascript calculator"
    console.log ("Gbera!")

    let dec = false;
    let decVal = false;

    const body = document.querySelector('body');
    body.style.background = 'gray';
    
    // adding h1 element
    const header = document.createElement('h1');
    const h1 = document.createTextNode('Simple Calculator');
    header.appendChild(h1);
    header.style.textAlign = 'center';
    header.style.textDecoration= "underline"
    header.style.fontSize = '3em';
    header.style.margin = '0px';

    // creating subheading p element
    const subHeader = document.createElement('p');
    const h2 = document.createTextNode('a practice project by ');

    // creating and styling link 
    var a = document.createElement('a');
    var link = document.createTextNode ('s8nclone');
    subHeader.appendChild(h2);
    a.appendChild(link);
    a.title = 's8nclone';
    a.href = 'https://www.github.com/s8nclone';
    a.target = '_blank';
    a.style.textDecoration = 'none';
    a.style.color = 'green';

    subHeader.appendChild(a);
    subHeader.style.textAlign = 'center';
    subHeader.style.fontSize = '1.5em';

    document.body.appendChild(header);
    document.body.appendChild(subHeader);


    // creating calculator container
    const container = document.createElement('div');
    container.classList.add('container');
    container.style.maxWidth = '600px';
    container.style.margin = 'auto';
    container.style.borderRadius = '10px';
    container.style.background = 'white';
    document.body.appendChild(container);

    // creating output screen
    const output = document.createElement('input');
    output.setAttribute('type', 'text');
    output.classList.add('output');
    output.style.width = '90%';
    output.style.margin = '5%';
    output.style.lineHeight = '50px';
    output.style.fontSize = '3em';
    output.style.textAlign = 'right';
    output.style.background = 'lawngreen';
    container.appendChild(output);


    const main = document.createElement('div');
    main.classList.add('main');
    main.style.width = '100%';
    container.appendChild(main);
    priKeys.forEach(function(val) {
        // console.log(val);
        btnMaker(val, addOutput);
    })   
        btnMaker('x^', pwrOutput);
        btnMaker('AC', clnOutput);
        btnMaker('%', percOutput);
        btnMaker('=', evalOutput);
        btnMaker('C', clrOutput);

        function cOutput(v) {
            output.style.border = v + '1px solid';
            output.style.color = v;
        }

        function evalOutput() {
            
            cOutput('black');
            console.log('=');
            if(output.value === "")  {
                cOutput('red');
            } else if (decVal) {
                cOutput('red');
            }
            else {
                output.value = eval(output.value);
            }
            dec = output.value.includes('.');

        }

        function clrOutput() {
            output.value = "";
        }


        function clnOutput() {
                output.value = output.value.slice(0,-1);
            }
        

        function percOutput(num, perc) {
            cOutput('black');
            if (output.value === "") {
                cOutput('red');
            } else {
                output.value = ((num * 100)/perc);
            }
        }

        function pwrOutput() {
            cOutput('black');
            if (output.value === "") {
                cOutput('red');
            } else {
                output.value = output.value * output.value ;
            }
        }


    function btnMaker(txt, myFunction) {
        let btn = document.createElement('button');
        btn.setAttribute('type', 'button');
        btn.style.width = '18%';
        btn.style.lineHeight = '50px';
        btn.style.fontSize = '2em';
        btn.style.margin = '1%';
        btn.style.color = 'white';
        btn.style.background = 'green';
        btn.val = txt;
        btn.textContent = txt;
        btn.addEventListener('click', myFunction);

        main.appendChild(btn);
    }

    function addOutput(pressBtn) {
        cOutput('black');
        console.log(pressBtn.target.val);
        let char = pressBtn.target.val; 
        
        

        if (char == '.') {
            if (dec) {
                char='';
                cOutput('red');
            } else {
                dec = true;
            }
        }

        decVal = secKeys.includes(char);
        if (decVal){
            dec = false;
        }
        
        output.value += char;
    } 
}