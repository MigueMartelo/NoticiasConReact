import React, { Component, Fragment } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import Form from './components/Form';

class App extends Component {
	state = { news: [] };

	componentDidMount() {
		this.callApi();
	}

	callApi = async (category = 'general') => {
		const url = `https://newsapi.org/v2/top-headlines?country=co&category=${category}&apiKey=8eeed8082b284e48bdf2a58b47b0fed4`;

		const response = await fetch(url);
		const news = await response.json();

		this.setState({ news: news.articles });
	};

	render() {
		return (
			<Fragment>
				<Header title="Noticias React API" />
				<div className="container white news-container">
					<Form callApi={this.callApi} />
					<NewsList news={this.state.news} />
				</div>
			</Fragment>
		);
	}
}

export default App;
