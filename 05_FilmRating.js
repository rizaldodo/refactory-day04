const filmRating = (age) => {
    if(age>=21){
        console.log("DEWASA");
    }else if(age>=13 && age<21){
        console.log("REMAJA");
    }else if(age>=9 && age<13){
        console.log("BIMBINGAN ORANG TUA");
    }else if(age>=1 && age<9){
        console.log("SEMUA USIA");
    }

}

filmRating(33);
filmRating(3);
filmRating(13);
filmRating(12);