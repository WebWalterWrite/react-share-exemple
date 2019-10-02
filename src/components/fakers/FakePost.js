import React, { useState, useEffect } from "react";
import { Facebook, Linkedin, Pinterest } from "../social-share/SocialShare";
import { Category, Infos, Post, Title, Preview } from "./fakepost.styled";
import { Socials } from "../social-share/SocialContainer";
import { data } from "./fakedata";
import sharing from "../../utils/style/kim-daniels-OrkEasJeY74-unsplash.jpg";

const FakePost = () => {
	const [post, setPost] = useState({});
	useEffect(() => {
		setPost(data);
	}, [post]);

	return (
		<Post>
			<img src={sharing} alt="" />
			<Preview>
				<Title itemProp="name">{post.title}</Title>
				<Infos>
					<Category>{post.category}</Category>
					<p itemProp="director">
						<span role="img" aria-label="pen">
							✍
						</span>
						avec{" "}
						<span role="img" aria-label="heart">
							❤️
						</span>{" "}
						par {post.author} le {post.createdAt}
					</p>
					<p itemProp="description">{post.preview}</p>
					<div className="_read-btn">lire la suite</div>

          <h2 style={{textAlign: 'center', margin:'10px'}}>Partager</h2>
          
					<Socials>
						<Linkedin />
						<Facebook />
						<Pinterest />
					</Socials>

				</Infos>
			</Preview>
		</Post>
	);
};

export default FakePost;
