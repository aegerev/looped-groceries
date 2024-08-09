import React from 'react';

export const EventCard = (props) => {
	return (
		<div className="eventCard">
			{/* This div displays the title */}
			<div className="title">{props.title}</div>

			<div className="dateLocation">
				{props.date}
				{' '}|{' '}
				{props.location}
			</div>
			<div className="description">
				{props.description}
			</div>
		</div>
    );
};