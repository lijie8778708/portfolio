import React from "react";
import foodorder from "../img/foodorder.png";
import youtube from "../img/fake-youtube.png";
import todo from "../img/todolist.png";
import PropTypes from "prop-types";
import blog from "../img/blog.png";
import file from "../img/file.png";
import maze from "../img//maze.png";

export default class Projects extends React.Component {

	render() {
		return (
			<React.Fragment>
				<div id="my-projects" className="container-fluid bg-light mt-5">
					<div className=" project-container container bg-light pb-5">
						<h1
							id="projects"
							className={"text-center " + this.props.fadeInRight}>
							Projects
						</h1>
						<div className="row my-5">

							<div
								className={
									"blogbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Blog with Content Management System</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"blog"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"testbg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Food Ordering System</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"vmarine"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"aguabg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Fake-youtube</h2>
									</div>
									<div>
										<button
											id="agua-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var aguaModal = document.getElementById(
													"agualuz"
												);
												modalBG.style.display = "block";
												aguaModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"todobg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>To Do List</h2>
									</div>
									<div>
										<button
											id="todo-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var todoModal = document.getElementById(
													"todolist"
												);
												modalBG.style.display = "block";
												todoModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"mazebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>Maza Generator and Solver</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"maze"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
							<div
								className={
									"filebg col-12 col-sm-12 col-md-4 " +
									this.props.fadeIn
								}>
								<div className="overlay">
									<div className="text">
										<h2>File Upload and Download</h2>
									</div>
									<div>
										<button
											id="vmarine-button"
											className="project-button"
											onClick={() => {
												var modalBG = document.getElementById(
													"gallery-card"
												);
												var marineModal = document.getElementById(
													"file"
												);
												modalBG.style.display = "block";
												marineModal.style.display =
													"block";
											}}>
											Learn More
										</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/*hidden modals*/}

				<div id="gallery-card">
					<div id="file" className="modal-card">
						<div className="visual">
							<img src={file} alt="" />
						</div>
						<div className="modal-info">
							<h2>File Upload & Download system</h2>
							<br />
							<div className="modal-description">
								<ul>
									<li>
										Select file and upload, click button to download.
									</li>
									<li>
										Implemented with Java and Swing.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>
									<a
										href="https://github.com/lijie8778708/final-project2"
										target="_blank">
										<h4>View Source Code</h4>
									</a>
								</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"file"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
					<div id="maze" className="modal-card">
						<div className="visual">
							<img src={maze} alt="" />
						</div>
						<div className="modal-info">
							<h3>Maze Generator & Solver</h3>
							<div className="modal-description">
								<ul>
									<li>
										Randomly generate a maze and find the correct path automatic
									</li>
									<li>
										Implemented with Java and Swing.
									</li>
									<li>
										Data Structure: LinkedList.
									</li>
									<li>
										Algorithm: Depth First Search, Breath First Search.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>
									<a
										href="https://www.youtube.com/watch?v=M3n_XxICPo4"
										target="_blank">
										<h4>View Demo on Youtube</h4>
									</a>
									<a
										href="https://github.com/lijie8778708/Maze"
										target="_blank">
										<h4>View Source Code</h4>
									</a>
								</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"blog"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
					<div id="blog" className="modal-card">
						<div className="visual">
							<img src={blog} alt="" />
						</div>
						<div className="modal-info">
							<h2>Blog with Management System</h2>
							<div className="modal-description">
								<ul>
									<li>
										A full stack project basic on react js and spring boot
									</li>
									<li>
										Back end: Springboot, Mybatis plus, MySQL, Jwt
									</li>
									<li>
										Front end: React, Redux, React-markdown, For-editor, Axios
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>
									<a
										href="http://47.105.63.94"
										target="_blank">
										<h3>View My Blog</h3>
									</a>
									<a
										href="https://github.com/lijie8778708/reactblog"
										target="_blank">
										<h3>View Source Code</h3>
									</a>
								</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"blog"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
					<div id="vmarine" className="modal-card">
						<div className="visual">
							<img src={foodorder} alt="" />
						</div>
						<div className="modal-info">
							<h2>Food Ordering System</h2>
							<div className="modal-description">
								<ul>
									<li>
										A simple online ordering system used springboot to build backend service and render on thymeleaf template html file
									</li>
									<li>
										Designed with Java, Springboot 2.07, SQLite,
										Maven, and Layui
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<h4>
									<a
										href="https://github.com/lijie8778708/foodorder"
										target="_blank">
										<h3>View Source Code</h3>
									</a>
								</h4>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var marineModal = document.getElementById(
											"vmarine"
										);
										modalBG.style.display = "none";
										marineModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="agualuz" className="modal-card">
						<div className="visual">
							<img src={youtube} alt="" />
						</div>
						<div className="modal-info">
							<h2>Fake-youtube</h2>
							<div className="modal-description">
								<ul>
									<li>
										A web application basic on ReactJS.
										Fetch youtube API once the search function execute
										Display video without jump to youtube website
									</li>
									<li>
										Developed with HTML5, CSS3, ReactJS,
										Axios, Youtube API
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a
									href="https://github.com/lijie8778708/fake-youtube"
									target="_blank">
									<h3>View Source Code</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var aguaModal = document.getElementById(
											"agualuz"
										);
										modalBG.style.display = "none";
										aguaModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>

					<div id="todolist" className="modal-card">
						<div className="visual">
							<img src={todo} alt="" />
						</div>
						<div className="modal-info">
							<h2>To-Do List</h2>
							<div className="modal-description">
								<ul>
									<li>
										A to-do list to keep track of goals.
									</li>
									<li>
										Developed with HTML5, CSS3, Bootstrap,
										Webpack, and ReactJS.
									</li>
								</ul>
							</div>
							<div className="modal-bottom">
								<a href="https://shrouded-taiga-59168.herokuapp.com/" target="_blank">
									<h3>View live demo</h3>
								</a>
								<p
									className="close-icon"
									style={{
										textAlign: "right",
										fontWeight: 900,
										fontSize: 2 + "rem",
										cursor: "pointer"
									}}
									onClick={() => {
										var modalBG = document.getElementById(
											"gallery-card"
										);
										var todoModal = document.getElementById(
											"todolist"
										);
										modalBG.style.display = "none";
										todoModal.style.display = "none";
									}}>
									&#10005;
								</p>
							</div>
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

Projects.propTypes = {
	bounceIn: PropTypes.string,
	fadeInLeft: PropTypes.string,
	fadeInRight: PropTypes.string,
	fadeIn: PropTypes.string,
	tada: PropTypes.string
};
