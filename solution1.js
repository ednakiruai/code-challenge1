const grades = 80
if(grades>79 && grades<=100){
     console.log("A") //print 'A' if marks are >79
}else if(grades>59 && grades<=79){
    console.log("B") //print 'B' if marks are >=60 and <=79
}else if(grades>48 && grades<=59){
    console.log("C") //print 'C' if marks are >=50 and <=59
}else if(grades>39 && grades<=49){
    console.log("D") // print 'D' if marks are >=40 and <=49
}else if(grades>=0 && grades<40){
    console.log("E") // print 'E' if marks are below 39
}
