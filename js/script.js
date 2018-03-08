var catModel = {
    catDisplay: null,
    cats: [
        {
          name: 'Stormy',
          imgSrc: "img/cat1.jpg",
          clickCount: 0
        },
        {
          name: 'Two Face',
          imgSrc: "img/cat2.jpg",
          clickCount: 0
        },
        {
          name: 'Cuddle Buddies',
          imgSrc: "img/cat3.jpg",
          clickCount: 0
        },
        {
          name: 'Coco',
          imgSrc: "img/cat4.jpg",
          clickCount: 0
        },
        {
          name: 'Goose',
          imgSrc: "img/cat5.jpg",
          clickCount: 0
        },
    ]
}

var Controller = {

  init: function(){
    // set Current cat to first one in list
    catModel.catDisplay = catModel.cats[0];

    // initialize views
    catListView.init()
    catView.init()
  },

  getCats: function(){
    return catModel.cats
  },

  getCurrentCat: function(){
    return catModel.catDisplay
  },

  setCatDisplay: function(cat){
    catModel.catDisplay = cat
  },

  incrementCounter: function(){
    catModel.catDisplay.clickCount++
    catView.render()
  }
}

var catListView = {

  init: function(){
  this.catListElem = document.getElementById('catList');

  this.render()
  },

  render: function(){
    // get the cats from the controller
    var cats = Controller.getCats();

    // empty the cat list
    this.catListElem.innerHTML = '';


    // loop over each cat
    for( var i = 0; i < cats.length; i++){
      cat = cats[i];

      elem = document.createElement('li')

      catRow = ''

      catRow += '<img src="' + cat.imgSrc + '" height="100"' + '>'
      catRow += '<p>' + cat.name + '</p>'
      // look up innerHTML vs textContent
      elem.innerHTML = catRow

      elem.addEventListener('click', (function(catCopy){
          return function(){
            Controller.setCatDisplay(catCopy)
            catView.render()
          }
      })(cat))

      this.catListElem.appendChild(elem)
    }
  }
}

var catView = {

  init: function(){
    this.catImg = document.getElementById('cat-main')
    this.catcount = document.getElementById('clickCount')

    this.catImg.addEventListener('click', function(){
      Controller.incrementCounter()
    })
    this.render()
  },

  render: function(){
    cat = Controller.getCurrentCat()
    this.catImg.src = cat.imgSrc
    this.catcount.innerHTML = cat.name + ' has beeeen click on '   +    cat.clickCount + ' times'
  }
}

Controller.init();
/*
my original code
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

*/
