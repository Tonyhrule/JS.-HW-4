//question1/
function isArray(a) {
    return toString.call(a) === "[object Array]"
  }
  
  //question2/
  function joinArray(string) {
    return string.join('+=');
  }
  
  
  //question3/ 
  function findIndex(a) {
    if index(1) = num 0 
    find index(a)
  }
  
  //question4/ 
  var array = [1, 2, 3, 4, 5],
      t = 0,
      i;
  for (i = 0; i < array.length; i += 1) 
     {
      t += array[i];
      }
  console.log('Sum : '+t );  
  
  //question5/ 
  var array = [1, 2, 3, 4, 5],
      h = 1,
      i;
  for (i = 0; i < array.length; i += 1) 
     {
      h *= array[i];
      }
  console.log('Product :  ' +h); 
  
  //question6/ 
  function deleteDuplicate(num) {
    var x,
        len=num.length,
        out=[],
        obj={};
   
    for (x=0; x<len; x++) {
      obj[num[x]]=0;
    }
    for (x in obj) {
      out.push(x);
    }
    return out;
  }
  var Tonynum = [1, 1, 2, 3, 7, 7, 0];
  result = removeDuplicates(Tonynum);
  console.log(Tonynum);
  
  //question7/ 
  function findLeapYear(x) {
     if ((x % 4 === 0 && x % 100 !== 0) || (x % 100 === 0 && x % 400 === 0)) {
                  return ;
          } else {
                  return false;
          }
  }
  console.log(findLeapYear(2000, 2018
  ));
  
  //question8/ 
  function solveFibonacci(n, x) {
    len nums()
    return (x*n-1)+(x*n-2)
  }
  
  
  
  
  