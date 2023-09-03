// BMI = weight (kg) / (height (cm) / 100)^2


const age = document.getElementById('age')
const male = document.getElementById('m')
const female = document.getElementById('f')
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const form = document.getElementById('form')
const result = document.getElementById('result')
const bmiValue = document.getElementById('bmi')
const statusValue = document.getElementById('comment')


function Submit(){
       console.log(height);
console.log(height.value);
console.log(weight);
console.log(weight.value);
       if(age.value == '' || height.value == '' || weight.value == '' && ( male.checked == false || female.checked == false)){
              alert('All feild required');
       }
       else if(height.value<0 ||  height.value >304){
              alert('Invalid Height');
       }
       else if(weight.value<0 || weight.value > 200){
              alert('Invalid Weight');
       }
       else{
              countBmi();
       }
}




function countBmi(){
       let bmi = (weight.value/((height.value * height.value)/10000)).toFixed(2);
       bmiValue.value = bmi;

       bmiHealth();
}

function bmiHealth(){
       var result = '';
       console.log(bmi.value);
       if(bmi.value<18.5){
         result = 'Underweight';
       }else if(18.5<=bmi.value&&bmi.value<=24.999){
         result = 'Healthy';
       }else if(25<=bmi.value&&bmi.value<=29.9){
         result = 'Overweight';
       }else if(30<=bmi.value&&bmi.value<=34.9){
         result = 'Obese';
       }else if(35<=bmi.value){
         result = 'Extremely obese';
       }

       console.log(result);
       statusValue.value = result;

}

