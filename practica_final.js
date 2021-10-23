const movies = require('./movies.json')



// 01)
let a2006 = movies.filter(function (element) {
    return element.Year == "2006"    
});
let a2007 = movies.filter(function (element) {
    return element.Year == "2007"    
});
let a2008 = movies.filter(function (element) {
    return element.Year == "2008"    
});
let a2009 = movies.filter(function (element) {
    return element.Year == "2009"    
});
let a2010 = movies.filter(function (element) {
    return element.Year == "2010"    
});
let a2011 = movies.filter(function (element) {
    return element.Year == "2011"    
});
let a2012 = movies.filter(function (element) {
    return element.Year == "2012"    
});
let a2013 = movies.filter(function (element) {
    return element.Year == "2013"    
});
let a2014 = movies.filter(function (element) {
    return element.Year == "2014"    
});
let a2015 = movies.filter(function (element) {
    return element.Year == "2015"    
});
let a2016 = movies.filter(function (element) {
    return element.Year == "2016"    
});
let a2017 = movies.filter(function (element) {
    return element.Year == "2017"    
});
let a2018 = movies.filter(function (element) {
    return element.Year == "2018"    
});


console.log(`2006 = ${a2006.length}\n 2007 = ${a2007.length}\n 2008 = ${a2008.length}\n 2009 = ${a2009.length}\n 2010 = ${a2010.length}\n 2011 = ${a2011.length}\n 2012 = ${a2012.length}\n 2013 = ${a2013.length}\n 2014 = ${a2014.length}\n 2015 = ${a2015.length}\n 2016 = ${a2016.length}\n 2017 = ${a2017.length}\n 2018 = ${a2018.length}\n `)

console.log("====================================")

// 02)
let nuevoArray = movies.map(function (element, index) {
    console.log(element.Title, index)
    return element.Title = index;
});
console.log("Mi nueva lista: ", nuevoArray)

console.log("====================================")

// 03)


// 4)
console.log("====================================")
let PeliculasQueNoSalieron = movies.filter(function (element) {
    return element.ComingSoon == true 
});
console.log("Peliculas que no salieron: ", PeliculasQueNoSalieron.length)

console.log("====================================")

// 5)
var totalPeliculas = movies.length
var PeliculasNoSalieron = PeliculasQueNoSalieron.length
Promedio = PeliculasNoSalieron * 100 / totalPeliculas
console.log(`el porcentaje de peliculas que no salieron es de %${Promedio}.`)