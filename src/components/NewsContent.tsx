import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import SyncLoader from 'react-spinners/SyncLoader';
import BeatLoader from 'react-spinners/BeatLoader';
import LazyLoad from 'react-lazyload';

export default function NewsContent(props: any) {
	const { topic } = props;
	const [News, setNews] = useState<any>([]);
	const [loading, setLoading] = useState(false);

	function fetchNews() {
		const apiKey = 'Z7xEsJyfhqUdpNbCfkBh8bXxQ129cLj2';

		return fetch(`https://api.nytimes.com/svc/topstories/v2/${topic}.json?api-key=${apiKey}`)
			.then((res) => res.json())
			.then((data) => {
				setLoading(true);
				setNews(data?.results);
			})
			.catch((err) => {
				console.log(err.message);
			});
	}

	useEffect(() => {
		fetchNews();
	}, []);

	return (
		<Panel>
			{loading ? (
				News &&
				News.map((article: any, index: number) => (
					<div className="card" key={index}>
						<a className="card-media" target="_blank" rel="noreferrer noopener" href={article.url}>
							<div className="img-layer">
								<LazyLoad
									height={300}
									placeholder={<SyncLoader color="var(--orange02)" css={ImageLoader} />}
								>
									<img
										src={
											article.multimedia === null
												? 'https://via.placeholder.com/360x300.png?text=Visit+nytimes.com'
												: article.multimedia[0].url
										}
										alt={article.multimedia === null ? 'no image' : article.multimedia[0].caption}
									/>
								</LazyLoad>
							</div>
							<div className="title">{article.title}</div>
						</a>
						<div className="card-text">{article.abstract}</div>
					</div>
				))
			) : (
				<BeatLoader css={NewsLoader} />
			)}
		</Panel>
	);
}

/*
 * Style
 */
const Panel = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	justify-content: center;

	.card {
		background: var(--yellow01);
		position: relative;
		margin: 0.75rem;
		box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);

		&:hover {
			transform: translateY(-3px);
		}
	}
	.card-media {
		width: 100%;
		position: relative;
		overflow: hidden;
		display: inline-block;
		cursor: pointer;

		.img-layer {
			width: 100%;
			height: 300px;
			transition: all 0.3s linear;

			img {
				width: 360px;
				height: 300px;
			}
		}
		.img-layer::before {
			content: '';
			display: none;
			height: 300px;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			background-color: rgba(200, 200, 200, 0.2);
			background: radial-gradient(circle, rgba(200, 200, 200, 0.4) 0%, rgba(200, 200, 200, 0.1) 99%);
		}
		.title {
			background: #eb5e28;
			width: calc(100% - 30px);
			margin-top: -30px;
			padding: 0.5rem;
			color: #fffcf2;
			font-size: 1.25rem;
			position: relative;
		}

		&:hover {
			.img-layer::before {
				display: block;
			}
			.img-layer {
				transform: scale(1.15);
			}
		}
	}
	.card-text {
		padding-left: 1.5rem;
		padding-right: 0.5rem;
		font-size: 1.125rem;
		margin: 1rem 0;
	}
	button {
		background: none;
		border: none;
		cursor: pointer;
		position: absolute;
		bottom: 0;
		right: 0;
		font-size: 1.5rem;
		padding: 1rem 1.5rem;
	}

	@media (max-width: 768px) {
		grid-template-columns: repeat(2, 1fr);
	}
	@media (max-width: 576px) {
		max-width: 320px;
		grid-template-columns: 1fr;
		justify-content: center;
	}
`;
const NewsLoader = css`
	grid-column: 2;

	@media (max-width: 768px) {
		grid-column: 1;
	}
`;
const ImageLoader = css`
	height: 300px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	color: var(--orange01);
	background: var(--white01);
`;
