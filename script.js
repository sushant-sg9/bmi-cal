function calculatebmi() {
    let age = document.getElementById('age').value
    if(age>=2 && age<= 120){
        let weight = document.getElementById('weight').value
        let height = document.getElementById('height').value
        
    
        let bmi = (weight / ((height*height)/10000)).toFixed(2);
        

        if(bmi<16){
            result.innerHTML = 'svere thinness = ' + bmi;
        }else if(bmi>=16 && bmi<17){
            result.innerHTML = 'Modrate thinness = ' + bmi;
        }else if(bmi>=17 && bmi<18.5){
            result.innerHTML = 'Mild thinness = ' + bmi;
        }else if(bmi>=18.5 && bmi<25){
            result.innerHTML = 'Normal = ' + bmi;
        }else if(bmi>=25 && bmi<30){
            result.innerHTML = 'Overweight = ' + bmi;
        }else if(bmi>=30 && bmi<35){
            result.innerHTML = 'Obese class 1 = ' + bmi;
        }else if(bmi>=35 && bmi<40){
            result.innerHTML = 'Obese class 2 = ' + bmi;
        }else if(bmi>=40){
            result.innerHTML = 'Obese class 3 = ' + bmi;
        }
    }else{
        alert('Invalid inputs');
        result.innerHTML = ''
    }
}