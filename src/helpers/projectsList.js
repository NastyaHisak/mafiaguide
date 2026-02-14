import project01Video from "./../video/01-v.mp4";
import project01 from "./../img/projects/01.jpg";
import project01s1 from "./../img/projects/01-1.jpg";
import project01s2 from "./../img/projects/01-2.jpg";
import project01s3 from "./../img/projects/01-3.jpg";

import project02Video from "./../video/02-v.mp4";
import project02 from "./../img/projects/02.jpg";
import project02s1 from "./../img/projects/02-1.jpg";
import project02s2 from "./../img/projects/02-2.jpg";
import project02s3 from "./../img/projects/02-3.jpg";
import project02s4 from "./../img/projects/02-4.jpg";


import project03Video from "./../video/03-v.mp4";
import project03 from "./../img/projects/03.jpg";
import project03s1 from "./../img/projects/03-1.jpg";
import project03s2 from "./../img/projects/03-2.jpg";
import project03s3 from "./../img/projects/03-3.jpg";


import project04Video from "./../video/04-v.mp4";
import project04 from "./../img/projects/04.jpg";
import project04s1 from "./../img/projects/04-1.jpg";
import project04s2 from "./../img/projects/04-2.jpg";
import project04s3 from "./../img/projects/04-3.jpg";
import project04s4 from "./../img/projects/04-4.jpg";

import project05Video from "./../video/05-v.mp4";
import project05 from "./../img/projects/05.jpg";
import project05s1 from "./../img/projects/05-1.jpg";
import project05s2 from "./../img/projects/05-2.jpg";

const skills = [
	{
		id: 0,
		title: 'JavaScript',
	},
	{
		id: 1,
		title: 'TypeScript',
	},
	{
		id: 2,
		title: 'Angular',
	},
	{
		id: 3,
		title: 'React',
	},
	{
		id: 4,
		title: 'Webpack',
	},
	{
		id: 5,
		title: 'SCSS',
	},
	{
		id: 6,
		title: 'MongoDB',
	},
	{
		id: 7,
		title: 'Postman',
	},
	{
		id: 8,
		title: 'Swagger',
	}

];

export {skills}

const projects = [
	{
		title: 'Freelance Studio SPA',
		skills: [skills[0].title, skills[4].title, skills[5].title, skills[6].title, skills[7].title, skills[8].title],
		description: 'SPA-приложения на JavaScript. Включает реализацию основных процессов веб-студии в SPA, а также управление заказами и работу с фрилансерами. Разработаны функций CRUD для управления данными в приложении.',
		img: project01,
		slider: {
			video: project01Video,
			img: [project01s1, project01s2, project01s3],
		},
		gitHubLink: 'https://github.com/NastyaHisak/freelance-studio',
	},
	{
		title: 'Интернет-магазин',
		skills: [skills[1].title, skills[2].title, skills[5].title, skills[6].title, skills[7].title, skills[8].title],
		description: 'Интернет-магазин с использованием фреймворка Angular. Интернет-магазин включает в себя главную страницу с блоками общей информацией, поиск по наименованию товара, слайдеры, карта проезда. В каталоге представлены карточки товаров, фильтр по категориям и подкатегориям, фильтр сортировки, пагинация. Реализован личный кабинет пользователя с сохранением данных о нем. Разработан полный функционал оформления заказа, добавление в избранное.',
		img: project02,
		slider: {
			video: project02Video,
			img: [project02s1, project02s2, project02s3, project02s4],
		},
		gitHubLink: 'https://github.com/NastyaHisak/homeDecor-store',
	},
	{
		title: 'Cайт веб-студии',
		skills: [skills[1].title, skills[2].title, skills[5].title, skills[6].title, skills[7].title, skills[8].title],
		description: 'На сайте реализована главная страница, авторизация, регистрация, блог с фильтрами, пагинация, возможность комментировать статьи (для зарегистрированных пользователей).',
		img: project04,
		slider: {
			video: project04Video,
			img: [project04s1, project04s2, project04s3, project04s4],
		},
		gitHubLink: 'https://github.com/NastyaHisak/itStorm',
	},
	{
		title: 'ItQuiz SPA',
		skills: [skills[0].title, skills[4].title],
		description: 'SPA-приложение Quiz для тестирования пользователей. В проект внедрена авторизация. При прохождении теста есть возможность пропустить вопрос, вернуться к предыдущему, время на прохождение теста ограничено. По завершению тестирования можно проверить правильность результатов.',
		img: project03,
		slider: {
			video: project03Video,
			img: [project03s1, project03s2, project03s3],
		},
		gitHubLink: 'https://github.com/NastyaHisak/itQuiz',
	},
	{
		title: 'Memory game',
		skills: [skills[0].title, skills[3].title],
		description: 'Игра "Memory Game" на React. Включает работу со стейтом и пропсами для управления состоянием игры, включая подсчет кликов и отслеживание открытых карточек. Реализована логики игры, включая обработку кликов, сравнение карточек и определение победы.',
		img: project05,
		slider: {
			video: project05Video,
			img: [project05s1, project05s2],
		},
		gitHubLink: 'https://github.com/NastyaHisak/MemoryGame-React',
		link: 'https://nastyahisak.github.io/MemoryGame-React/',
	}
];

export {projects}


