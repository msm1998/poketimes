import React,{Component} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom'
import pokeball from '../pokeball.png'
import {connect} from 'react-redux'

class Home extends Component{
    // state = {
    //     posts:[]
    // }
    // componentDidMount(){
    //     axios.get("https://jsonplaceholder.typicode.com/posts")
    //         .then(pos=>{
    //             console.log(pos)
    //             this.setState({
    //                 posts:pos.data.slice(0,10)
    //             })
    //         })
    // }
    render(){
        const {posts} = this.props;
        const postList = posts.length ? (
            posts.map(post=>{
                return(
                    <div className="post card" key = {post.id}>
                        <img src={pokeball} alt="A pokeball"/>
                        <div className="card-content">
                            <Link to={'/'+ post.id}>
                                <h3 className='card-title red-text'>{post.title}</h3>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    </div>
                )
            })
        ) : (
            <div className="center">No Post Yet</div>
        )
        return(
            <div className="container home">
                <h1 className ="center">Home-Page</h1>
                {postList}
            </div>
        )
    }
    
}

const mapStateToProps =(state)=>{
    return{
        posts:state.posts
    }
}

export default connect(mapStateToProps) (Home);