const grade = (num) => {
    if(num>=90){
        console.log('A');
    }else if(num>=80 && num<90){
        console.log('B');
    }else if(num>=70 && num<80){
        console.log('C');
    }else if(num>=60 && num<70){
        console.log('D');
    }else if(num<60){
        console.log('E');
    }
}


grade(30);
grade(100);
grade(86);
grade(70);