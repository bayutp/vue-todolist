export default{
    data(){
        return{
            todo_list:[
                {title:'Belajar html', start:'07.00', end:'08.00',done:false},
                {title:'Belajar css', start:'09.00', end:'12.00',done:false},
                {title:'Belajar javascript', start:'13.00', end:'15.00',done:false}
            ],
            start_time:'',
            end_time:'',
            title_todolist:''
        }
    },
    methods:{
        addTodo(){
            let new_item = {
                title: this.title_todolist,
                start: this.start_time,
                end: this.end_time,
                done: false
            }
            this.todo_list.push(new_item)
            this.start_time = ''
            this.end_time = ''
            this.title_todolist = ''
        },
        deleteTodo(index){
            this.todo_list.splice(index,1)
        },
        finishTodo(index){
            this.todo_list[index].done = true
        }
    }
}