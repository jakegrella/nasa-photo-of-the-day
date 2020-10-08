import React from 'react';
import styled from 'styled-components';

const StyledPhotoOfDay = styled.div`
	width: 60%;
	margin: 0 auto;
	img {
		width: 100%;
		object-fit: contain;
	}
	p {
		margin-top: 2%;
		font-size: 1.6rem;
		font-weight: 400;
		line-height: 1.2;
	}
	.description {
		text-align: left;
	}
	.copyright {
		font-weight: 700;
	}
	@media ${(pr) => pr.theme.breakpoints.medium} {
		width: 100%;
		padding: 0 5%;
	}
`;

export default function PhotoOfDay(props) {
	return (
		<StyledPhotoOfDay>
			<img src={props.imgSrc} alt={props.title} />
			<p className='description'>{props.description}</p>
			<p className='copyright'>© {props.copyright}</p>
		</StyledPhotoOfDay>
	);
}
