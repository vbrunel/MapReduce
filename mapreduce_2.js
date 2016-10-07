/**
 * Created Vivien on 05/10/16.
 */

var inputString = "petit petit test blabla c'est pour bla bla bla bla voir on va tester avec c'autres choses pour voir toujours plus il s'agit de tester d'autres idées et re re re re";

var map = function (str) {
  var reg = new RegExp("[^a-zA-Z0-9_]");
    return str.split(reg).map(function(str) {
        return [str, new Array(1).fill(1)];
    });
}

var reduce = function (arr){
    arr.sort();
    for (var i = 0; i < arr.length; i++){
        for (var j = 0; j < arr.length; j++){
            if (arr[i][0]==arr[j][0]&&j!=i){
                arr[i][1][0]=arr[i][1][0]+arr[j][1][0];
                arr.splice(j,1);
            }
        }
    }

}

var mappedArray = map(inputString);
reduce(mappedArray);

console.log(mappedArray);
