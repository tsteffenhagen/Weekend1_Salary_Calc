$(document).ready(onReady);
let sum = 0.0;

function onReady() {
    $('body').on('click', 'button', submitForm);
    // $('tr').on('click', 'td', removeEmployee);
    $('body').on('click', 'tr.removable', removeEmployee);
    $('body').on("mouseover", 'tr.removable', moused);
    $('body').on("mouseleave", 'tr.removable', deMoused);
}

function submitForm () {
    
    //Adds form fields to the table
    $('table').append(`<tr class="removable"><td>${$('.firstName').val()}</td>
    <td>${$('.lastName').val()}</td>
    <td>${$('.employeeID').val()}</td>
    <td>${$('.jobTitle').val()}</td>
    <td class:"sal">${$('.annualSalary').val()}</td></tr>`);
    
    //Adds salary to Total Salary 
    $('h2').replaceWith(`<h2>${(sum += parseInt($('.annualSalary').val())) / 12} </h2>`);
    
    //Clears the form
    $('form')[0].reset();
}

function removeEmployee() {
    $(this).closest('tr').remove();//removes the row that is clicked on
 
    $('h2').replaceWith(`<h2>${(sum -= parseInt($('.sal').val())) / 12} </h2>`);
    //removes salary from removed employee
}

function moused(){
    $(this).css("color", "red");   
};//changes color to red when moused over
function deMoused(){
    $(this).css("color", "black");
};//changes back to original color