/**
 * Created Vivien on 05/10/16.
 */

//String d'input
var inputString = "petit petit test blabla c'est pour bla bla bla bla voir on va tester avec c'autres choses pour voir toujours plus il s'agit de tester d'autres idées et re re re re";

//Fonction map
var map = function (str) {
    var reg = new RegExp("[^a-zA-Z0-9_]");
    return str.split(reg).map(function(str) {
        return [str, new Array(1).fill(1)]; //On utilise la fonction map de Array pour générer un tableau de type [String, Array] ([Key,Value])
    });
}

//Fonction shuffle ansd sort
var sort = function (arr) {
    var sortedArray = arr.sort(); //Tri par ordre alphabétique
    var size = sortedArray.length - 1;
    for(var i = 0; i < size; i++) { //Si deux mots key succesives sont identiques alors on ajoute un élément à l'Array de Value
        if (sortedArray[i][0] == sortedArray[i+1][0]) {
            sortedArray[i][1].push(1);
            sortedArray.splice(i+1, 1);
            size--;
            i--;
        }
    }
    return sortedArray
}

//Fonction reduce
var reduce = function (arr){
    for (var i = 0; i < arr.length; i++)
    {   //On regroupe les Values de l'Array grâce à la fonction Reduce
        arr[i][1] = arr[i][1].reduce(function(a, b) {
            return a + b;
        });
    }
}

//Test du MapReduce Algorithm
var mappedArray = map(inputString);
var shuffledArray = sort(mappedArray);
reduce(shuffledArray);

console.log(mappedArray);