import React, {Component} from 'react';
import jsonData from '../data/posts.json';
class PostList extends Component {
    render(){
        return (
            <div>
                
                {jsonData.map((postDetails,index)=>{
                    return  (
                        <div>
                            <h1>{postDetails.title}</h1>
                            <h2>{postDetails.date}</h2>
                            <h3>{postDetails.slug}</h3>
                            <table border='3px'>
                                <th>One</th>
                                <th>Two</th>
                                <tr><td>{postDetails.title}</td><td>{postDetails.date}</td></tr>
                                
                            </table>
                        </div>)
                        
                    
                })}
            </div>
          );
        } 
    }
  

export default PostList;
