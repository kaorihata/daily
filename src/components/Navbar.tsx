import styled from '@emotion/styled';
import { FiHome, FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import { Turn as Hamburger } from 'hamburger-react';

export default function Navbar() {
	const [isOpen, setOpen] = useState(false);
	const close = () => {
		setOpen(false);
	};

	let prevScroll = window.pageYOffset;
	window.onscroll = function () {
		const currentScroll = window.pageYOffset;
		// console.log(prevScroll, currentScroll)
		if (prevScroll > currentScroll || prevScroll < 0) {
			document.querySelector('#navbar').style.top = '0';
		} else {
			document.querySelector('#navbar').style.top = '-50px';
		}
		prevScroll = currentScroll;
	};

	return (
		<Nav>
			<Hamburger rounded toggled={isOpen} toggle={setOpen} size={32} color="var(--white01)" distance="lg" />
			<div className={'nav-list ' + (isOpen ? 'open' : '')}>
				<Link className="nav" to="/Daily" onClick={close}>
					<FiHome style={{ fontSize: '31px' }} />
					<span>HOME</span>
				</Link>
				<Link className="nav" to="/Daily/login" onClick={close}>
					<FiLogIn style={{ fontSize: '31px' }} />
					<span>LOGIN</span>
				</Link>
			</div>
		</Nav>
	);
}

/*
 * Style
 */
const Nav = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	position: fixed;
	top: 0;
	z-index: 999;
	display: block;
	background: var(--orange01);

	.nav-btn {
		background: #000;
	}
	.nav-list {
		z-index: 999;
		transition: all 0.4s ease-in-out;
		margin-left: -200px;
		background: none;
		position: absolute;
		top: 45px;
	}
	.open {
		margin-left: 0;
		background: var(--orange01);
	}
	.nav {
		color: var(--white01);
		padding: 0.5rem 0.75rem;
		display: flex;
		align-items: center;
		&:hover {
			color: var(--black01);
			transition: 0.6s;
		}
		span {
			font-size: 1.25rem;
			margin-left: 0.25rem;
		}
	}
`;
