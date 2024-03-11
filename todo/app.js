let todo=[];

let req = prompt("please enter your request");

while(true){
    if(req=="quit"){
        console.log("quitting");
        break;
    }
    if(req=="list"){
        console.log("--------------------");

        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }

        console.log("--------------------");   
    }else if(req=="add"){
        let task = prompt("entre a task to add");
        todo.push(task);
        console.log("task added");
    }else if(req=="delete"){
        let idx = prompt("please entre task index to delete");
        todo.splice(idx,1);

    }
    req= prompt("please enter your request");


}