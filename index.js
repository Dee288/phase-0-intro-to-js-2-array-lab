const cats = ['Milo','Otis','Garfield'] 

function destructivelyAppendCat(Ralph) {
   cats.push(Ralph);
   return cats;
}

function destructivelyPrependCat(Bob) {
  cats.unshift(Bob);
  return cats;
}

function destructivelyRemoveLastCat(){
  cats.pop();
  return cats;
}

function destructivelyRemoveFirstCat(){
  cats.shift();
  return cats;
}

function appendCat(Broom){
  const coolcats = [...cats, Broom];
  return coolcats;
}


function prependCat(Arnold){
 const allcats=[Arnold, ...cats];
  return allcats;
}

function removeLastCat(){
  const caats= cats.slice(0,cats.length-1);
  return caats;
}

function removeFirstCat(){
  const catts= cats.slice(1)
  return catts
}