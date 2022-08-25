const kabisat = (year) => {
    if(year % 4 == 0){
        console.log("Tahun Kabisat");
    }else{
        console.log("Bukan Tahun Kabisat");
    }
}

kabisat(2016);
kabisat(2017);
kabisat(2020);
kabisat(2022);