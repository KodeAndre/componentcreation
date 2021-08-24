// eslint-disable-next-line
import GlobalStyles from './GlobalStyles.js'
// eslint-disable-next-line
import Footer from './Footer'
// eslint-disable-next-line
import Team from './Team'
// eslint-disable-next-line
import TopNav from './TopNav'

export default function App() {
  return (
    <div>
      <GlobalStyles />
        <TopNav />
        <Team />
        <Footer />
    </div>
  );
}