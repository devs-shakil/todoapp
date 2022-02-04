let SubmitButton = document.querySelector('.todo')
let list = document.querySelector('.list')
const taskList = [];

    function handleSubmit(event){

        event.preventDefault();
        const inputData =  event.target.insert.value;
        
        const task = {
            id: Date.now(),
            task: inputData,
            isCompleted: false,
        }
        taskList.push(task);
         event.target.reset();

        const html = taskList.map(function(item) {
            return `<li class="listStyle">
                        <input type="checkbox"/>
                        <span> ${item.task}</span>
                        <button>&times; </button>
                        
                    </li>`
        }).join(" ");
        console.log(html);
       
        

        list.innerHTML = html;

    }
 

    SubmitButton.addEventListener('submit', handleSubmit);