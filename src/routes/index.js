import React                 from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout            from 'layouts/CoreLayout';
import HomeView              from 'views/HomeView';
import AboutView             from 'views/AboutView';

// import { render } from 'react-dom';


export default (
  <Route name='home'        component={CoreLayout} path='/'>
    <IndexRoute component={HomeView} />
    <Route name='about'      component={AboutView}  path='/about' />
  </Route>
);


// render((
//   <Route name='home'        component={CoreLayout} path='/'>
//     <IndexRoute component={HomeView} />
//     <Route name='about'      component={AboutView}  path='/about' />
//   </Route>
// ), document.getElementById('root'));
