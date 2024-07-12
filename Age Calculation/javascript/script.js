function ageCalc(){
    let temp=document.getElementById('inp').value;//Getting the dob from user
    let dob_date=new Date(temp);//Formatting the input as Date
    let cur_date=new Date();//Current Date
    let cur=cur_date.getFullYear()
    let dob=dob_date.getFullYear()
    let result=document.getElementById('ageop')
    let diff= cur-dob//Age
    let intdiff=parseInt(diff)
    let prevdob=intdiff-1//Age-1
    if(cur<dob){//If age is greater than current year
        result.innerHTML="Choose a valid age"
    }
    else if(cur==dob){
        if(cur_date.getMonth()<dob_date.getMonth())
            {
                result.innerHTML="Choose a valid age"
            }
        else if(cur_date.getMonth()==dob_date.getMonth()&&cur_date.getDate()<dob_date.getDate())
            {
                result.innerHTML="Choose a valid age"
            }
        
    }
    else if(cur_date.getMonth()-dob_date.getMonth()<0)
        {
            result.innerHTML="Your age is : "+prevdob
        }
    else if(cur_date.getMonth()-dob_date.getMonth()==0){
        if(cur_date.getDate()-dob_date.getDate()<0){
            result.innerHTML="Your age is : "+prevdob
        }
        else if(cur_date.getDate()==dob_date.getDate()){
            result.innerHTML="Happy Birthday"
        }
    }
    else{
            result.innerHTML="Your age is : "+diff
        }
    }
document.getElementById('button').addEventListener("click",ageCalc)
