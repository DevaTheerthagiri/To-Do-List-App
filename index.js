//function to display today's date

function datefunction() {
    let date = new Date().toUTCString().slice(5, 16);
    document.getElementById("heading").innerHTML = `Today Date : ${date}`;
};


//  code to add new task in the div

document.querySelector('#push').onclick = function(){
    if(document.querySelector('#newtask input').value.length == 0){
        alert("Kindly Enter New Task!!!!")
    }

    else{
        document.querySelector('#tasks').innerHTML += `
            <div>
                <label class="list-group-item d-flex gap-3">
                    <input class="form-check-input flex-shrink-0" type="checkbox" value="" style="font-size: 1.375em;">
                    <span class="pt-1 form-checked-content">
                        <strong>${document.querySelector('#newtask input').value}</strong>
                    </span>
                    <button class="delete">
                         <i class="far" id=deleterIcon> x </i>
                    </button>
                 </label>
            </div>
        
        `;
        document.getElementById("myInput").value = "";
        var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
        
        }
        }
    }
};

