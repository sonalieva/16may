let boxes = document.getElementsByClassName('circle')
let box = boxes[0];
let leftposition = 0;
let topposition = 0;
let left = 0;
window.addEventListener('keydown',function(e){
    if(e.keyCode == 39 ){
        left+=2;
        box.style.left = left + 'px';
    }
    else if(e.keyCode == 37){
        left-=2;
        box.style.left = left + 'px';

        if(left<-50){
            left = window.screen.width;
            box.style.left = left + 'px'
        }

    }
    else if(e.keyCode == 13){
        console.log(boxes)
    }
    document.body.onload = addElement;

function addElement () {
  // create a new div element
  const newDiv = document.createElement("div");

  // and give it some content
  const newContent = document.createTextNode("Hi there and greetings!");

  // add the text node to the newly created div
  newDiv.appendChild(newContent);

  // add the newly created element and its content into the DOM
  const currentDiv = document.getElementById("div1");
  document.body.insertBefore(newDiv, currentDiv);
}

})