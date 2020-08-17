import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import { useHistory, useParams } from 'react-router-dom';

const Edit = () => {

    const { id } = useParams();
    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const onEditSubmit = async () => {
        setLoading(true);
        try {
            await api.updatePost({
                name, description,
            }, id);
            history.push('/');
        } catch {
            alert('Failed to edit post');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        api.getOnePost(id).then(res => {
             const result = res.data;
             const post = result.data;
             setName(post.name);
             setDescription(post.description);
        })
    }, []);

    return (
        <AppContainer title="Edit Post">
            <form>
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        className="form-control" 
                        type="text" 
                        value={name} 
                        onChange={e => setName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea 
                    className="form-control"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <div className="form-group">
                    <button 
                    className="btn btn-success"
                    onClick={onEditSubmit}
                    disabled={loading}
                    >
                    {loading ? 'Loading...' : 'Edit'}
                    </button>
                    <Link to="/" className="btn btn-warning">Back</Link>
                </div>
            </form>
        </AppContainer>
    );
};

export default Edit;