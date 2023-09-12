let arr = ["hello", "world", " Namste" , "Walla",9];
console.log(arr);


// ADDING DATA AT SPECIFIC POINT ON ARRAY
arr.splice(2,0,"India", "Nigeria");
console.log(arr);


//ARRAY INDEXING
console.log(arr[4]);


//  TO ADD IN BEGINNING
arr.unshift("Austria");


// TO ADD IN END OF ARRAY
arr.push("Brazil");
console.log(arr);


// Array slicing
// console.log(arr.slice(2,5));


// to short or combined two array
let arr2 = [3,6,3,8,1];
arr2.sort((a,b)=> a-b);
let arr3 = arr.concat(arr2);
console.log(arr3);

// TO MAKE  EMPTY ARRAY
arr.length = 0;
console.log(arr);



// TO JOIN ARRAY ELEMENTS WITH CHARACTER
let ami = arr3.join(".");
console.log(ami);


// SPLIT METHOD SPLITS A TEXT AND RETURN AN ARRAY
let text = "hello this is paragraph";
let spl = text.split(' ');
console.log(spl);

// USING THE CONCEPT OF FOR EACH LOOP
let myArray = [3,6,2,9,6,-2,-5,-9];
myArray.forEach(numbers=>console.log("array element " + " " + numbers));

// USING THE CONCEPT OF FILTERING and MAPPING

let filmap = myArray.filter(number => number>2).map(func => "this is element " + " " + func);
console.log(filmap);

// USING OBJECT METHOD

let fillm = myArray.filter(gin => gin>=0);
let maap = fillm.map(num => "value"+num);
console.log(maap);