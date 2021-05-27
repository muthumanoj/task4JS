let request = new XMLHttpRequest();
request.open("GET","https://restcountries.eu/rest/v2/all",true);
request.send();

request.onload=()=>{
    let data = JSON.parse(request.response);

    let asiaPopulation=[];
    let countryname=[];
    let countrycaptital=[];
    let peoples=[];
   
    
 //asia region
    let country = data.filter(element => {
     return element.region=='Asia';
   });
  //asia total population using filter and reduce
country.filter((element)=>{

     asiaPopulation.push(element.population);

 });

 let asiatotalpopulation=asiaPopulation.reduce((pre,acum) =>
 {
      return(pre+=acum);
 });
 console.log(country)

 console.log("Asia Total Population",asiatotalpopulation);
 

//print countryname,captial usinh foreeach

data.forEach((element)=>{
     if(element.population < 200000 && element.name && element.capital){
         peoples.push(element.population);
          countryname.push(element.name);
          countrycaptital.push(element.captial);
console.log("Country Names " +element.name+" Population " +element.population+ " Captial is " +element.capital)
     }

});
 


let totpop = peoples.reduce((pre, accum) => {
     return (pre += accum);
   });
   console.log('Below 2lacks peoples totals  ' +totpop+'  total countries  ' +countryname.length);


} 


   