// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// import LoginPage from './components/LoginPage';

// const App = () => {
//   return (
//     <Router>
//       <Routes>
//         <Route exact path="/" component={LoginPage} />
//         {/* Add more routes for other pages if needed */}
        
//       </Routes>
//     </Router>
//   );
// };

// export default App;
import React from 'react';
import LoginPage from './components/LoginPage';

const App = () => {
  return (
    <div>
      <LoginPage />
    </div>
  );
};

export default App;

