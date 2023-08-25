const intro = (e)=>{
    if(e) document.getElementById('h2').innerHTML="#BSC#"
    else document.getElementById('h2').innerHTML="Todo App"
    setTimeout(intro , 1000 , false)
}
setTimeout(intro , 500 , true)

let todoArr=[]
let doneArr=[]
let editMode = ""

const set=(i)=>{
    document.getElementById('list').innerHTML =""
if(i==0){
    for(let i=0;i<todoArr.length;i++){
        document.getElementById('list').innerHTML += ` <div class="li">
        <button onclick="done(${i})">done</button>
        <button onclick="edit('t${i}')">edit</button>
        <button onclick="del('t${i}')">delete</button>
        <div class='msg'>${todoArr[i]}</div></div>
    </div>`
    }
}else if(i==1){
    for(let i=0;i<doneArr.length;i++){
        document.getElementById('list').innerHTML += ` <div class="li">
        <button onclick="redo(${i})">redo</button>
        <button onclick="edit('d${i}')">edit</button>
        <button onclick="del('d${i}')">delete</button>
        <div class='msg'>${doneArr[i]}</div></div>
        </div>`
    } 
}else{
    for(let i=0;i<todoArr.length;i++){
        document.getElementById('list').innerHTML += ` <div class="li">
        <button onclick="done(${i})">done</button>
        <button onclick="edit('t${i}')">edit</button>
        <button onclick="del('t${i}')">delete</button>
        <div class='msg'>${todoArr[i]}</div></div>
        </div>`
    }
    for(let i=0;i<doneArr.length;i++){
        document.getElementById('list').innerHTML += ` <div class="li">
        <button onclick="redo(${i})">redo</button>
        <button onclick="edit('d${i}')">edit</button>
        <button onclick="del('d${i}')">delete</button>
        <div class='msg'>${doneArr[i]}</div></div>
        </div>`
    } 
}
}

const check = ()=>{
    let k=document.getElementById("s").selectedIndex
    set(k)
}
check()

function done(e){
doneArr.push(todoArr[parseInt(e)])
todoArr.splice(parseInt(e),1)
check()
}

function redo(e){
    todoArr.push(doneArr[parseInt(e)])
    doneArr.splice(parseInt(e),1)
    check()
}

function del(e){
    let k=parseInt(e.substring(1,2))
    if(e.substring(0,1)=='t'){
    todoArr.splice(k,1)
    }else{
    doneArr.splice(k,1)
    }
    check()
}

function edit(e){
    editMode=e
    let k=parseInt(e.substring(1,2))
    if(e.substring(0,1)=='t'){
    document.getElementById("txt").value = todoArr[k]
    }else{
    document.getElementById("txt").value = doneArr[k]
    }
}

function add(){
if(editMode==""){
    todoArr.push(document.getElementById("txt").value)
}else{
    let k=parseInt(editMode.substring(1,2))
    if(editMode.substring(0,1)=='t'){
    todoArr[k]=document.getElementById("txt").value
    }else{
    doneArr[k]=document.getElementById("txt").value
    }   
    editMode=""
}
check()
txt.value="";
}