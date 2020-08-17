import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';

const Home = () => {
    const [posts, setPosts] = useState(null);

    const fetchPosts = () => {
        api.getAllPost().then(res => {
            const result = res.data;
            setPosts(result.data)
        })
    }

    useEffect(() => {
        fetchPosts();
    }, [])

    const renderPosts = () => {
        if(!posts) {
            return (
                <tr>
                    <td colSpan="4">
                        Loading posts...
                    </td>
                </tr>
            )
        }
        if(posts.length === 0) {
            return (
                <tr>
                    <td colSpan="4">
                        There is no post yet. Add one.
                    </td>
                </tr>
            )
        }

        return posts.map((post) => (
            <tr>
                <td>{post.id}</td>
                <td>{post.name}</td>
                <td>{post.description}</td>
                <td>
                    <Link className="btn btn-warning" to={`/edit/${post.id}`}>
                        Edit
                    </Link>
                    <button type="button" 
                    className="btn btn-danger"
                    onClick={() => {
                        api.deletePost(post.id)
                        .then(fetchPosts)
                        .catch(err => {
                            alert('Failed to delete post with id :'+ post.id);
                        });
                    }}
                    >
                        Delete
                    </button>
                </td>
            </tr>
        ))
    }

    return (
        <AppContainer title="Laravel X Reactjs">
            <Link to="/add" className="btn btn-primary">Add Here</Link>
            <div className="table-responsive">
                <table className="table table-striped mt-4">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {renderPosts()}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    );
};

export default Home;