elements = []
counts = [0,0,0,0,0]
for(var i = 0; i < 5; i++){
  elements[i] = document.getElementById('cat' + (i + 1).toString())
  elements[i].addEventListener('click', (function(count, catId){
    return function(){
      count++
      document.getElementById('cat-main').src = 'img/cat' + (catId + 1).toString() + '.jpg'
      //document.querySelector('#clickCountPost').innerHTML = //document.querySelector('#cat'+(catId+1)).textContent + ' has been clicked ' + count + ' times!' -- This is a different solution to previous line of code
      document.querySelector('#clickCountPost').innerHTML = elements[catId].children[1].textContent + ' has been clicked ' + count + ' times!'
    }
  })(counts[i], i ))
}












//var clickCount = document.getElementById('clickCount').innerHTML;
//document.getElementById('clickCount').innerHTML; = 'The cat has been clicked ' + count + ' times!';
