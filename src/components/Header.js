import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.div`
	display: flex;
	flex-flow: row nowrap;
	justify-content: space-between;
	align-items: center;
	margin: 2% 5%;
	color: ${(pr) => pr.theme.black};
	.logo {
		max-width: 350px;
	}
	h1 {
		font-size: 3rem;
		font-weight: 700;
		margin-bottom: 0.8rem;
	}
	h2 {
		font-size: 2.4rem;
		font-weight: 700;
		margin-bottom: 0.5rem;
	}
	h3 {
		font-size: 1.8rem;
		font-weight: 400;
	}
	@media ${(pr) => pr.theme.breakpoints.small} {
		flex-flow: column wrap;
		.logo {
			margin-bottom: 2%;
		}
	}
`;

export default function Header(props) {
	return (
		<StyledHeader>
			<div className='logo'>
				<img
					src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/NASA_Worm_logo.svg/320px-NASA_Worm_logo.svg.png'
					alt='NASA Logo'
				/>
			</div>
			<div>
				<h1>Photo of the Day</h1>
				<h2>{props.date}</h2>
				<h3>Title: {props.title}</h3>
			</div>
		</StyledHeader>
	);
}
