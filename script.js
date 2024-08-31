
document.getElementById('additionForm').addEventListener('submit', function(event) {

    event.preventDefault();
    
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operation =document.getElementById('operation').value ;
    
    if (operation === 'add') {
        result = num1 + num2;
    } else if (operation === 'subtract') {
        result = num1 - num2;
    } else if (operation === 'multiply'){
        result = num1 * num2 ;
    } else if (operation === 'divide'){
        result = parseFloat(num1/num2) ;
    } else {
        result = 'Invalid operation';
    }
    

    document.getElementById('result').textContent = `Result: ${result}`;

});
