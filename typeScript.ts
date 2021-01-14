// let x: number = 2;
// console.log(x);

// let y: boolean = true;
// console.log(y);

// let z: string = "hello world"
// console.log(z);

// let mix: any = "hi" // יכול להיות כל סוג של משתנה 
// console.log(mix);

// סוגי מערכים
// let array1: string[] =[];
// let ar1: any[] = [ 1,2,true, "hello"];  


// /// דוגמאות לפונקציות

// function sum(x: number, y: string): string {
//     return y;

// }
// sum(3, "hello");

///



// function ftscFunc(param: number): string {
//     let numArrey: number[] = [];

//     for (let i = 0; i < 10; i++) {
//         let rnd = Math.floor(Math.random() * 11);
//         numArrey.push[rnd]

//         if (param == numArrey[i]) {
//             console.log('number was found');
//             return;
//         }
//     }
//     return 'sorry, maybe next time';
// }
// ftscFunc(5)

// צרו פונקציה שעושה חיסור
// מקבלת שניי מספריפ ומחזירה מספר אחד
// המספר השני הוא דיפולטבי וערכו 1
// צרו מספר שלישי שהוא אופציונאלי

function minusFunc(num1: number, num2: number = 1, num3?: number): number {
    return num3 ? num1 - num2 - num3 : num1 - num2;


}
let sum: number = minusFunc(10, undefined)





