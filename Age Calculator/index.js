const form=document.querySelector("form");

form.addEventListener('submit',(event)=>{
    event.preventDefault();
    let dob = document.querySelector('.data').value;
            if (!dob) {
                document.querySelector('.result').innerText = "Please select a valid date";
                return;
            }
            let dobDate = new Date(dob);
            let today = new Date();
            
            let years = today.getFullYear() - dobDate.getFullYear();
            let months = today.getMonth() - dobDate.getMonth();
            let days = today.getDate() - dobDate.getDate();
            
            if (days < 0) {
                months--;
                let lastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
                days += lastMonth.getDate();
            }
            
            if (months < 0) {
                years--;
                months += 12;
            }
            
            document.querySelector('.result').innerText = `Your age is: ${years} years, ${months} months, and ${days} days`;
})