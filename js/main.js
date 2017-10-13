	var listArray=[]
function toDoList()
{

	var textValue= document.getElementById("listNote")
	var datepickerval=document.getElementById("datepicker").value
	var placeval=document.getElementById("locationId").value
	var listNoteText = document.createTextNode("ListTodo: " + textValue.value +" at " + datepickerval + " in " + placeval )
	if(listArray.length==0 && textValue.value > 0)
	{
		 listArray.push(textValue.value)
		 var newListItem= document.createElement("LI")
	     newListItem.appendChild(listNoteText)
         document.getElementById("OrderedList").appendChild(newListItem)
         document.getElementById("listNote").value=" "

	}
	else if(listArray.indexOf(textValue.value)==-1)
	{
     listArray.push(textValue.value)
	var newListItem= document.createElement("LI")
	newListItem.appendChild(listNoteText)
    document.getElementById("OrderedList").appendChild(newListItem)
    document.getElementById("listNote").value=" "
    }
 
    console.log(listArray)
    document.getElementById("listNote").value=" "
    

}
$(document).ready(function() {
    $("#datepicker").datepicker();
     
  });

$(function() {
    $('input[name="radio"]').on('click', function() {
        if ($(this).val() == 'Time') {
            $('#datepickerId').show();
            $('#placeId').hide();
        }
        else {
        	$('#placeId').show();
            $('#datepickerId').hide();
        }
    });
});	