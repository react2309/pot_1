import './styles/Global.scss';
import { Route } from 'react-router-dom';
import Header from './components/common/header/Header';
import Department from './components/sub/department/Department';
import Youtube from './components/sub/youtube/Youtube';
import Members from './components/sub/members/Members';
import Contact from './components/sub/contact/Contact';
import Gallery from './components/sub/gallery/Gallery';

function App() {
	return (
		<>
			{/* Header */}
			<Header />

			{/* Department */}
			<Route path='/department' component={Department} />

			{/* Youtube */}
			<Route path='/youtube' component={Youtube} />

			{/* Members */}
			<Route path='/members' component={Members} />

			{/* Contact */}
			<Route path='/contact' component={Contact} />

			{/* Gallery */}
			<Route path='/gallery' component={Gallery} />
		</>
	);
}

export default App;
