import {useParams} from "react-router-dom";
import {blogs} from "../helpers/blogList"

const Blog = () => {
	const {id} = useParams();
	const blog = blogs[id];

    return (
		<main className="section">
			<div className="container">
				<div className="project-details">
					<h1 className="title-1 project-details__title">{blog.title}</h1>
					{blog.description && (
						<div className="project-details__desc">
							<p>{blog.description}</p>
						</div>
					)}
				</div>
			</div>
		</main>
	);
}

export default Blog;
