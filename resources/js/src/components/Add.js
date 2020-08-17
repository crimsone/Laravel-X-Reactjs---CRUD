import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import api from '../api';
import { useHistory } from 'react-router-dom';

const Add = () => {

    const history = useHistory();
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const onAddSubmit = async () => {
        setLoading(true);
        try {
            await api.addPost({
                name, description,
            })
            history.push('/');
        } catch {
            alert('Failed to add post');
        } finally {
            setLoading(false);
        }
    };

    return (
        <AppContainer title="Add Post">
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
                    onClick={onAddSubmit}
                    disabled={loading}
                    >
                    {loading ? 'Loading...' : 'Add'}
                    </button>
                    <Link to="/" className="btn btn-warning">Back</Link>
                </div>
            </form>
        </AppContainer>
    );
};

export default Add;