// For Loop
let Fact=1;
for (let i=1; i<=5; i++) {
    Fact = Fact*i;    
}
console.log("The Factorial of 5 is",Fact);

// For-in Loop
let resume = {}; 
resume = {
    Name: 'Hariharan',
    Education: {
        SSLCSchool: 'National Higher Secondary School',
        HSCSchool: 'National Higher Secondary School',
        College: 'VIT University'
    },
    Experience: 'Transaction Processing associate @ Accenture for Two Years',
    Linkedin: 'www.linkedin.com/in/hari-haran-80157517b'
}

for (const key in resume) {
    console.log(key,resume[key]);
}

// for-of

let arr = [10,20,30,40,50,60];
sum=0;
for (const e of arr) {
    sum+=e;
}
console.log("Sum of Array is",sum);

// For-Each

let arr1=[155,24,165,14,222,354,124];
let max=arr1[0],min=arr1[0];
arr1.forEach(e=> {
    if(e>max)
        max=e;
    if(e<min)
        min=e;
});

console.log("Maximum & Minimum of array is:", max, min);

