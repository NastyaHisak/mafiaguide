import Blog from '../components/blog/Blog';
import {blogs} from "../helpers/blogList";

const Blogs = () => {
	return (
		<main className="section">
			<div className="container">
				<h2 className="title-1">Блог</h2>
				<ul className="projects">
					{blogs.map((blog, index) => {
						return (
							<Blog
								key={index}
								title={blog.title}
								img={blog.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};

export default Blogs;
