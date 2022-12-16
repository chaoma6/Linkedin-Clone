import React, { useState, useEffect } from 'react';
import CreateIcon from '@mui/icons-material/Create';
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay';
import ImageIcon from '@mui/icons-material/Image';
import EventNoteIcon from '@mui/icons-material/EventNote';
import './Feed.css';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import InputOption from './InputOption';
import Post from './Post';
import { db } from './firebase';
import firebase from 'firebase/compat/app';

function Feed() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		db.collection('posts')
			.orderBy('timestamp', 'desc')
			.onSnapshot((snapshot) =>
				setPosts(
					snapshot.docs.map((doc) => ({
						id: doc.id,
						data: doc.data(),
					}))
				)
			);
	}, []);

	const sendPost = (e) => {
		e.preventDefault();

		db.collection('posts').add({
			name: 'Max',
			description: 'this is a test',
			message: input,
			photoUrl: '',
			timestamp: firebase.firestore.FieldValue.serverTimestamp(),
		});

		setInput('');
	};

	return (
		<div className='feed'>
			<div className='feed__inputContainer'>
				<div className='feed__input'>
					<CreateIcon />
					<form>
						<input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
						<button onClick={sendPost} type='submit'>
							Send
						</button>
					</form>
				</div>
				<div className='feed__inputOptions'>
					<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOption Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
					<InputOption Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
					<InputOption Icon={CalendarViewDayIcon} title='Write article' color='#7FC15E' />
				</div>
			</div>
			{posts.map(({ id, data: { name, description, message, photoUrl } }) => (
				<Post key={id} name={name} description={description} message={message} photoUrl={photoUrl} />
			))}
		</div>
	);
}

export default Feed;
