import React from 'react';
import './PostMessage.css'

const PostMessage = (props) => {
    return (
        <div className='PostMessage'>
            <form onSubmit={props.submit} className={'SendForm'}>
                <label>
                    <input
                        className={'Input'}
                        onChange={props.onChange}
                        type="text"
                        name={'author'}
                        placeholder={'Author'}
                        required
                    />
                </label>
                <label className={'SendForm__label'}>
                <textarea
                    className ={'Textarea'}
                    required
                    onChange={props.onChange}
                    name={'message'} placeholder={'Message'}
                />
                </label>
                <button  className={'glow-on-hover'}>Send</button>
            </form>
        </div>
    )
};

export default PostMessage;