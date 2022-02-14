import Bar from '../components/Bar/Bar';
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import Layout from '../components/Layout/Layout';
import Pagination from '../components/Pagination/Pagination';
import Table from '../components/Table/Table';
import useFetch from '../hooks/useFetch';
import './base.css';

function App() {
	const {
		student,
		size,
		setSearch,
		setSize,
		select,
		loading,
		init,
		handleClick,
	} = useFetch();

	if (init) {
		return (
			<div className='flex justify-center items-center min-h-screen'>
				<div className='loader'>Loading...</div>
			</div>
		);
	}

	return (
		<>
			<Header />
			<Hero />
			<hr />
			<Layout className='container mx-auto mb-28'>
				<h1 className='mt-10 mb-10 text-center text-gray-800 pb-5 text-4xl'>
					Hello! Welcome to Dashboard
				</h1>
				<Bar setSearch={setSearch} size={size} setSize={setSize} />
				{loading ? (
					<div className='flex justify-center items-center'>
						<div
							className='loader loader-sm'
							style={{ width: '20px' }}>
							Loading...
						</div>
					</div>
				) : (
					<Table student={student} />
				)}
				{student?.totalPages > 1 && (
					<Pagination
						handleClick={handleClick}
						select={select}
						totalPages={student?.totalPages}
					/>
				)}
			</Layout>
			<Footer />
		</>
	);
}

export default App;
