const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2003},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
]
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]



// FOREACH ------------------------------------------
companies.forEach(company => {
    console.log(company)
})




// FILTER ------------------------------------------
// const filter = ages.filter(age => age >= 21)
// const filter = companies.filter(company => company.category === "Retail")
// const filter = companies.filter(company => company.start>=1980 && company.start<=1990)
const filter = companies.filter(company => company.end - company.start >= 10)
console.log(filter)




// MAP ------------------------------------------
// const map = companies.map(company => {
//     return `${company.name} [${company.start} - ${company.end}]`
// })

const map = ages
.map(age => { return age*2 })
.map(age => { return age/2 })

console.log(map)




// SORT ------------------------------------------
// const sort = companies.sort((a,b) => a.start - b.start)
const sort = ages.sort((a,b) => a - b)
console.log(sort)




// REDUCE ------------------------------------------
// const reduce = ages.reduce((total, age) => total + age)
const reduce = companies.reduce((total, company) => total + (company.end - company.start), 0)
console.log(reduce)




// COMBINE ALL
const combine = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0 )

console.log(combine);