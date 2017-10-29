/*
Developer name: Jeandre Melaria
Project title: Item lister
Platform: Bootstrap
Programming language: HTML5, CSS3, Javascript
IDE tool: Dreamweaver
Database:  -
Project type: Email newsletter template.
File created date: 29.10.2017
Last modified: 
*/

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

//Form submit event
form.addEventListener('submit', addItem);

//Delete event
itemList.addEventListener('click', removeItem);

//Add item
function addItem(e){
	e.preventDefault();
	
	//Get input value
	var newItem = document.getElementById('item').value;
	
	//Create new li element
	var li = document.createElement('li');
	
	//Add classname to li
	li.className = 'list-group-item';
	
	//Add text to node with input value
	li.appendChild(document.createTextNode(newItem));
	
	//Create delete button element 
	var deleteBtn = document.createElement('button');
	
	//Add classes to delete button
	deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
	
	//Append textnode
	deleteBtn.appendChild(document.createTextNode('X'));
	
	//Append button to li
	li.appendChild(deleteBtn);
	
	//append li to ul 
	itemList.appendChild(li);

}

//Remove item
function removeItem(e){
	if(e.target.classList.contains('delete')){
		if(confirm('Item will be deleted. Are you sure?')){
			var li = e.target.parentElement;
			itemList.removeChild(li);
		}
	}
	
}