

const initstate = {
    posts:[
        {id:1,title:'hello world',body:'world is beautiful'},
        {id:2,title:'hello world 1',body:'world is  very beautiful'},
        {id:3,title:'hello world 2',body:'world is some beautiful'},
        {id:4,title:'hello world 3',body:'world is  luck beautiful'},
    ]
}


const rootReducer =(state = initstate,action) =>{
    if (action.type === 'DELETE_POST'){
        let newPost = state.posts.filter(post =>{
            return post.id !== action.id
        })
        return{
            ...state,
            posts:newPost
        }
    }
    return state;
    
}

export default rootReducer