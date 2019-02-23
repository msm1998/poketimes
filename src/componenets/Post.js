import React ,{Component} from 'react'
// import axios from 'axios'
import {connect} from 'react-redux'
import deletePost from '../actions/postActions'

class Post extends Component{
    // state = {
    //     post:null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
    //         .then(res=>{
    //             console.log(res)
    //             this.setState({
    //                 post:res.data
    //             })  
    //         }
    //     ) 
              
    // }
    handleClik =()=>{
        this.props.deletePost(this.props.post.id)
        console.log(this.props)
        this.props.history.push('/')
    }
    render(){
        console.log(this.props)
        const postcontent = this.props.post ? (
            <div className="post">
                <h4 className='center'>{this.props.post.title}</h4>
                <p className='center'>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn" onClick ={this.handleClik}>
                        DeletePost
                    </button>
                </div>
            </div>
        ) :( 
            <div className="center">Post Loding...</div>
        )

        return(
            <div className="route">
                {postcontent}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    return {
        post: state.posts.find(post => (post.id == id))
    };
}

const mapDispatchToProps = (dispatch) =>{
    return{
        deletePost : (id) => {dispatch(deletePost(id))}
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Post);
