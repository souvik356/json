const data = require('./food.json');




// list all the food items
data.forEach((items) => {
    // console.log(items.foodname);
});



// list all the food items with category vegetable
data.forEach((items) =>{
    if(items.category ==='Vegetable'){
        // console.log(items.foodname);
    }
});



// list all the food items with category fruit

data.forEach((items) =>{
    if(items.category ==='Fruit'){
        // console.log(items.foodname);
    }
})


// list all the food items with category protein

data.forEach((items) =>{
    if(items.category === 'Protein'){
        //  console.log(items.foodname);
    }
})


// list all the food items with category nuts


data.forEach((items) =>{
   if(items.category ==='Nuts'){
    // console.log(items.foodname);
   }
});


// list all the food items with category grains

data.forEach((items) =>{
    if(items.category ==='Grain'){
        // console.log(items.foodnam
    }
});

// list all the food items with category dairy 

data.forEach((items) =>{
    if(items.category ==='Dairy'){
        // console.log(items.foodname);
    }
})

// list all the food items with calorie above 100 calories


data.forEach((items) =>{
    if(items.calorie > 100){
        // console.log(items.foodname);
    }
})


// list all the food items with calorie below 100 calories


data.forEach((items) =>{
    if(items.calorie < 100){
        // console.log(items.foodname);
    }
})

// list all the food items with highest protein content to lowest

data.sort((a,b) => b.protiens - a.protiens);

data.forEach((items) =>{
    // console.log(items.foodname);
})

// list all the food items with lowest carb content to highest

data.sort((a,b) => a.cab - b.cab);

data.forEach((items) =>{
    // console.log(items.foodname);
})

