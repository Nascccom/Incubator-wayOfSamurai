import React from 'react';
import './App.css';
import {Header} from './components/Header/Header';
import {Navbar} from './components/Navbar/Navbar';
import {Profile} from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import {NewsPage} from './components/NewsPage/NewsPage';
import {MusicPage} from './components/MusicPage/MusicPage';
import {Settings} from './components/SettingsPage/Settings';
import {DialogsPage} from './components/DialogsPage/DialogsPage';
import {RootStateType} from './components/Redux/state';


type AppPropsType = {
    state: RootStateType
}

function App(props: AppPropsType) {
    return (
          <div className="app-wrapper">
              <Header/>
              <Navbar/>
              <div className="app-wrapper-content">
                  <Route path={'/ProfilePage'}
                         render={() => <Profile profilePage={props.state.profilePage}/>}/>
                  <Route path={'/DialogsPage'}
                         render={() => <DialogsPage dialogsPage={props.state.dialogsPage}/>}/>
                  <Route path={'/NewsPage'}
                         render={() => <NewsPage/>}/>
                  <Route path={'/MusicPage'}
                         render={() => <MusicPage/>}/>
                  <Route path={'/SettingsPage'}
                         render={() => <Settings/>}/>
              </div>
          </div>

    )
}


export default App;
