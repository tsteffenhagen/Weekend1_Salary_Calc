$(document).ready(onReady);
let sum = 0.0;
function onReady() {
    console.log('jQuery sourced');
    $('body').on('click', 'button', submitForm);
}

function submitForm () {
    
    //Adds form fields to the table
    $('table').append(`<tr><td>${$('.firstName').val()}</td>
    <td>${$('.lastName').val()}</td>
    <td>${$('.employeeID').val()}</td>
    <td>${$('.jobTitle').val()}</td>
    <td class:"sal">${$('.annualSalary').val()}</td></tr>`);
    
    //Adds salary to Total Salary 
    $('h2').replaceWith(`<h2>${(sum += parseInt($('.annualSalary').val())) / 12} </h2>`);
    
    //Clears the form
    $('form')[0].reset();
}